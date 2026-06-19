import { describe, it, expect, afterEach } from "vitest";

import { z } from "@/index";

describe("ZIP Code (CEP)", () => {
  afterEach(() => z.locale.set("en"));

  it("validates valid ZIP codes", () => {
    expect(z.br.cep().parse("12345-678")).toBe("12345-678");
    expect(z.br.cep().parse("12345678")).toBe("12345678");
  });

  it("rejects invalid ZIP codes", () => {
    expect(() => z.br.cep().parse("1234-567")).toThrow();
    expect(() => z.br.cep().parse("1234567")).toThrow();
    expect(() => z.br.cep().parse("123456789")).toThrow();
    expect(() => z.br.cep().parse("12a45-678")).toThrow();
    expect(() => z.br.cep().parse("11111-111")).toThrow();
    expect(() => z.br.cep().parse("12345_678")).toThrow();
    expect(() => z.br.cep().parse("12-345678")).toThrow();
    expect(() => z.br.cep().parse("-123456")).toThrow();
    expect(() => z.br.cep().parse("12345-")).toThrow();
    expect(() => z.br.cep().parse("12345 -678")).toThrow();
    expect(() => z.br.cep().parse(" 12345678 ")).toThrow();
    expect(() => z.br.cep().parse("")).toThrow();
    expect(() => z.br.cep().parse(null as any)).toThrow();
    expect(() => z.br.cep().parse(undefined as any)).toThrow();
  });

  it("returns default error message in English", () => {
    const result = z.br.cep().safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual([
      "Invalid CEP: must be 8 digits in the format 00000-000 or 00000000.",
    ]);
  });

  it("returns localized error message in Portuguese", () => {
    z.locale.set("pt");
    const result = z.br.cep().safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual([
      "CEP inválido: deve conter 8 dígitos no formato 00000-000 ou 00000000.",
    ]);
  });

  it("returns custom error message when provided", () => {
    const result = z.br.cep({ error: "Custom CEP error" }).safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual(["Custom CEP error"]);
  });
});
