import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid NODE_ENV: must be one of production, development, test, or staging.",
  pt: "NODE_ENV inválido: deve ser production, development, test ou staging.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
