# Logo ERP Geliştirici Rehberi

![Logo ERP Developer Guide](https://img.shields.io/badge/Logo%20ERP-Developer%20Guide-blue?style=for-the-badge&logo=database)
![SQL](https://img.shields.io/badge/Language-SQL-orange?style=for-the-badge&logo=microsoft-sql-server)
![Documentation](https://img.shields.io/badge/Type-Documentation-green?style=for-the-badge)

Bu repo, **Logo Yazılım** ürünleri (Go3, Tiger 3, Tiger Enterprise vb.) üzerinde geliştirme yapmak, raporlama çözümleri üretmek veya entegrasyon sağlamak isteyen yazılımcılar için kapsamlı bir **Veritabanı Rehberi** ve **SQL Kaynakçası** olarak hazırlanmıştır.

## 🎯 Amaç
Logo ERP ürünlerinin veritabanı yapısı oldukça kapsamlı ve karmaşıktır. Bu proje, dağınık haldeki tablo ve alan bilgilerini kategorize ederek, geliştiricilerin aradıkları bilgiye en hızlı şekilde ulaşmalarını sağlamayı hedefler.

## 📚 İçindekiler

Detaylı tablo açıklamaları ve ilişkiler için aşağıdaki modül dokümanlarını inceleyebilirsiniz:

- **[Genel Tablolar](docs/genel-tablolar.md)**: Firma, döviz, birim setleri, şehirler vb.
- **[Stok Yönetimi](docs/stok-yonetimi.md)**: Malzemeler, stok fişleri, birimler, barkodlar.
- **[Cari Hesap Yönetimi](docs/cari-hesap.md)**: Cari kartlar, hareketler, risk analizleri.
- **[Fatura Yönetimi](docs/fatura-yonetimi.md)**: Satış ve satınalma faturaları, irsaliyeler.
- **[Muhasebe](docs/muhasebe.md)**: Muhasebe fişleri, hesap planı, entegrasyon kodları.
- **[Çek & Senet](docs/cek-senet.md)**: Çek/Senet kartları, bordrolar ve durum kodları.
- **[Üretim](docs/uretim.md)**: Üretim emirleri, reçeteler, iş istasyonları.
- **[Diğer Modüller](docs/diger-moduller.md)**: Banka, kasa, hizmet, talep yönetimi vb.

## 💡 SQL Örnekleri

Sık kullanılan sorgular ve raporlama örnekleri için `sql-ornekleri` klasörüne göz atabilirsiniz:

- [Stok Bakiye Sorgusu](sql-ornekleri/stok-bakiye-sorgusu.sql)
- [Cari Hesap Ekstresi](sql-ornekleri/cari-ekstre.sql)
- [Detaylı Fatura Listesi](sql-ornekleri/fatura-listesi.sql)

## 🤝 Katkıda Bulunma

Bu proje topluluk destekli bir girişimdir. Eksik gördüğünüz tabloları eklemek veya daha iyi SQL sorguları paylaşmak için lütfen bir **Pull Request** gönderin!

1. Bu repoyu forklayın.
2. Yeni bir branch oluşturun (`git checkout -b yeni-ozellik`).
3. Değişikliklerinizi yapın ve commit'leyin.
4. Branch'inizi pushlayın ve bir PR oluşturun.

---
*Not: Bu proje resmi Logo Yazılım dokümantasyonu değildir. Geliştirici topluluğu tarafından oluşturulmuş bir rehberdir.*
