'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((modal) => {
  modal.addEventListener('click', openModal);
})
/*for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//188.  Implement smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  const s1coords = section1.getBoundingClientRect();
  //s1coords.top is the height from viewport to the section(not from the top of the page)
  console.log('section coordinates', s1coords);
  console.log('scroll offset', window.scrollX, window.scrollY);
  console.log('height v/s width', document.documentElement.clientWidth, document.documentElement.clientHeight);

  //scrolling
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

  //smooth scrolling
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: "smooth"
  })

});

//189. Events & event handlers
//addEventListener, // removeEventListener

//Events propogation : Bubbling and Capturing

/*<html>
    <body>
       <section>
         <p>
           <a>link</a>  -- add click event here, this event is captured at the document level and then propogates through all the parent elements until the target element (here it is anchor element) (called capturing phase)
           once the event is triggered, it travels from target to document element called the bubbling phase.
         </p>
       </section>
    </body>
</html>*/

//Events propogate from one place to another. Most of the events have capturing and bubbling phase. Very few events directly happen on the target element.

// addEventListener('click', fn, true/false) - true indicates capturing events. Bubbling events are useful for event propogation


//Page navigation
/*document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();//to avoid scrolling to the sections mentioned in href
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    ;
  })
});*/  // this calls the function for every element this reduces performances there are thousands of elements instead of this we can use Event delegation 

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});


//DOM traversing
//Building a tabbed component

const operations = document.querySelector('.operations');
console.log(operations.childNodes);
console.log(operations.children);
const operationscontainer = document.querySelector('.operations__tab-container');
const operationstabbtns = document.querySelectorAll('.operations__tab');
const operationsContent = document.querySelectorAll('.operations__content');
console.log(operationsContent);
/*
  el.addEventListener('click', function (e) {
    const clicked = e.target;
    e.target.classList.add('operations__tab--active');

  })*/ // doing at each tab level will reduce the performance hence to follow event delegation

operationscontainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');//it finds the closest element with the name given
  operationstabbtns.forEach(t => t.classList.remove('operations__tab--active'));
  operationsContent.forEach(c => c.classList.remove('operations__content--active'));

  //guard clause - whenever we click else where apart from the tab the clicked is null hence we return immediately
  if (!clicked) return;
  clicked.classList.add('operations__tab--active');


  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

//sticky navigation -using intersection observer api
/*const obsCallbackfn = function (entries, observer) { //entries - array os threshold
  entries.forEach((entry) => {
    console.log(entry);
  })
};
const obsOptions = {
  root: null, // implies view port when its null
  threshold: 0.1// means 10% intersection with view port
};

const observer = new IntersectionObserver(obsCallbackfn, obsOptions);
observer.observe(section1);*/

const header = document.querySelector('.header');
const callbackFn = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) document.querySelector('.nav').classList.add('sticky');
  else document.querySelector('.nav').classList.remove('sticky');
}
const navHeight = document.querySelector('.nav').getBoundingClientRect().height;
console.log(navHeight);
const observer = new IntersectionObserver(callbackFn, {
  root: null,
  threshold: 0, // completely out of view port,
  rootMargin: `-${navHeight}px`
});
observer.observe(header);


//Lazing loading images
const imageObs = document.querySelectorAll('img[data-src]');
console.log(imageObs);
const imgObsCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
  imgObserver.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(imgObsCallback, {
  root: null,
  threshold: 0
});
imageObs.forEach((img) => {
  imgObserver.observe(img);
});



//DOM lifecycle events
//domcontentloaded after all the htmls are parsed and the dom tree is built
//load event is fired when external files and css are loaded //window.addeventlistener('load')
// beforeuload event - before leaving the window  //window.addeventlistener('beforeunload')


/// Different ways of loading JS into html
// script can be added in head and body
// async and defer are other ways to add script tag
//Using defer in head is the best solution
