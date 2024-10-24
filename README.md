# mail-sender

## usage

```sh
deno run -A cmd.js from@fromdomain to@todomain subject body
```

```js
import { sendmail } from "https://code4fukui.github.io/mail-sender/mailutil.js";

await sendmail(from, to, subject, body);
```

## reference

- [Denoで実装、日本語メール送信コマンド＆API](https://fukuno.jig.jp/4474)
- [【入門】Postfixとは？メールサーバー構築方法と基本設定 - カゴヤのサーバー研究室](https://www.kagoya.jp/howto/it-glossary/mail/postfix/)
- [シェルスクリプトでメール送信、「さようならnkf」編 #ShellScript - Qiita](https://qiita.com/richmikan@github/items/0aea653765e485e16945)
