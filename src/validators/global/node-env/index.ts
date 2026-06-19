import { z } from "zod";

import type { _Params } from "@/types";
import { defaultParams } from "./locale";

export const nodeEnv = (params: _Params = defaultParams) => {
  return z.enum(["production", "development", "test", "staging"], params);
};
