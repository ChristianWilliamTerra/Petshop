document.querySelectorAll(".carrossel").forEach(carrossel => {

    const slides = carrossel.querySelector(".slides");
    const imagens = carrossel.querySelectorAll(".slides img");

    let slideAtual = 0;

    function mudarSlide() {
        slideAtual = (slideAtual + 1) % imagens.length;

        slides.style.transform =
            `translateX(-${slideAtual * 100}%)`;
    }

    setInterval(mudarSlide, 3000);

});