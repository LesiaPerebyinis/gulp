"use strict"

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);  
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};
 if (isMobile.any()) {
   document.body.classList.add('_touch');
   const language = document.querySelector('.language__main');
   language.onclick = function (e) {
    language.parentElement.classList.toggle('_active')

     console.log(e.target)
   }
 } else {
   document.body.classList.add('_pc');
 };





// import hello from './modules/hello.js';

// console.log(hello);

const mobileBtn = document.querySelector('.mobile-nav-btn');

if (mobileBtn) {
  const mobileNav = document.querySelector('.mobile-nav');
    mobileBtn.onclick = function () {
    document.body.classList.toggle('_lock');
    mobileBtn.classList.toggle('_open');
    mobileNav.classList.toggle('_open');
  }
};


const questionContent = document.querySelectorAll('#question-content');


questionContent.forEach((item, index) => {
  const li = item.querySelector('li');
  li.addEventListener('click', function (e) {
    item.classList.toggle('--open');
    removeOpen(index);
  })
  
})

function removeOpen(index1) {
    questionContent.forEach((item2, index2) => {
      if(index1 !== index2) {
        item2.classList.remove('--open')
      }
    })
  
};





//FORM

const copyBtn = document.querySelectorAll('#copy-btn');

if (copyBtn.length > 0 ) {
  copyBtn.forEach(copy => {
    copy.addEventListener('click', function (e) {
      const currentElem = e.target.parentElement;
      const num = e.target.previousElementSibling.children[1].innerHTML.split(' ').join('');
      console.log(num);
       navigator.clipboard.writeText(num)
       .then(() => {
         currentElem.classList.add('_copy');
         setTimeout(() => {
          currentElem.classList.remove('_copy');
         }, 1200);
       })
      .catch(() => {
        console.log('упс')
      })
      
    })  
  }); 
};

//POPUP

const popupBtns = document.querySelectorAll('#popup-btn');
const closePopup = document.querySelector('#close-popup');
const popup = document.querySelector('#popup');
const visiblePopup = document.querySelector('.popup__wrapper');
// const body = document.body;


if (popupBtns.length > 0) { 
  popupBtns.forEach(popupBtn => {
    popupBtn.addEventListener("click", function (e) {
      popup.classList.add('--visible');

    } )
    
  })
};

if (closePopup) {
  closePopup.onclick = function (e) {
  popup.classList.remove('--visible'); 
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    popup.classList.remove('--visible'); 
  }
});


  popup.addEventListener('click', function(e) {
  const withinBoundaries = e.composedPath().includes(visiblePopup);

  if (!withinBoundaries) {
    popup.classList.remove('--visible'); 
  }
});



//GALLERY


const carousel = document.querySelector(".carousel__container");
const arrowBtns = document.querySelectorAll(".carousel__wrapper button");
const firstCardWidth = carousel.querySelector(".carousel__card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    console.log(btn.id)
  })
  
});



 const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
 }

const dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  console.log(e.pageX)
}
 const dragStop = () => {
   isDragging = false;
   carousel.classList.remove("dragging");
 }

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener("mouseup", dragStop);




// const carouselChildrens = [...carousel.children];
// console.log(arrowBtns);





// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });




//  const dragStop = (e) => {
//    isDragging = false;
//    carousel.classList.remove("dragging");
//  }


// carousel.addEventListener("mousemove", function dragging(e) {
//   if(!isDragging) return;
//   // console.log(e.pageX);
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  
// });









