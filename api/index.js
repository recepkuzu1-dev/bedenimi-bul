const express = require("express");
const app = express();

app.use(express.json());

// MVP-1 beden tablosu (ürün bazlı olacak şekilde genişletilebilir)
const sizeTable = [
  { size: "S", minHeight: 160, maxHeight: 170, minWeight: 55, maxWeight: 65 },
  { size: "M", minHeight: 168, maxHeight: 178, minWeight: 66, maxWeight: 78 },
  { size: "L", minHeight: 175, maxHeight: 185, minWeight: 79, maxWeight: 90 }
];

app.post("/recommend-size", (req, res) => {
  const { height, weight } = req.body;

  const match = sizeTable.find(
    s =>
      height >= s.minHeight &&
      height <= s.maxHeight &&
      weight >= s.minWeight &&
      weight <= s.maxWeight
  );

  let recommendedSize = match ? match.size : "M";
  let note = match
    ? `${recommendedSize} öneriyoruz. Daha dar veya bol tercihinize göre alternatif düşünebilirsiniz.`
    : "Standart ölçülere göre M öneriyoruz.";

  res.json({
    recommended_size: recommendedSize,
    note,
    disclaimer: "Bu öneri istatistiksel bir tahmindir."
  });
});

app.get("/", (req, res) => {
  res.send("Bedenimi Bul API çalışıyor 🚀");
});

app.listen(3000, () => {
  console.log("API 3000 portunda çalışıyor");
});
