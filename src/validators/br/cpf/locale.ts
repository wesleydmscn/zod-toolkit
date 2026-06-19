import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid CPF: must be 11 digits in the format 000.000.000-00 or 00000000000.",
  pt: "CPF inválido: deve conter 11 dígitos no formato 000.000.000-00 ou 00000000000.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
