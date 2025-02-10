const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 3000;
const SETTINGS_FILE = path.join(__dirname, "settings.json");
const UPLOAD_DIR = path.join(__dirname, "uploads");
const PUBLIC_DIR = path.join(__dirname, "public");

// アップロードフォルダを作成（存在しない場合）
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

app.use(express.static(PUBLIC_DIR));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(UPLOAD_DIR));

// 設定を取得
app.get("/get-settings", (req, res) => {
  fs.readFile(SETTINGS_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "設定を読み込めませんでした" });
    }
    res.json(JSON.parse(data));
  });
});

// 設定を保存
app.post("/save-settings", (req, res) => {
  fs.writeFile(
    SETTINGS_FILE,
    JSON.stringify(req.body, null, 4),
    "utf8",
    (err) => {
      if (err) {
        return res.status(500).json({ error: "設定を保存できませんでした" });
      }
      res.json({ message: "設定を保存しました" });
    }
  );
});

// 画像をアップロード
app.post(
  "/upload-image",
  multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, UPLOAD_DIR),
      filename: (req, file, cb) =>
        cb(null, `${Date.now()}-${file.originalname}`),
    }),
  }).single("image"),
  (req, res) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "ファイルがアップロードされていません" });
    }
    res.json({ imageUrl: `/uploads/${req.file.filename}` });
  }
);

// 画像を削除
app.post("/delete-image", (req, res) => {
  let imageUrl = req.body.imageUrl;
  if (!imageUrl.startsWith("/uploads/")) {
    return res.status(400).json({ error: "不正な画像パス" });
  }

  let imagePath = path.join(__dirname, imageUrl);
  fs.unlink(imagePath, (err) => {
    if (err) {
      return res.status(500).json({ error: "画像の削除に失敗しました" });
    }
    res.json({ message: "画像を削除しました" });
  });
});

// デフォルトページ
app.get("/", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "setting.html"));
});

// サーバーを起動
app.listen(PORT, () => {
  console.log(`🚀 サーバーが http://localhost:${PORT} で起動しました`);
});
