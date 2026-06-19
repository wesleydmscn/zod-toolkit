import * as zod from "zod";

import { zodLocale, type _ZodLocaleState } from "./config/locale";
import * as validators from "./validators";
import * as coerces from "./coerces";

type InferredZodTypes = typeof zod;
type _ValidatorsTypes = typeof validators;
type _CoercesTypes = typeof coerces;

type ZKit = InferredZodTypes &
  _ValidatorsTypes &
  _CoercesTypes & { locale: _ZodLocaleState };

const z = Object.assign({}, zod, validators, coerces) as ZKit;

Object.defineProperty(z, "locale", {
  value: zodLocale,
  writable: false,
  enumerable: true,
});

declare namespace z {
  export type infer<T extends zod.ZodTypeAny> = zod.infer<T>;
  export type input<T extends zod.ZodTypeAny> = zod.input<T>;
  export type output<T extends zod.ZodTypeAny> = zod.output<T>;
}

export { z };
export type * from "zod";
