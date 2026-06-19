import { z } from "zod";

import type { _Params } from "@/types";
import { defaultParams } from "./locale";

const USERNAME_REGEX = /^(?!.*[_.]{2})[a-zA-Z][a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/;

export const username = (params: _Params = defaultParams) =>
  z.string().refine((val) => val.length >= 3 && val.length <= 20 && USERNAME_REGEX.test(val), params);
