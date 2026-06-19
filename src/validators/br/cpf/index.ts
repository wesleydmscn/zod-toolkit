import { z } from "zod";

import type { _Params } from "@/types";
import { defaultParams } from "./locale";

function isValidCPF(value: string): boolean {
  const regex = /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/;
  if (!regex.test(value)) return false;

  const cpf = value.replace(/\D/g, "");

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false; // (ex: 11111111111)

  const calcCheckDigit = (base: string, factor: number) => {
    let total = 0;
    for (const num of base) {
      total += parseInt(num, 10) * factor--;
    }
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstCheck = calcCheckDigit(cpf.slice(0, 9), 10);
  const secondCheck = calcCheckDigit(cpf.slice(0, 10), 11);

  return (
    firstCheck === parseInt(cpf[9]!, 10) &&
    secondCheck === parseInt(cpf[10]!, 10)
  );
}

export const cpf = (params: _Params = defaultParams) =>
  z.string().refine(isValidCPF, params);
