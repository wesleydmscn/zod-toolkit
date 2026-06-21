import { z } from "zod";

import type { _Params } from "@/types";
import { defaultParams } from "./locale";

const FULLNAME_REGEX =
  /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ.]*(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ.]*)+$/;

export const fullname = (params: _Params = defaultParams) =>
  z.string().refine((val) => FULLNAME_REGEX.test(val.trim()), params);
