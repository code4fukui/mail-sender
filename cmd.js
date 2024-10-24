import { sendmail } from "./mailutil.js";

if (Deno.args.length < 4) {
  console.log("deno run -A [from] [to] [subject] [body]")
  Deno.exit(1);
}

const from = Deno.args[0];
const to = Deno.args[1];
const subject = Deno.args[2];
const body = Deno.args[3];
await sendmail(from, to, subject, body);
