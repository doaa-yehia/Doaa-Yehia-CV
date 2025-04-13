'use strict'

let sectionsArr = document.querySelectorAll('.shows');
let navAncorArr = document.querySelectorAll('.target')
let aboutNav = document.querySelector('.about');
let aboutSec = document.querySelector('#about');
let loader = document.querySelector(".loader");

// Setup and start animation


// typing animation
let typed = new Typed('#element', {
    strings: ['Front-End Developer', 'UI / UX Designer'],
    typeSpeed: 100,
    backDelay: 500,
    startDelay: 500,
    loop: true,

});
// loading spinner
window.addEventListener("load", () => {
    loader.classList.add("loader-hidden");
    //to hidden the loading layer completly
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    })
});

//  end animation



for (let i = 0; i < navAncorArr.length; i++) {
    navAncorArr[i].addEventListener('click', (e) => {
        let href = e.target.getAttribute('href');
        // console.log(href.slice(1));

        // add class Active for the active anchor
        if (!(e.target.getAttribute('class'.includes('active')))) {
            for (let i = 0; i < navAncorArr.length; i++) {
                navAncorArr[i].classList.remove('active');
            }
            navAncorArr[i].classList.add('active');

        }
        //    show the target section
        for (let i = 0; i < sectionsArr.length; i++) {
            if (sectionsArr[i].getAttribute('id') === href.slice(1)) {
                sectionsArr[i].classList.replace('d-none', 'd-block');
            } else {
                sectionsArr[i].classList.add('d-none');
            }

        }
        // for (let i = 0; i < navAncorArr.length; i++) {
        //     if (e.target.getAttribute('class'.includes('active'))) {
        //         navAncorArr[i].classList.add('active');

        //     }
        // }
    })


}
