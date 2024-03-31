document.addEventListener("mousemove", parallax);

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));

        const x = (window.innerWidth - e.clientX*speed) / 100;
        const y = (window.innerHeight - e.clientY*speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`; 
    });
}
