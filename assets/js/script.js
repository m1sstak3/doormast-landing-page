document.addEventListener('DOMContentLoaded', () => {
    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({ top: offsetPosition, behavior: "smooth" });

                // Close mobile menu on click
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // --- Calculator Logic ---
    const URGENT_FEE = 1500;
    const form = document.getElementById('calc-form');
    const doorTypeInputs = document.querySelectorAll('input[name="doorType"]');
    const countInput = document.getElementById('door-count');
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const urgentCheckbox = document.getElementById('urgent-install');
    const totalDisplay = document.getElementById('calc-total');

    function calculateTotal() {
        let basePrice = 2500;

        // Dynamically get price from data-price attribute to avoid JS hardcode
        doorTypeInputs.forEach(input => {
            if (input.checked) {
                basePrice = parseInt(input.dataset.price) || 2500;
            }
        });

        let count = parseInt(countInput.value) || 1;
        if (count < 1) count = 1;

        let total = basePrice * count;

        if (urgentCheckbox.checked) {
            total += URGENT_FEE;
        }

        totalDisplay.textContent = new Intl.NumberFormat('ru-RU').format(total) + ' \u20BD';
    }

    doorTypeInputs.forEach(input => input.addEventListener('change', calculateTotal));
    urgentCheckbox.addEventListener('change', calculateTotal);

    btnMinus.addEventListener('click', () => {
        let current = parseInt(countInput.value) || 1;
        if (current > 1) {
            countInput.value = current - 1;
            calculateTotal();
        }
    });

    btnPlus.addEventListener('click', () => {
        let current = parseInt(countInput.value) || 1;
        if (current < 20) {
            countInput.value = current + 1;
            calculateTotal();
        }
    });

    calculateTotal();

    // --- Phone Mask ---
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function (e) {
            const value = e.target.value.replace(/\D/g, '');
            let formatedObject = '';

            if (!value) {
                e.target.value = '';
                return;
            }

            if (['7', '8', '9'].indexOf(value[0]) > -1) {
                e.target.value = '+7 ';
                let i = value[0] === '9' ? 0 : 1;
                if (value.length > i) formatedObject += '(' + value.substring(i, i + 3);
                if (value.length > i + 3) formatedObject += ') ' + value.substring(i + 3, i + 6);
                if (value.length > i + 6) formatedObject += '-' + value.substring(i + 6, i + 8);
                if (value.length > i + 8) formatedObject += '-' + value.substring(i + 8, i + 10);
                e.target.value += formatedObject;
            } else {
                e.target.value = '+' + value.substring(0, 16);
            }
        });
    });

    // --- Forms & Toast Notifications (DRY) ---
    const toast = document.getElementById('toast');
    function showToast() {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    const forms = document.querySelectorAll('form');
    forms.forEach(formEl => {
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();

            // Honeypot Protection
            const honeypot = formEl.querySelector('input[name="bot_field"]');
            if (honeypot && honeypot.value !== '') {
                console.warn('Bot submission blocked');
                return; // Silent reject for spam bots
            }

            // Simulate API Send
            console.log(`[Form Submitted]: ${formEl.id || 'unknown form'}`);

            showToast();
            formEl.reset();

            // Specialized resets
            if (formEl.id === 'calc-form') calculateTotal();
            const modal = document.getElementById('modal');
            if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    });
});
