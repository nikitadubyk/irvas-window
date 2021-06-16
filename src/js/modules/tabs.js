const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          contents = document.querySelectorAll(contentSelector);

    function hideTabsContent() {
        contents.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabsContent(i = 0) {
        contents[i].classList.add('show');
        contents[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabsContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./g, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./g, '')))) {
            tabs.forEach((tab, i) => {
                if (target === tab || target.parentNode === tab) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
        
    });
};

export default tabs;