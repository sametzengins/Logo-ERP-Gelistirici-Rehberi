-- Stok Bakiye Sorgusu
-- Bu sorgu, malzemelerin ambar bazında veya genel toplam stok miktarlarını listeler.
-- LG_XXX_XX_GNTOTST tablosu özet bilgi tutar, ancak en doğru sonuç STLINE üzerinden hesaplanandır.

SELECT 
    ITM.CODE AS [Malzeme Kodu],
    ITM.NAME AS [Malzeme Adı],
    ISNULL(SUM(ONHAND), 0) AS [Stok Miktarı]
FROM LG_001_ITEMS ITM
LEFT JOIN LV_001_01_GNTOTST TOT ON ITM.LOGICALREF = TOT.STOCKREF
WHERE ITM.ACTIVE = 0 -- Sadece aktif malzemeler
GROUP BY ITM.CODE, ITM.NAME
ORDER BY ITM.CODE;

-- Alternatif: Hareketlerden Hesaplama (Daha yavaş ama kesin)
/*
SELECT 
    ITM.CODE,
    ITM.NAME,
    SUM(CASE WHEN STL.TRCODE IN (1, 2, 3, 10, 11, 12, 13, 14, 25, 50) THEN STL.AMOUNT ELSE -STL.AMOUNT END) AS [Stok]
FROM LG_001_ITEMS ITM
JOIN LG_001_01_STLINE STL ON ITM.LOGICALREF = STL.STOCKREF
WHERE STL.CANCELLED = 0
GROUP BY ITM.CODE, ITM.NAME
*/
