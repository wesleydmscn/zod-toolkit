import * as locales from "zod/v4/locales";

export type _LocaleKey = keyof Omit<typeof locales, "default">;
export type _ZodLocaleState = {
  readonly current: _LocaleKey;
  set(locale: _LocaleKey): void;
};

let _locale: _LocaleKey = "en";

export const zodLocale: _ZodLocaleState = {
  get current(): _LocaleKey {
    return _locale;
  },

  set(locale: _LocaleKey) {
    _locale = locale;
    return locales[locale]();
  },
};
