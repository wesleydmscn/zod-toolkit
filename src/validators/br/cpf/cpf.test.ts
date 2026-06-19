import { describe, it, expect, afterEach } from "vitest";

import { z } from "@/index";

describe("CPF", () => {
  afterEach(() => z.locale.set("en"));

  it("accepts valid CPFs", () => {
    expect(z.br.cpf().parse("935.411.347-80")).toBe("935.411.347-80");
    expect(z.br.cpf().parse("93541134780")).toBe("93541134780");
    expect(z.br.cpf().parse("714.602.380-01")).toBe("714.602.380-01");
    expect(z.br.cpf().parse("71460238001")).toBe("71460238001");
  });

  it("rejects invalid CPFs", () => {
    expect(() => z.br.cpf().parse("111.111.111-11")).toThrow();
    expect(() => z.br.cpf().parse("00000000000")).toThrow();
    expect(() => z.br.cpf().parse("935.411.347-81")).toThrow();
    expect(() => z.br.cpf().parse("286.603.500-04")).toThrow();
    expect(() => z.br.cpf().parse("935.411.347_80")).toThrow();
    expect(() => z.br.cpf().parse("935-411-347-80")).toThrow();
    expect(() => z.br.cpf().parse(" 935.411.347-80 ")).toThrow();
    expect(() => z.br.cpf().parse("9354113 4780")).toThrow();
    expect(() => z.br.cpf().parse("")).toThrow();
    expect(() => z.br.cpf().parse(null as any)).toThrow();
    expect(() => z.br.cpf().parse(undefined as any)).toThrow();
  });

  it("returns default error message in English", () => {
    const result = z.br.cpf().safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual([
      "Invalid CPF: must be 11 digits in the format 000.000.000-00 or 00000000000.",
    ]);
  });

  it("returns localized error message in Portuguese", () => {
    z.locale.set("pt");
    const result = z.br.cpf().safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual([
      "CPF inválido: deve conter 11 dígitos no formato 000.000.000-00 ou 00000000000.",
    ]);
  });

  it("returns custom error message when provided", () => {
    const result = z.br.cpf({ error: "Custom CPF error" }).safeParse("111");
    expect(result.error!.flatten().formErrors).toEqual(["Custom CPF error"]);
  });
});
