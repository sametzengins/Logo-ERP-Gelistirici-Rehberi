# Fatura Yönetimi

Satış ve satınalma faturaları, hizmet faturaları ve proforma faturalar.

## Tablo Listesi

| Tablo Adı | Açıklama |
|-----------|----------|
| `LG_XXX_XX_INVOICE` | **Faturalar** (Başlık Bilgileri) |
| `LG_XXX_XX_STLINE` | Fatura Satırları (Stok hareketleri tablosunda tutulur) |
| `LG_XXX_XX_TRANSAC` | Firma dönem bilgileri (Fatura numaralama vb. için referans olabilir) |

> **Not:** Fatura satırları ayrı bir "Invoice Line" tablosunda değil, `STLINE` (Stok Hareketleri) tablosunda tutulur. `INVOICE` tablosundaki `LOGICALREF` alanı, `STLINE` tablosundaki `INVOICEREF` alanına bağlanır.

## Önemli Alanlar ve Kodlar

### Fatura Türleri (TRCODE) - INVOICE
| Kod | Açıklama |
|-----|----------|
| 1 | Mal Alım Faturası |
| 2 | Perakende Satış İade Faturası |
| 3 | Toptan Satış İade Faturası |
| 4 | Alınan Hizmet Faturası |
| 5 | Alınan Proforma Fatura |
| 6 | Alım İade Faturası |
| 7 | Perakende Satış Faturası |
| 8 | Toptan Satış Faturası |
| 9 | Verilen Hizmet Faturası |
| 10 | Verilen Proforma Fatura |
| 13 | Alınan Fiyat Farkı Faturası |
| 14 | Verilen Fiyat Farkı Faturası |
| 26 | Müstahsil Makbuzu |

### İlişki Yapısı
```sql
-- Fatura Başlığı ve Satırlarını Birleştirme Örneği
SELECT 
    INV.FICHENO AS FaturaNo,
    INV.DATE_ AS Tarih,
    STL.CODE AS MalzemeKodu,
    STL.AMOUNT AS Miktar,
    STL.PRICE AS BirimFiyat,
    STL.TOTAL AS SatirToplami
FROM LG_001_01_INVOICE INV
LEFT JOIN LG_001_01_STLINE STL ON INV.LOGICALREF = STL.INVOICEREF
WHERE INV.TRCODE = 8 -- Toptan Satış Faturası
```
