import { z } from "zod";

import { portNumber } from "../validators/global/port";

export const coerce = {
  ...z.coerce,
  port: portNumber,
};
