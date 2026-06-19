import type { TypeParams } from "zod/v4/core";
import type { _LocaleKey } from "./config/locale";

export type _LocaleErrorRecord = Record<_LocaleKey, string>;
export type _Params<T = {}> = TypeParams & T;
