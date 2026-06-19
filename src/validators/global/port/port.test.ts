import { describe, it, expect, afterEach } from "vitest";

import { z } from "@/index";

describe("PORT", () => {
  afterEach(() => z.locale.set("en"));

  it("accepts valid port numbers", () => {
    expect(z.coerce.port().parse(0)).toBe(0);
    expect(z.coerce.port().parse(80)).toBe(80);
    expect(z.coerce.port().parse(443)).toBe(443);
    expect(z.port().parse("3000")).toBe("3000");
    expect(z.port().parse("65535")).toBe("65535");
  });

  it("rejects invalid port numbers", () => {
    expect(() => z.coerce.port().parse(-1)).toThrow();
    expect(() => z.coerce.port().parse(65536)).toThrow();
    expect(() => z.port().parse("-1")).toThrow();
    expect(() => z.port().parse("65536")).toThrow();
    expect(() => z.port().parse("abc")).toThrow();
    expect(() => z.port().parse("")).toThrow();
    expect(() => z.port().parse(null as any)).toThrow();
    expect(() => z.port().parse(undefined as any)).toThrow();
    expect(() => z.coerce.port().parse(NaN)).toThrow();
    expect(() => z.coerce.port().parse(Infinity)).toThrow();
  });

  it("returns default error message in English", () => {
    const result = z.port().safeParse("99999");
    expect(result.error!.flatten().formErrors).toEqual([
      "Invalid port: must be an integer between 0 and 65535.",
    ]);
  });

  it("returns localized error message in Portuguese", () => {
    z.locale.set("pt");
    const result = z.port().safeParse("99999");
    expect(result.error!.flatten().formErrors).toEqual([
      "Porta inválida: deve ser um inteiro entre 0 e 65535.",
    ]);
  });

  it("returns custom error message when provided", () => {
    const result = z.port({ error: "Custom port error" }).safeParse("99999");
    expect(result.error!.flatten().formErrors).toEqual(["Custom port error"]);
  });
});
