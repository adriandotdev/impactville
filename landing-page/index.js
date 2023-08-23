const productItems = document.querySelectorAll('.product-item');

function animateProductItems() {

    productItems.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight) {
            item.style.opacity = 1;
        } else {
            item.style.opacity = 0;
        }
    });
}

// Scroll event
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            animateProductItems();
            isScrolling = false;
        });
        isScrolling = true;
    }
});