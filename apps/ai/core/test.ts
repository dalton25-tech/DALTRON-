import { AIEngine } from "./engine.js";

const engine = new AIEngine();

const result = await engine.run({
  input: "Hello DALTRON",
});

console.log(result);