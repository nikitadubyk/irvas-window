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

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    hideModal(item);
                });
    
                showModal(modal);
            });
        });

        close.addEventListener('click', () => {
            hideModal(modal);
            windows.forEach(item => {
                hideModal(item);
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                hideModal(modal);
                windows.forEach(item => {
                    hideModal(item);
                });
            }
        });
    }

    document.body.addEventListener('keydown', (e) => {
        const modal = document.querySelector('.popup'),
              secondModal = document.querySelector('.popup_engineer');
        if (e.key === 'Escape') {
            hideModal(modal);
            hideModal(secondModal);
        }
    });


    function showModalByTime(selector, time) {
        setTimeout(() => {
            const modal = document.querySelector(selector);

            hideModal(modal);
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;