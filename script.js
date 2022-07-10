"use strict";

// ДЛЯ ПАРАЛЛАКСА
window.onload = function() {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const content = document.querySelector('.parallax_container');
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const human = document.querySelector('.images-parallax__human');

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;
        
            requestAnimationFrame(setMouseParallaxStyle);
                   
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        });

    }

};

// ДЛЯ ПЛАВНОГО СКРОЛЛА
const smoothLinks = document.querySelectorAll('a[href^="#content"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


// ДЛЯ ПЕРЕХОДА В ВЕРХ СТРАНИЦЫ
var scrollUpElems = document.querySelectorAll(".popup__title", ".my_choice");
for (var i = 0; i < scrollUpElems.length; i++) {
    scrollUpElems[i].onclick = function(){
    window.scrollTo(0, 0);
  };
}


// ДЛЯ ВЫВОДА ВЫБРАННОГО ИЗОБРАЖЕНИЯ
var d = document,
myCards = d.getElementById('my_cards');

[].forEach.call(d.getElementsByName('popup__title'), function(el){
el.addEventListener('click', function(){
    myCards.appendChild(this.previousElementSibling);
});
});
   
// ДЛЯ РАНДОМНОГО ИЗОБРАЖЕНИЯ
var imgs=[
    './1.png',
    './2.png',
    './3.png',
    './4.png',
    './5.png',
    './6.png',
    './7.png',
    './8.png',
    './9.png',
    './10.png',
    './11.png',
    './12.png',
    './13.png',
    './14.png',
    './15.png',
    './16.png',
    './17.png',
    './18.png',
    './19.png',
    './20.png',
    './21.png',
    './22.png',
    './23.png',
    './24.png',
    './25.png',
    './26.png',
    './27.png',
    './28.png',
    './29.png',
    './30.png',
    './31.png',
    './32.png',
    './33.png',
    './34.png',
    './35.png',
    './36.png',
    './37.png',
    './38.png',
    './39.png',
    './40.png',
    './41.png',
    './42.png',
    './43.png',
    './44.png',
    './45.png',
    './46.png',
    './47.png',
    './48.png',
    './49.png',
    './50.png',
    './51.png',
    './52.png',
    './53.png',
    './54.png',
    './55.png',
    './56.png',
    './57.png',
    './58.png',
    './59.png',
    './60.png',
    './61.png',
    './62.png',
    './63.png',
    './64.png',
    './65.png',
    './66.png',
    './67.png',
    './68.png',
    './69.png',
    './70.png',
    './71.png',
    './72.png',
    './73.png',
    './74.png',
    './75.png',
    './76.png',
    './77.png',
    './78.png',
    './79.png',
    './80.png',
    './81.png',
    './82.png',
    './83.png',
    './84.png',
    './85.png',
    './86.png',
    './87.png',
    './88.png',
    './89.png',
    './90.png',
    './91.png',
    './92.png',
    './93.png',
    './94.png',
    './95.png',
    './96.png',
    './97.png',
    './98.png',
    './99.png',
    './100.png',
    './101.png',
    './102.png',
    './103.png',
    './104.png',
    './105.png',
    './106.png',
    './107.png',
    './108.png',
    './109.png',
    './110.png',
    './111.png',
    './112.png',
    './113.png',
    './114.png',
    './115.png',
    './116.png',
    './117.png',
    './118.png',
    './119.png',
    './120.png',
    './121.png',
    './122.png',
    './123.png',
    './124.png'
     ],
      
    image=document.getElementById('image'),
    button=document.getElementById('button'),
    myRandomCards = d.getElementById('my_cards'),
    myRandomCardBtn = d.getElementsByName('popup__title');

    button.onclick=function(){
        image.src=imgs[Math.floor(Math.random()*imgs.length)]; 
        
        var myRandomImg = image.cloneNode();
        [].forEach.call(d.getElementsByName('popup__title'), function(l){
            l.addEventListener('click', function(){
                myRandomCards.appendChild(myRandomImg);
            });
        });
    };








