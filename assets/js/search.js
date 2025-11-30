document.addEventListener('DOMContentLoaded', () => {
    const searchTrigger = document.querySelector('.search-trigger');
    const modalOverlay = document.querySelector('.search-modal-overlay');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');

    let searchIndex = [];

    // Fetch the search index
    fetch('/Logo-ERP-Gelistirici-Rehberi/search.json')
        .then(response => response.json())
        .then(data => {
            searchIndex = data;
        })
        .catch(err => console.error('Search index loading failed:', err));

    function openSearch() {
        modalOverlay.classList.add('open');
        searchInput.focus();
    }

    function closeSearch() {
        modalOverlay.classList.remove('open');
    }

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

        if (query.length < 2) return;

        // Search in title and content
        const filtered = searchIndex.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<div style="padding:1rem; color:#888;">Sonuç bulunamadı.</div>';
            return;
        }

        filtered.forEach(page => {
            // Find a snippet of the content if it matched there
            let snippet = '';
            if (page.content.toLowerCase().includes(query)) {
                const index = page.content.toLowerCase().indexOf(query);
                const start = Math.max(0, index - 30);
                const end = Math.min(page.content.length, index + 100);
                snippet = '...' + page.content.substring(start, end) + '...';
            }

            const a = document.createElement('a');
            a.href = page.url;
            a.className = 'search-result-item';
            a.innerHTML = `
                <div style="font-weight: 600; color: var(--accent-blue);">${page.title}</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top:4px;">${snippet || 'Başlık eşleşmesi'}</div>
            `;
            searchResults.appendChild(a);
        });
    });
});
