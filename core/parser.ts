import { DOMParser } from "https://esm.sh/v85/@xmldom/xmldom@0.8.2";
import { Schema } from "./schema.ts";

export function parseFromString(xml: string) {
  const document = getDocumentFromString(xml);
}

function getDocumentFromString(xml: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(xml, "text/xml");
}

function convertDocumentToSchema(document: Document): Schema {
  throw new Error("TODO");
}
