# Üretim Yönetimi

Üretim emirleri, reçeteler, iş istasyonları ve operasyonlar.

## Tablo Listesi

| Tablo Adı | Açıklama |
|-----------|----------|
| `LG_XXX_PRODORD` | **Üretim Emirleri** |
| `LG_XXX_DISPLINE` | İş Emirleri |
| `LG_XXX_BOMASTER` | **Ürün Reçeteleri** (Bill of Materials - Header) |
| `LG_XXX_BOMLINE` | Ürün Reçete Satırları |
| `LG_XXX_BOMREVSN` | Reçete Revizyonları |
| `LG_XXX_WORKSTAT` | İş İstasyonları |
| `LG_XXX_OPERTION` | Operasyonlar |
| `LG_XXX_ROUTING` | Üretim Rotaları |
| `LG_XXX_RTNGLINE` | Rota Satırları |
| `LG_XXX_PEGGING` | İşlem Bağlantıları (Sipariş - Üretim Emri) |
| `LG_XXX_OCCUPATN` | Kaynak Kullanımları |
| `LG_XXX_WSGRPF` | İş İstasyonu Grupları |
| `LG_XXX_WSGRPASS` | İş İstasyonu - Grup Ataması |
| `LG_XXX_COPRDBOM` | Reçete - Ek Ürün Ataması |

## İlişki Yapısı

Üretim modülü, stok modülü ile sıkı entegrasyon içindedir. Üretim emirleri sonucunda oluşan stok hareketleri `STLINE` tablosuna `TRCODE=13` (Üretimden Giriş) veya `TRCODE=12` (Sarf) olarak yansır.
