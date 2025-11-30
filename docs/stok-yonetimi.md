---
layout: default
title: Stok Yönetimi
nav_order: 2
parent: Modüller
description: Logo ERP malzeme kartları (ITEMS), stok fişleri (STFICHE), stok hareketleri (STLINE) ve barkod yapısı.
---

# Stok Yönetimi

Malzeme kartları, stok hareketleri, ambar durumu ve barkod işlemleri ile ilgili tablolar.

## Tablo Listesi

| Tablo Adı | Açıklama |
|-----------|----------|
| `LG_XXX_ITEMS` | **Malzeme Kartları** (Ana Tablo) |
| `LG_XXX_XX_STFICHE` | Stok Fişleri Başlık Bilgileri |
| `LG_XXX_XX_STLINE` | **Stok Hareketleri** (Satır Bilgileri) |
| `LG_XXX_XX_STINVTOT` | Günlük malzeme ambar toplamları |
| `LG_XXX_XX_STINVENS` | Malzeme alış/satış aylık toplamları |
| `LG_XXX_INVDEF` | Malzeme-Ambar parametreleri |
| `LG_XXX_ITMUNITA` | Malzeme-Birim ataması |
| `LG_XXX_ITMCLSAS` | Malzeme-Malzeme sınıfı ataması |
| `LG_XXX_ITEMSUBS` | Malzeme alternatifleri |
| `LG_XXX_SUPPASGN` | Malzeme-Tedarikçi ataması |
| `LG_XXX_LOCATION` | Stok yerleri (Raf/Hücre takibi) |
| `LG_XXX_XX_SERILOTN` | Seri/Lot numarası bilgileri |
| `LG_XXX_XX_SLTRANS` | Seri/Lot hareketleri |
| `LG_XXX_PRCLIST` | Alış/Satış fiyat listeleri |

## Önemli Alanlar ve Kodlar

### Stok Fiş Türleri (TRCODE) - STFICHE & STLINE

| Kod | Açıklama |
|-----|----------|
| 1 | Mal Alım İrsaliyesi |
| 2 | Perakende Satış İade İrsaliyesi |
| 3 | Toptan Satış İade İrsaliyesi |
| 6 | Alım İade İrsaliyesi |
| 7 | Perakende Satış İrsaliyesi |
| 8 | Toptan Satış İrsaliyesi |
| 11 | Fire Fişi |
| 12 | Sarf Fişi |
| 13 | Üretimden Giriş Fişi |
| 14 | Devir Fişi |
| 25 | Ambar Fişi (Transfer) |
| 50 | Sayım Fazlası Fişi |
| 51 | Sayım Eksiği Fişi |

### Malzeme Kart Türleri (CARDTYPE) - ITEMS

| Kod | Açıklama |
|-----|----------|
| 1 | Ticari Mal |
| 2 | Karma Koli |
| 3 | Depozitolu Mal |
| 4 | Sabit Kıymet |
| 10 | Hammadde |
| 11 | Yarı Mamul |
| 12 | Mamul |
| 13 | Tüketim Malı |
