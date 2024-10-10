document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    
    function setLanguage(lang) {
        document.querySelectorAll('[data-en]').forEach(elem => {
            if (lang === 'en') {
                elem.textContent = elem.getAttribute('data-en');
            } else if (lang === 'de') {
                elem.textContent = elem.getAttribute('data-de');
            }
        });

        // Special handling for elements with child nodes (like links)
        document.querySelectorAll('a[data-en], a[data-de]').forEach(elem => {
            if (lang === 'en') {
                elem.textContent = elem.getAttribute('data-en');
            } else if (lang === 'de') {
                elem.textContent = elem.getAttribute('data-de');
            }
        });

        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', lang);

        // Update the language selector
        languageSelector.value = lang;
    }

    languageSelector.addEventListener('change', function() {
        setLanguage(this.value);
    });

    // Set initial language based on localStorage or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
});