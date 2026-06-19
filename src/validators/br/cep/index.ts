import { z } from "zod";

import type { _Params } from "@/types";
import { defaultParams } from "./locale";

function isValidCEP(value: string): boolean {
  const cep = value.replace(/\D/g, "");

  if (!/^\d{8}$/.test(cep)) return false;
  if (/^(\d)\1{7}$/.test(cep)) return false; // ex: 11111111, 00000000, 99999999

  const cepNum = parseInt(cep, 10);
  if (cepNum < 1000000 || cepNum > 98999999) return false;

  return true;
}

export const cep = (params: _Params = defaultParams) =>
  z
    .string()
    .refine((val) => /^\d{5}-?\d{3}$/.test(val) && isValidCEP(val), params);
