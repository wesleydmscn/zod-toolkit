import { describe, it, expect, afterEach } from "vitest";

import { z } from "@/index";

describe("Username", () => {
  afterEach(() => z.locale.set("en"));

  it("accepts valid usernames", () => {
    expect(z.username().parse("user123")).toBe("user123");
    expect(z.username().parse("john_doe")).toBe("john_doe");
    expect(z.username().parse("alice.smith")).toBe("alice.smith");
    expect(z.username().parse("a1b2c3")).toBe("a1b2c3");
  });

  it("rejects invalid usernames", () => {
    expect(() => z.username().parse("ab")).toThrow();
    expect(() => z.username().parse("a".repeat(21))).toThrow();
    expect(() => z.username().parse("1user")).toThrow();
    expect(() => z.username().parse("_user")).toThrow();
    expect(() => z.username().parse(".user")).toThrow();
    expect(() => z.username().parse("user_")).toThrow();
    expect(() => z.username().parse("user.")).toThrow();
    expect(() => z.username().parse("user__name")).toThrow();
    expect(() => z.username().parse("user..name")).toThrow();
    expect(() => z.username().parse("user name")).toThrow();
    expect(() => z.username().parse("user-name")).toThrow();
    expect(() => z.username().parse("user@name")).toThrow();
    expect(() => z.username().parse("")).toThrow();
    expect(() => z.username().parse(null as any)).toThrow();
    expect(() => z.username().parse(undefined as any)).toThrow();
  });

  it("returns default error message in English", () => {
    const result = z.username().safeParse("a!");
    expect(result.error!.flatten().formErrors).toEqual([
      "Invalid username: must be 3–20 characters, start with a letter, and contain only letters, numbers, dots, or underscores.",
    ]);
  });

  it("returns localized error message in Portuguese", () => {
    z.locale.set("pt");
    const result = z.username().safeParse("a!");
    expect(result.error!.flatten().formErrors).toEqual([
      "Usuário inválido: deve ter 3–20 caracteres, iniciar com letra e conter apenas letras, números, pontos ou underscores.",
    ]);
  });

  it("returns custom error message when provided", () => {
    const result = z.username({ error: "Custom username error" }).safeParse("a!");
    expect(result.error!.flatten().formErrors).toEqual(["Custom username error"]);
  });
});
