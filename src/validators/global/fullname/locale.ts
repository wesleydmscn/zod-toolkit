import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid full name: must include first and last name.",
  pt: "Nome completo inválido: deve incluir nome e sobrenome.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
