import { z } from "@/index";
import type { _LocaleErrorRecord, _Params } from "@/types";

const localeError: Partial<_LocaleErrorRecord> = {
  en: "Invalid OTP: must contain only digits.",
  pt: "OTP inválido: deve conter apenas dígitos.",
};

export const defaultParams: _Params = {
  error: () => localeError[z.locale.current],
};
