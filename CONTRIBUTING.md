# Contributing to Zod Toolkit

First off, thank you for considering contributing to **zod-toolkit**! 🎉
Whether it's fixing bugs, adding new validations, improving documentation, or enhancing tests, your contributions are highly valued.

## Getting Started

Before starting work, please **open an issue** describing what you want to implement or fix. Someone might already be working on it, or there may be reasons a feature hasn't been implemented yet. Maintainers will guide you.

### Development Setup

1. **Fork the repository**.
2. **Clone your fork**:

   ```bash
   git clone git@github.com:wesleydmscn/zod-toolkit.git
   cd zod-toolkit
   ```
3. **Install dependencies**:

   ```bash
   npm install
   ```
4. **Start experimenting or implementing features**:

   * You can create schemas, tests, or explore the library in `src/validators/`.

### Useful Commands

| Command            | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `npm build`        | Deletes `dist` and compiles `src` to `dist` using `tsup`.               |
| `npm test`         | Runs all tests using `vitest` and generates coverage.                 |
| `npm test:watch`   | Runs tests in watch mode.                                             |

### Writing Tests

zcn uses [**Vitest**](https://vitest.dev/) for testing.

* Add new tests in the `src/validators/` directory or extend existing test files.
* Ensure all tests pass before submitting a PR:

  ```bash
  npm test
  ```

### Documentation

* Update the README with any new APIs or features you add.
* Keep examples clear and concise.
* Include usage examples if you add new validations.

## Submitting a Pull Request

1. **Create a feature branch**:

   ```bash
   git checkout -b your-feature-name
   ```
2. **Implement your changes**.
3. **Run tests** and ensure everything passes.
4. **Push your branch**:

   ```bash
   git push origin your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch.

Please follow standard GitHub PR etiquette: descriptive title, clear explanation, and link to any related issues.

## Code Style

* TypeScript only.
* Follow existing patterns for Zod extension functions.
* Keep code modular and readable.
* Ensure your code is linted and formatted consistently.

## License

By contributing to zcn, you agree that your contributions will be licensed under the [**MIT License**](LICENSE).
