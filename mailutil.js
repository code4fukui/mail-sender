import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const encodeMailHeader = (s) => {
  const res = "=?UTF-8?B?" + Base64.encode(new TextEncoder().encode(s)) + "?=";
  return res;
};

export const encodeMail = (from, to, subject, body) => {
  const res = `From: <${from}>
To: <${to}>
Subject: ${encodeMailHeader(subject)}
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: base64

${body}
`;
  return res;
};

export const sendmail = async (from, to, subject, body) => {
  const mail = encodeMail(from, to, subject, body);

  const p = new Deno.Command("sendmail", {
    args: ["-i", "-t", "-f", from],
    stdin: "piped",
  }).spawn();
  const writer = p.stdin.getWriter();
  await writer.write(new TextEncoder().encode(mail));
  await writer.close();
  const { code } = await p.status;
  if (code != 0) throw new Error("sendmail reply err: ", code);
};
