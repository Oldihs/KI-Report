document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const line = document.createElement('div');
    line.classList.add('line');
    document.querySelector('.tabs').appendChild(line);

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            moveLine(tab);
        });
    });

    function moveLine(tab) {
        const tabRect = tab.getBoundingClientRect();
        const tabsRect = document.querySelector('.tabs').getBoundingClientRect();
        const leftOffset = tabRect.left - tabsRect.left;
        line.style.width = `${tabRect.width}px`;
        line.style.transform = `translateX(${leftOffset}px)`;
    }

    // Initialize the line position to the first active tab
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        moveLine(activeTab);
    }

    // Image modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex"; /* Use flex to center content */
            modalImg.src = this.src;
            document.body.classList.add('modal-open');
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', function(event) {
        if (event.target !== modalImg) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    });
});
