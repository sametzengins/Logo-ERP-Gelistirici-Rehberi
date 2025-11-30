---
layout: default
title: Çek & Senet
nav_order: 6
parent: Modüller
description: Logo ERP çek ve senet kartları (CSCARD), bordrolar (CSROLL) ve durum kodları (Portföy, Tahsil, Karşılıksız).
---

# Çek ve Senet Yönetimi

Müşteri çekleri, kendi çeklerimiz, senetler ve bordro işlemleri.

## Tablo Listesi

| Tablo Adı | Açıklama |
|-----------|----------|
| `LG_XXX_XX_CSCARD` | **Çek/Senet Kartları** (Ana Tablo) |
| `LG_XXX_XX_CSROLL` | Çek/Senet Bordroları (Başlık) |
| `LG_XXX_XX_CSTRANS` | **Çek/Senet Hareketleri** |

## İşleyiş Mantığı

1. **Kartlar:** Her çek veya senet `CSCARD` tablosunda bir kayıt olarak tutulur.
2. **Hareketler:** Çek/Senet üzerinde yapılan her işlem (Giriş, Ciro, Tahsil, İade) `CSTRANS` tablosuna bir satır olarak işlenir.
3. **Bordrolar:** Toplu işlemler (Örn: Bankaya tahsile verme) `CSROLL` tablosunda tutulur.

## Önemli Alanlar ve Kodlar

### Çek/Senet Durumları (CURRSTAT) - CSCARD

| Kod | Açıklama |
|-----|----------|
| 1 | Portföyde |
| 2 | Ciro Edildi |
| 3 | Teminata Verildi |
| 4 | Tahsile Verildi |
| 5 | Protestolu Tahsile Verildi |
| 6 | İade Edildi |
| 7 | Protesto Edildi |
| 8 | Tahsil Edildi |
| 9 | Kendi Çekimiz |
| 10 | Borç Senedimiz |
| 11 | Karşılığı Yok |
| 12 | Tahsil Edilemiyor |

### Bordro İşlem Türleri (TRCODE) - CSROLL

| Kod | Açıklama |
|-----|----------|
| 1 | Çek Girişi |
| 2 | Senet Girişi |
| 3 | Çek Çıkış (Cari Hesaba) |
| 4 | Senet Çıkış (Cari Hesaba) |
| 5 | Çek Çıkış (Banka Tahsil) |
| 6 | Senet Çıkış (Banka Tahsil) |
| 7 | Çek Çıkış (Banka Teminat) |
| 8 | Senet Çıkış (Banka Teminat) |
