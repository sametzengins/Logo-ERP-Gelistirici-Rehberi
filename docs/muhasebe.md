# Muhasebe Yönetimi

Genel muhasebe, hesap planı, fişler ve entegrasyon kodları.

## Tablo Listesi

| Tablo Adı | Açıklama |
|-----------|----------|
| `LG_XXX_EMUHACC` | **Muhasebe Hesap Planı** |
| `LG_XXX_XX_EMFICHE` | Muhasebe Fişleri (Başlık) |
| `LG_XXX_XX_EMFLINE` | **Muhasebe Hareketleri** (Satır) |
| `LG_XXX_XX_EMUHTOT` | Muhasebe aylık toplamları |
| `LG_XXX_CRDACREF` | Kart-Muhasebe referans kodları (Entegrasyon) |
| `LG_XXX_ACCCODES` | Entegrasyon bağlantı kodları |
| `LG_XXX_EMCENTER` | Masraf merkezleri |

## İlişki Yapısı

Muhasebe fişleri (`EMFICHE`) ve satırları (`EMFLINE`) arasındaki ilişki `LOGICALREF` -> `ACCFICHEREF` üzerinden kurulur.

Diğer modüllerden (Fatura, Çek/Senet vb.) muhasebeye entegre olan kayıtlar için `EMFLINE` tablosundaki `MODULENR` ve `SOURCEFREF` alanları kullanılır.
