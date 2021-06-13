const modals = () => {
    function showModal(modal) {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.classList.add('modal-open');
    }

    function hideModal(modal) {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                showModal(modal);
            });
        });

        close.addEventListener('click', () => {
            hideModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal(modal);
            }
        });
    }


    function showModalByTime(selector, time) {
        setTimeout(() => {
            const modal = document.querySelector(selector);

            hideModal(modal);
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;