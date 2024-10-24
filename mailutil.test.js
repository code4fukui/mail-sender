import * as t from "https://deno.land/std/testing/asserts.ts";
import { encodeMailHeader } from "./mailutil.js";

Deno.test("simple", () => {
  const s = "あなた";
  t.assertEquals(encodeMailHeader(s), "=?UTF-8?B?44GC44Gq44Gf?=");
});
