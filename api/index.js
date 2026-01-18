const express = require("express");
const app = express();

app.use(express.json());

app.post("/recommend-size", (req, res) => {
  const { height, weight } = req.body;

  let recommendedSize = "M";
  let message = "M öneriyoruz. Daha dar seviyorsanız S tercih edilebilir.";

  if (weight > 85) {
    recommendedSize = "L";
    message = "L öneriyoruz. Daha bol isterseniz XL de düşünülebilir.";
  }

  res.json({
    recommended_size: recommendedSize,
    note: message,
    disclaimer: "Bu öneri istatistiksel bir tahmindir."
  });
});

app.get("/", (req, res) => {
  res.send("Bedenimi Bul API çalışıyor 🚀");
});

app.listen(3000, () => {
  console.log("API 3000 portunda çalışıyor");
});
