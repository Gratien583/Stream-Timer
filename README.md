![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

# 簡単な配信待機画面 & 設定画面
配信とかの待機画面を設定できるやつ。タイトル、詳細の表示、カウントダウンタイマー、スライドショー、背景のカスタマイズ機能を実装。個人的に作ってみたかっただけ。

## 🚀 機能一覧

- **待機画面**
  - タイトル・詳細情報の表示
  - カウントダウンタイマー
  - スライドショー機能
  - 背景画像適用
  - パーティクルアニメーション

- **設定画面**
  - 背景画像・動画の設定
  - タイトル・詳細情報の編集
  - スライドショー画像の追加・削除
  - テキストのカラー変更
  - 設定の保存・適用

## 🛠️ 使用技術

- **フロントエンド:** HTML, CSS, JavaScript
- **バックエンド:** Node.js
- **データ管理:** JSONファイル

## 📸 画面

### 待機画面
![待機画面]()<img width="1675" alt="2" src="https://github.com/user-attachments/assets/144778ff-a4d6-44f9-85eb-0add93f52a10" />


### 設定画面
![設定画面](<img width="1680" alt="スクリーンショット 2025-02-10 16 55 02" src="https://github.com/user-attachments/assets/1de5ee19-b0f1-4db3-8644-be65225a01aa" />)

## ⏳ セットアップ手順

### 1. リポジトリをクローン
```sh
git clone https://github.com/Gratien583/Stream-Timer.git
cd Stream-Timer
```

### 2. サーバー起動
```sh
node server.js
```

### 3. ローカルで開く
ブラウザで `http://localhost:3000/` にアクセス

## ⚙️ 設定方法

1. `http://localhost:3000/settings.html` にアクセス
2. 背景画像や試合情報を設定
3. **「設定を保存」**を押して変更を適用
4. `esports_waiting.html` で反映を確認※`settings.html` にプレビューあるけど`esports_waiting.html`　で確認した方がいい。
※ スライドショーと背景画像のファイル名に日本語があると文字化けして反映されないから英語に変更推奨

## 📌 今後の改善予定

- 色々雑やから直したい
