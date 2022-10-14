import type { JSONSchemaType } from "ajv";
import Ajv from "ajv";

console.log("BEGIN: Manual JSON input");

type ManualJSONInput = { age: number; hello: string };
const schema: JSONSchemaType<ManualJSONInput> = {
  additionalProperties: false,
  properties: {
    age: {
      type: "integer",
    },
    hello: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["age", "hello"],
  type: "object",
};

const input = process.env.JSON_INPUT;
console.log(input);
if (input) {
//   const json = JSON.parse(input);
//   console.log(json);
//   console.log(typeof json);
  const ajv = new Ajv();
  const validator = ajv.compile(schema);
  const result = validator(JSON.parse(input));
  console.log(`JSON schema validation result: ${result}`);
  if (!result) {
    throw validator.errors;
  }
}

console.log("END: Manual JSON input");
