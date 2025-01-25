import React, { useEffect } from 'react';
import anime from 'animejs';


export default function StarterModal() {
  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      direction: 'normal',
    });

    tl.add({
      targets: ['#f-letter', '#u-letter', '#c-letter'],
      translateY: '2000',
      opacity: 1,
      delay: function (el, i) {
        return i * 300;
      },
    });

    tl.add({
      targets: ['.escudo'],
      height: '40vh',
      opacity: 1,
      delay: function (el, i) {
        return i * 500;
      },
    });
    tl.add({
      targets: ['.svg-container'],
      translateY: '10%',
    }, 1000);
    tl.add({
      targets: ['.escudo'],
      filter: 'grayscale(0%)',
      delay: 300
    }, 2200)
    tl.add({
      targets: ['#f-letter', '#u-letter', '#c-letter'],
      fill: '#e3a133',
      delay: 300
    }, 2200)
    tl.add({
      targets: ['.container-modal'],
      backgroundColor: 'rgb(116, 21, 21)',
    }, 2200);
    tl.add({
      targets: '.container-modal',
      translateY: '-100%',
    })
  }, []);

  return (
    <div class="container-modal h-screen lg:w-full overflow-hidden bg-red-800 px-2.5 flex flex-col items-center absolute top-0 z-50 ">
      <div className="w-5/6 h-full flex flex-col items-between overflow-hidden z-100 justify-evenly">
        <img className="escudo opacity-0 w-auto h-0 max-h-40vh z-100 mt-12 object-contain m-0" src='src/assets/unsaacBorder.png' style={{ filter: 'grayscale(100%)' }} />
        <div className="svg-container overflow-y-hidden w-full flex justify-center h-4/6">
          <svg className="w-full h-full lg:w-1/2" version="1.0" xmlns="http://www.w3.org/2000/svg" width="691pt" height="300pt" viewBox="0 0 691.000000 1.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,235.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
              <path id="f-letter" className="opacity-0" d="M30 2270 c0 -33 3 -60 8 -60 4 0 38 -5 75 -10 97 -14 140 -39 168
              -97 l24 -48 0 -870 0 -870 -25 -50 c-34 -67 -91 -97 -201 -103 l-79 -5 0 -58
              0 -59 590 0 590 0 0 59 0 58 -107 6 c-176 8 -259 47 -299 140 -17 38 -19 81
              -22 415 l-4 372 105 0 c105 0 256 -20 312 -42 56 -22 113 -70 139 -117 22 -42
              37 -90 60 -194 6 -25 10 -27 61 -27 l55 0 0 465 0 465 -55 0 -54 0 -6 -37 c-4
              -21 -13 -65 -21 -97 -43 -179 -147 -237 -447 -251 l-147 -8 0 441 c0 397 2
              442 17 457 14 15 47 16 322 12 324 -4 355 -8 458 -58 102 -49 166 -150 200
              -313 l18 -86 63 0 63 0 -5 58 c-3 31 -11 149 -16 262 -6 113 -13 229 -16 258
              l-5 52 -910 0 -909 0 0 -60z"></path>
              <path id="u-letter" className="opacity-0" d="M2030 2270 c0 -33 3 -60 8 -60 77 -5 159 -22 181 -37 43 -31 69 -98
                80 -205 7 -56 11 -335 11 -655 1 -682 7 -745 95 -928 98 -204 280 -316 586
                -361 137 -20 448 -14 569 10 302 63 482 210 569 467 57 167 63 239 71 874 8
                602 11 641 53 721 32 62 105 104 182 104 17 0 47 3 68 6 l37 7 0 58 0 59 -482
                -2 -483 -3 -3 -57 -3 -56 68 -6 c188 -17 254 -71 290 -239 20 -97 31 -1045 13
                -1199 -34 -292 -168 -467 -401 -523 -100 -24 -260 -29 -356 -12 -218 40 -339
                154 -405 383 -23 79 -23 82 -23 729 0 602 1 654 18 709 33 106 85 139 240 152
                l77 7 0 58 0 59 -530 0 -530 0 0 -60z"></path>
              <path id="c-letter" className="opacity-0" d="M5675 2334 c-451 -80 -781 -365 -913 -784 -98 -313 -77 -679 56 -945
                152 -307 422 -503 787 -571 139 -26 443 -26 565 0 171 37 360 120 473 209 21
                16 39 28 41 26 2 -2 11 -55 21 -117 l18 -112 68 0 69 0 0 400 0 400 -63 0 -63
                0 -23 -72 c-49 -153 -139 -299 -238 -387 -70 -63 -212 -134 -313 -156 -109
                -25 -302 -23 -403 4 -132 35 -202 74 -293 165 -115 116 -176 242 -221 456 -14
                68 -18 132 -18 315 1 258 16 358 79 527 109 291 322 453 611 465 206 9 363
                -48 498 -180 89 -87 145 -179 188 -309 l32 -98 53 0 c29 0 55 4 58 9 3 5 17
                152 31 327 13 176 27 343 30 372 l6 52 -74 0 -74 0 -27 -90 c-15 -49 -31 -90
                -36 -90 -4 0 -37 16 -72 36 -130 74 -262 125 -391 149 -100 19 -352 18 -462
                -1z"></path>
            </g>
          </svg>
        </div>
      </div >
    </div>
  );
}
