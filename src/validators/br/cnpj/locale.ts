import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid CNPJ: must be 14 digits in the format 00.000.000/0000-00 or 00000000000000.",
  pt: "CNPJ inválido: deve conter 14 dígitos no formato 00.000.000/0000-00 ou 00000000000000.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
