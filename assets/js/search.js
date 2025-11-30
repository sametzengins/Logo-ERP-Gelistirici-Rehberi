document.addEventListener('DOMContentLoaded', () => {
    const searchTrigger = document.querySelector('.search-trigger');
    const modalOverlay = document.querySelector('.search-modal-overlay');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');

    // Sayfa verilerini al (Jekyll'den JSON olarak üretilmesi gerekir ama şimdilik DOM'dan basitçe alalım veya statik liste)
    // Gerçek bir uygulamada search.json oluşturulur. Burada basitlik için sayfadaki linkleri tarayacağız.
    const pages = [
        { title: 'Ana Sayfa', url: '/Logo-ERP-Gelistirici-Rehberi/' },
        { title: 'Genel Tablolar', url: '/Logo-ERP-Gelistirici-Rehberi/genel-tablolar/' },
        { title: 'Stok Yönetimi', url: '/Logo-ERP-Gelistirici-Rehberi/stok-yonetimi/' },
        { title: 'Cari Hesap', url: '/Logo-ERP-Gelistirici-Rehberi/cari-hesap/' },
        { title: 'Fatura Yönetimi', url: '/Logo-ERP-Gelistirici-Rehberi/fatura-yonetimi/' },
        { title: 'Muhasebe', url: '/Logo-ERP-Gelistirici-Rehberi/muhasebe/' },
        { title: 'Çek & Senet', url: '/Logo-ERP-Gelistirici-Rehberi/cek-senet/' },
        { title: 'Üretim', url: '/Logo-ERP-Gelistirici-Rehberi/uretim/' },
        { title: 'Diğer Modüller', url: '/Logo-ERP-Gelistirici-Rehberi/diger-moduller/' }
    ];

    function openSearch() {
        modalOverlay.classList.add('open');
        searchInput.focus();
    }

    function closeSearch() {
        modalOverlay.classList.remove('open');
    }

    // Event Listeners
    if (searchTrigger) {
        searchTrigger.addEventListener('click', openSearch);
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape') closeSearch();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query.length === 0) return;

        const filtered = pages.filter(page => page.title.toLowerCase().includes(query));

        filtered.forEach(page => {
            const a = document.createElement('a');
            a.href = page.url;
            a.className = 'search-result-item';
            a.innerHTML = `
                <div style="font-weight: 600;">${page.title}</div>
                <div style="font-size: 0.8rem; opacity: 0.7;">${page.url}</div>
            `;
            searchResults.appendChild(a);
        });
    });
});
