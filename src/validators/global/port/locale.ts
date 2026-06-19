import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid port: must be an integer between 0 and 65535.",
  pt: "Porta inválida: deve ser um inteiro entre 0 e 65535.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
