---
layout: default
title: Cari Hesap
nav_order: 3
parent: Modüller
description: Logo ERP cari hesap kartları (CLCARD), cari hareketler (CLFLINE) ve risk yönetimi veritabanı tabloları.
---

# Cari Hesap Yönetimi

Müşteri ve tedarikçi kartları, borç/alacak takibi ve cari hareketler.

## Tablo Listesi

| Tablo Adı | Açıklama |
|-----------|----------|
| `LG_XXX_CLCARD` | **Cari Hesap Kartları** (Ana Tablo) |
| `LG_XXX_XX_CLFICHE` | Cari Hesap Fişleri |
| `LG_XXX_XX_CLFLINE` | **Cari Hesap Hareketleri** |
| `LG_XXX_XX_CLTOTFIL` | Cari hesap aylık toplamları |
| `LG_XXX_XX_CLRNUMS` | Cari hesap risk tabloları |
| `LG_XXX_CLINTEL` | Cari hesap istihbarat bilgileri |
| `LG_XXX_SHIPINFO` | Sevkiyat Adresleri |

## Önemli Alanlar ve Kodlar

### Cari Hesap İşlem Türleri (TRCODE) - CLFLINE

| Kod | Açıklama |
|-----|----------|
| 1 | Nakit Tahsilat |
| 2 | Nakit Ödeme |
| 3 | Borç Dekontu |
| 4 | Alacak Dekontu |
| 5 | Virman İşlemi |
| 14 | Açılış Fişi (Devir) |
| 31 | Mal Alım Faturası |
| 32 | Perakende Satış İade Faturası |
| 33 | Toptan Satış İade Faturası |
| 34 | Alınan Hizmet Faturası |
| 36 | Alım İade Faturası |
| 37 | Perakende Satış Faturası |
| 38 | Toptan Satış Faturası |
| 39 | Verilen Hizmet Faturası |
| 61 | Çek Girişi |
| 62 | Senet Girişi |
| 63 | Çek Çıkış (Cari Hesaba) |
| 64 | Senet Çıkış (Cari Hesaba) |

### Cari Kart Tipleri (ACTIVE) - CLCARD
Bu alan genellikle kartın kullanımda olup olmadığını belirtir ancak Logo dokümanlarında bazen tip ayrımı için de referans verilebilir. Standart kullanımda:
- `0`: Kullanım Dışı
- `1`: Kullanımda
