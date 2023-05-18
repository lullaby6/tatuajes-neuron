const tattoos = document.querySelector('#tattoos-images')

for (let i = 1; i < 25; i++) {
    const tattoo = document.createElement('img')
    tattoo.setAttribute('src', `./assets/images/tattoos/${i}.jpg`)
    tattoo.setAttribute('scroll-reveal', '')
    tattoo.setAttribute('scroll-reveal-onetime', '')
    tattoo.setAttribute('scroll-reveal-distance', '25')
    tattoo.setAttribute('scroll-reveal-duration', '1500')
    tattoo.setAttribute('scroll-fade', '')
    tattoo.setAttribute('scroll-fade-onetime', '')
    tattoo.setAttribute('scroll-fade-duration', '2000')
    tattoos.appendChild(tattoo)
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt);
  window.addEventListener('touchmove', preventDefault, wheelOpt);
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

window.scrollTo(0, 0)
disableScroll()

setTimeout(() => {
    enableScroll()
}, 2700)