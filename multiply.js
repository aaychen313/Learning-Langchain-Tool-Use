import { z } from "zod";

export const multiply = {
  name: "multiply",
  description: "Multiply two numbers a and b",
  argsSchema: z.object({
    a: z.number(),
    b: z.number(),
  }),
  // The actual function run when the LLM calls your tool:
  async run({ a, b }) {
    console.log(`multiply tool invoked with`, { a, b });
    return a * b;
  },
};