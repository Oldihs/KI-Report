document.addEventListener('DOMContentLoaded', function() {
    const cursorCircle = document.querySelector('.cursor-circle');
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function updateCursor() {
        posX += (mouseX - posX) * 0.4; // Smooth follow effect with a delay
        posY += (mouseY - posY) * 0.4;

        cursorCircle.style.left = `${posX}px`;
        cursorCircle.style.top = `${posY}px`;

        requestAnimationFrame(updateCursor);
    }

    updateCursor();
});
