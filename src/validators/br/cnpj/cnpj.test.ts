import { describe, it, expect, afterEach } from "vitest";

import { z } from "@/index";

describe("CNPJ", () => {
  afterEach(() => z.locale.set("en"));

  it("accepts valid CNPJs", () => {
    expect(z.br.cnpj().parse("12.345.678/0001-95")).toBe("12.345.678/0001-95");
    expect(z.br.cnpj().parse("12345678000195")).toBe("12345678000195");
    expect(z.br.cnpj().parse("12.345.678/0001-95")).toBe("12.345.678/0001-95");
    expect(z.br.cnpj().parse("12345678000195")).toBe("12345678000195");
  });

  it("rejects invalid CNPJs", () => {
    expect(() => z.br.cnpj().parse("11.111.111/1111-11")).toThrow();
    expect(() => z.br.cnpj().parse("00000000000000")).toThrow();
    expect(() => z.br.cnpj().parse("12.345.678/0001-96")).toThrow();
    expect(() => z.br.cnpj().parse("12345678000196")).toThrow();
    expect(() => z.br.cnpj().parse("12.345.678/0001_95")).toThrow();
    expect(() => z.br.cnpj().parse("12-345-678/0001-95")).toThrow();
    expect(() => z.br.cnpj().parse(" 12.345.678/0001-95 ")).toThrow();
    expect(() => z.br.cnpj().parse("12345678 000195")).toThrow();
    expect(() => z.br.cnpj().parse("")).toThrow();
    expect(() => z.br.cnpj().parse(null as any)).toThrow();
    expect(() => z.br.cnpj().parse(undefined as any)).toThrow();
  });

  it("returns default error message in English", () => {
    const result = z.br.cnpj().safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual([
      "Invalid CNPJ: must be 14 digits in the format 00.000.000/0000-00 or 00000000000000.",
    ]);
  });

  it("returns localized error message in Portuguese", () => {
    z.locale.set("pt");
    const result = z.br.cnpj().safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual([
      "CNPJ inválido: deve conter 14 dígitos no formato 00.000.000/0000-00 ou 00000000000000.",
    ]);
  });

  it("returns custom error message when provided", () => {
    const result = z.br.cnpj({ error: "Custom CNPJ error" }).safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual(["Custom CNPJ error"]);
  });
});
