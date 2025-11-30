---
layout: default
title: Genel Tablolar
nav_order: 1
parent: Modüller
has_children: true
description: Logo ERP firma tanımları, döviz kurları, birim setleri ve şehir/ülke gibi genel sistem tabloları.
---

# Genel Tablolar

Logo ERP sisteminin temelini oluşturan, firma, döviz, birim ve organizasyonel yapı ile ilgili tablolar bu bölümde yer alır.

## Tablo Listesi

| Tablo Adı | Açıklama |
|-----------|----------|
| `L_CAPIDEF` | Kuruluş bilgileri (ambar, işyeri, fabrika vb.) |
| `L_COUNTRY` | Ülke tanımları |
| `L_CITY` | Şehir tanımları |
| `L_TOWN` | İlçe tanımları |
| `L_DISTRICT` | Semt tanımları |
| `L_POSTCODE` | Posta kodları |
| `L_DAILYEXCHANGES` | Günlük döviz kurları |
| `L_GOUSERS` | Kullanıcılar |
| `L_NET` | Network kontrolü (kimlerin hangi firma ve dönemle çalıştığı) |
| `LG_XXX_SPECODES` | Özel kodlar |
| `LG_XXX_UNITSETF` | Birim setleri başlık bilgileri |
| `LG_XXX_UNITSETL` | Birim setleri satırları (Adet, Koli vb.) |
| `LG_XXX_UNITSETC` | Birim setleri arası çevrim katsayıları |
| `L_TRADGRP` | Ticari işlem grupları |
| `L_SHPAGENT` | Sevkiyat/Taşıyıcı firmaları |
| `L_SHPTYPES` | Sevkiyat/Teslim türleri |
| `L_FRGTYPES` | Taşıma tipleri |
| `L_BANKCODE` | Banka kodları (Genel) |
| `L_BNBRANCH` | Banka şubeleri (Genel) |
| `L_TAXOFFICE` | Vergi daireleri |

## Önemli Notlar

- **L_ ile başlayan tablolar:** Genellikle firma bağımsız, sistem genelinde kullanılan tablolardır (Örn: Ülkeler, Şehirler).
- **LG_XXX_ ile başlayan tablolar:** Firma bazlı tablolardır. `XXX` firma numarasını temsil eder (Örn: `LG_001_SPECODES`).
