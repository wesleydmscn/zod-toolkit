<img width="160" height="160" alt="image" src=".github/assets/zod-toolkit.png" />

# Zod Toolkit (Coming soon)

Ship production-ready schemas with Zod Toolkit. 🚀

## Features

* Validation integrated with Zod v4
* +10 schema common ready-to-use validations
* Ready for Node.js, React, Next.js, NestJS, etc.
* Easy to import and use directly with Zod schemas

Built to enhance [Zod](https://zod.dev/) standard validations, `zod-toolkit` integrates seamlessly into your projects the same way you’d use Zod.

## Basic usage

You just need to define a schema and use custom validations. For the purposes of this guide, we'll use a simple object schema:

```ts
import { z } from "zod-toolkit";

const Customer = z.object({
  fullname: z.fullname().nonempty(),
  cpf: z.br.cpf({ error: "Invalid CPF" }),
  telephone: z.br.telephone(),
});
```
