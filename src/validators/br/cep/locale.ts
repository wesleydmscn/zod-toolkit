import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid CEP: must be 8 digits in the format 00000-000 or 00000000.",
  pt: "CEP inválido: deve conter 8 dígitos no formato 00000-000 ou 00000000.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
