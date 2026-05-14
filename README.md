# mail-sender

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A command-line tool and API for sending emails using Deno. It relies on a system-installed `sendmail` command for mail delivery.

## Features

- Send emails from the command-line or programmatically within Deno.
- Correctly handles UTF-8 encoding for email subjects.
- Sets appropriate headers for UTF-8 body content.

## Requirements

- [Deno](https://deno.land/) runtime
- A command-line `sendmail` utility installed and configured on your system (e.g., Postfix, msmtp).

## Usage

### Command-Line

The script requires permission to execute the `sendmail` process. Use the `--allow-run=sendmail` flag.

```sh
deno run --allow-run=sendmail cmd.js from@example.com to@example.org "Test Subject" "This is the email body."
```

### API

Import the `sendmail` function from `mailutil.js` to send emails from your Deno application. Your script will require the `--allow-run=sendmail` permission to execute.

```js
import { sendmail } from "https://code4fukui.github.io/mail-sender/mailutil.js";

const from = "sender@example.com";
const to = "recipient@example.org";
const subject = "こんにちは世界"; // "Hello World" in Japanese
const body = "This is a test email with a UTF-8 subject.";

await sendmail(from, to, subject, body);
```

## References

- [Sending Japanese emails with Deno](https://fukuno.jig.jp/4474)
- [Introduction to Postfix email server](https://www.kagoya.jp/howto/it-glossary/mail/postfix/)
- [Sending emails with shell scripts](https://qiita.com/richmikan@github/items/0aea653765e485e16945)

## License

MIT License — see [LICENSE](LICENSE).