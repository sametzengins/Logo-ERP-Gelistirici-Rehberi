-- Detaylı Fatura Listesi
-- Fatura başlıkları ve kalemlerini birleştirerek detaylı rapor sunar.

SELECT 
    INV.FICHENO AS [Fatura No],
    CONVERT(VARCHAR, INV.DATE_, 104) AS [Tarih],
    CLC.DEFINITION_ AS [Cari Hesap],
    ITM.CODE AS [Malzeme Kodu],
    ITM.NAME AS [Malzeme Adı],
    STL.AMOUNT AS [Miktar],
    STL.PRICE AS [Birim Fiyat],
    STL.TOTAL AS [Satır Toplamı],
    INV.GENEXP1 AS [Fatura Açıklaması]
FROM LG_001_01_INVOICE INV
JOIN LG_001_CLCARD CLC ON INV.CLIENTREF = CLC.LOGICALREF
JOIN LG_001_01_STLINE STL ON INV.LOGICALREF = STL.INVOICEREF
JOIN LG_001_ITEMS ITM ON STL.STOCKREF = ITM.LOGICALREF
WHERE INV.TRCODE IN (8, 38) -- Toptan Satış Faturaları
AND INV.CANCELLED = 0
ORDER BY INV.DATE_ DESC, INV.FICHENO;
