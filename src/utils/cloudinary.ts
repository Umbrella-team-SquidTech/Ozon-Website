import { sha1 } from "js-sha1";

function generateSignature(payload: string): string {
  return sha1.hex(payload);
}

function generateTimestamp(): number {
  return Date.now();
}

export { generateSignature, generateTimestamp };
