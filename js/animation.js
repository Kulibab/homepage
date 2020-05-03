const avatar = document.querySelector('.avatar');
avatar.addEventListener('mouseover', startAnim);

function startAnim() {
    if (document.querySelector('.star')) {
        document.querySelector('.star').remove();
    }
    const stars = [];
    let star = document.createElement('img');
    star.src = '../img/kisspng-shuriken-weapon-kunai-knife-ninja-ninja-5aced6504c0606.9975793315235047203114.png';
    star.style.width = '50px';
    star.style.position = 'absolute';
    star.style.top = '440px';
    let starLeft = -100;
    let angle = 0;
    star.style.zIndex = 100;
    star.classList.add('star');

    document.body.appendChild(star);
    let newStar = document.querySelector('.star');

    let timer = setInterval(()=>{
        starLeft += 10;
        angle += 10;
        newStar.style.left = starLeft + 'px';
        newStar.style.transform = 'rotate(' + angle + 'deg)';
        if (starLeft > 1500) {
            clearInterval(timer);
            newStar.remove();
        }
    }, 10);
}