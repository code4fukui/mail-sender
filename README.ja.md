# mail-sender

Denoを使用してメールを送信するためのコマンドラインツールおよびAPIです。メール配信には、システムにインストールされた `sendmail` コマンドに依存します。

## 機能

- コマンドライン、またはDenoのプログラム内からメールを送信できます。
- メールの件名におけるUTF-8エンコーディングを正しく処理します。
- UTF-8の本文コンテンツに適切なヘッダーを設定します。

## 必要条件

- [Deno](https://deno.land/) ランタイム
- システムにインストールおよび設定されたコマンドラインの `sendmail` ユーティリティ（例: Postfix、msmtp）。

## 使い方

### コマンドライン

このスクリプトは `sendmail` プロセスを実行する権限を必要とします。`--allow-run=sendmail` フラグを使用してください。

```sh
deno run --allow-run=sendmail cmd.js from@example.com to@example.org "Test Subject" "This is the email body."
```

### API

Denoアプリケーションからメールを送信するには、`mailutil.js` から `sendmail` 関数をインポートしてください。スクリプトの実行には `--allow-run=sendmail` 権限が必要になります。

```js
import { sendmail } from "https://code4fukui.github.io/mail-sender/mailutil.js";

const from = "sender@example.com";
const to = "recipient@example.org";
const subject = "こんにちは世界"; // "Hello World" in Japanese
const body = "This is a test email with a UTF-8 subject.";

await sendmail(from, to, subject, body);
```

## 参考資料

- [Denoで日本語メールを送信する](https://fukuno.jig.jp/4474)
- [Postfixメールサーバー入門](https://www.kagoya.jp/howto/it-glossary/mail/postfix/)
- [シェルスクリプトでメールを送信する](https://qiita.com/richmikan@github/items/0aea653765e485e16945)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
