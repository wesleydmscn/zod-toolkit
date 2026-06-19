import { z } from "zod";

import type { _Params } from "@/types";
import { defaultParams } from "./locale";

export const port = (params: _Params = defaultParams) => {
  return z.string().refine((val) => {
    if (!/^\d+$/.test(val)) return false;
    const num = Number(val);
    return num >= 0 && num <= 65535;
  }, params);
};

export const portNumber = (params: _Params = defaultParams) => {
  return z.coerce.number().refine((val) => {
    return Number.isInteger(val) && val >= 0 && val <= 65535;
  }, params);
};
