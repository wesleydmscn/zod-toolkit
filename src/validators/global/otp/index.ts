import { z } from "zod";

import type { _Params } from "@/types";
import { defaultParams } from "./locale";

export const otp = (length: number = 6, params: _Params = defaultParams) => {
  const regex = new RegExp(`^\\d{${length}}$`);
  return z.string().refine((val) => regex.test(val), params);
};
