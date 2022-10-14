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
  let json = JSON.parse(input);
  if (typeof json === "string") {
    json = JSON.parse(json);
  }
  console.log(JSON.stringify(json, null, 4));
  const ajv = new Ajv();
  const validator = ajv.compile(schema);
  const result = validator(json);
  console.log(`JSON schema validation result: ${result}`);
  if (!result) {
    throw validator.errors;
  }
}

console.log("END: Manual JSON input");
