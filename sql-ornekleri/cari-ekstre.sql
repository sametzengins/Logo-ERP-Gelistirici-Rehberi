-- Cari Hesap Ekstresi
-- Belirli bir cari hesabın borç/alacak durumunu ve hareketlerini listeler.

DECLARE @CariKodu VARCHAR(30) = '120.01.001'

SELECT 
    CL.CODE AS [Cari Kodu],
    CL.DEFINITION_ AS [Cari Ünvanı],
    CONVERT(VARCHAR, TR.DATE_, 104) AS [Tarih],
    TR.TRANNO AS [Belge No],
    TR.LINEEXP AS [Açıklama],
    CASE WHEN TR.SIGN = 0 THEN TR.AMOUNT ELSE 0 END AS [Borç],
    CASE WHEN TR.SIGN = 1 THEN TR.AMOUNT ELSE 0 END AS [Alacak],
    -- Kümülatif Bakiye hesaplama SQL versiyonuna göre değişebilir (Window functions vb.)
    TR.TRCODE AS [İşlem Türü]
FROM LG_001_CLCARD CL
JOIN LG_001_01_CLFLINE TR ON CL.LOGICALREF = TR.CLIENTREF
WHERE CL.CODE = @CariKodu
AND TR.CANCELLED = 0
ORDER BY TR.DATE_, TR.LOGICALREF;
