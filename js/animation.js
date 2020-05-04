const avatar = document.querySelector('.avatar');
avatar.addEventListener('mouseover', startAnim);

function startAnim() {
    if (document.querySelector('.star')) {
        document.querySelector('.star').remove();
    }
    const stars = [];
    let star = document.createElement('img');
    star.src = 'img/shuriken.png';
    star.style.position = 'absolute';
    star.style.top = '440px';
    let starLeft = -10;
    let angle = 0;
    star.style.zIndex = 100;
    star.classList.add('star');

    document.body.appendChild(star);
    let newStar = document.querySelector('.star');

    let timer = setInterval(()=>{
        starLeft += 1;
        angle += 10;
        newStar.style.left = starLeft + 'vw';
        newStar.style.transform = 'rotate(' + angle + 'deg)';
        if (starLeft > 100) {
            clearInterval(timer);
            newStar.remove();
        }
    }, 10);
}