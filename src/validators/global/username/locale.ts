import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid username: must be 3–20 characters, start with a letter, and contain only letters, numbers, dots, or underscores.",
  pt: "Usuário inválido: deve ter 3–20 caracteres, iniciar com letra e conter apenas letras, números, pontos ou underscores.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
