//---
//---

/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

var menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

var myWrapper = document.querySelector('.wrapper');
var myMenu = document.querySelector('.sidebar');
var myToggle = document.querySelector('.toggle');
var myInitialContent = document.querySelector('.initial-content');
var mySearchContent = document.querySelector('.search-content');
var mySearchToggle = document.querySelector('.search-toggle');

// Toggle sidebar visibility
function toggleClassMenu() {
  myMenu.classList.add('is--animatable');
  if (!myMenu.classList.contains('is--visible')) {
    myMenu.classList.add('is--visible');
    myToggle.classList.add('open');
    myWrapper.classList.add('is--pushed');
  } else {
    myMenu.classList.remove('is--visible');
    myToggle.classList.remove('open');
    myWrapper.classList.remove('is--pushed');
  }
}

// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove('is--animatable');
}
/* disabled when hamburger is disabled */

myMenu.addEventListener('transitionend', OnTransitionEnd, false);
myToggle.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
myMenu.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}


// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}

// get scroll Position insode element

if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.body.classList.remove("intro-unscrolled");
    document.body.classList.add("intro-scroll");
  } else {
    document.body.classList.remove("intro-scroll");
    document.body.classList.add("intro-unscrolled");
  }
});
observer.observe(document.querySelector("#scroll-marker-1"));
}


if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.body.classList.remove("navMax");
    document.body.classList.add("navMin");
  } else {
    document.body.classList.remove("navMin");
    document.body.classList.add("navMax");

  }
});
observer.observe(document.querySelector("#scroll-marker-2"));
}

if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.body.classList.remove("unscroll-3");
    document.body.classList.add("scroll-3");
  } else {
    document.body.classList.remove("scroll-3");
    document.body.classList.add("unscroll-3");

  }
});
observer.observe(document.querySelector("#scroll-marker-3"));
}

/* timeline scroll into view 
var nav = document.querySelector('nav'),
    main  = document.querySelector('main'),
    scrollElementTo = (function () {
      var timerId;
      return function (scrollWithin, scrollTo, pixelsPerSecond) {
        scrollWithin.scrollTop = scrollWithin.scrollTop || 0;
        var pixelsPerTick = pixelsPerSecond / 100,
          destY = scrollTo.offsetTop,
          direction = scrollWithin.scrollTop < destY ? 1 : -1,
          doTick = function () {
            var distLeft = Math.abs(scrollWithin.scrollTop - destY),
              moveBy = Math.min(pixelsPerTick, distLeft);
            scrollWithin.scrollTop += moveBy * direction;
            if (distLeft > 0) {
              timerId = setTimeout(doTick, 10);
            }
          };
        clearTimeout(timerId);
        doTick();
      };
    }());

nav.addEventListener('click', function(event) {
  var linkID,
    scrollTarget;
  if (event.target.tagName.toUpperCase() === "A") {
    linkID = event.target.dataset.goto.slice(1);
    scrollTarget = main.querySelector('[data-id="' + linkID + '"]');
    scrollElementTo(main, scrollTarget, 500);
  }
});
*/

// disable masthead and fixed elements from triggering document scroll // 

/*const noScroll = document.querySelectorAll(".no-scroll");

noScroll.forEach(function(fixedElem){
 fixedElem.addEventListener('wheel', preventScroll, {passive: false});
});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}*/

//check if element is visible in the viewport

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
/*
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var visible = document.querySelector('#main');
window.addEventListener('scroll', function (event) {
	if (isInViewport(visible)) {
		console.log("yes!")
	}
}, false);*/


/* scrollTo next Section */
