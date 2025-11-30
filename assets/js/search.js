document.addEventListener('DOMContentLoaded', () => {
    // Search Elements
    const searchTrigger = document.querySelector('.search-trigger');
    const modalOverlay = document.querySelector('.search-modal-overlay');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');

    // Theme Elements
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Mobile Menu Elements
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // --- Search Logic ---
    let searchIndex = [];

    fetch('/Logo-ERP-Gelistirici-Rehberi/search.json')
        .then(response => response.json())
        .then(data => {
            searchIndex = data;
            console.log("Search index loaded:", data.length, "items");
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

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeSearch();
        });
    }

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape') closeSearch();
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            searchResults.innerHTML = '';

            if (query.length < 2) return;

            const filtered = searchIndex.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.content.toLowerCase().includes(query)
            );

            if (filtered.length === 0) {
                searchResults.innerHTML = '<div style="padding:1rem; color:var(--text-secondary);">Sonuç bulunamadı.</div>';
                return;
            }

            filtered.forEach(page => {
                let snippet = '';
                // Try to find the query in content to show context
                if (page.content.toLowerCase().includes(query)) {
                    const index = page.content.toLowerCase().indexOf(query);
                    const start = Math.max(0, index - 40);
                    const end = Math.min(page.content.length, index + 100);
                    snippet = '...' + page.content.substring(start, end) + '...';
                } else {
                    snippet = page.content.substring(0, 100) + '...';
                }

                const a = document.createElement('a');
                a.href = page.url;
                a.className = 'search-result-item';
                a.innerHTML = `
                    <div style="font-weight: 600; color: var(--accent-blue);">${page.title}</div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top:4px;">${snippet}</div>
                `;
                searchResults.appendChild(a);
            });
        });
    }

    // --- Theme Logic ---
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- Mobile Menu Logic ---
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 &&
                !sidebar.contains(e.target) &&
                !menuToggle.contains(e.target) &&
                sidebar.classList.contains('mobile-open')) {
                sidebar.classList.remove('mobile-open');
            }
        });
    }
});
