/*

    HTML5 Reader for Electric Zine Maker Music editions, orginal reader by Jeremy Oduber & contributors 2019-2021, Music edition by Klaus von Grafenstein 2024.
    Original :
        https://jeremyoduber.itch.io/js-zine
    Electric Zine Maker: 
        https://alienmelon.itch.io/electric-zine-maker
    Electric Zine Maker Reader code:
        https://github.com/jeremyoduber/EZM-Reader
    Licensed under the MIT License:
        https://github.com/KlausVG/EZM-Reader-music-edition/blob/main/LICENSE
    
*/

//---- USER OPTIONS ----//
const TEMPLATE = 1; // Change this value to set the template
/*  
    Available templates:
    
    1: 8 pages (default)
        8 Page Folded Zine
        8 Page Z-Fold
        Quarter Size
    2: 12 pages
        Fancy T-Cut Zine
    3: 14 pages
        Easy Long Cut
    4: 16 pages
        16 Page Micro-Mini
        Mini-Booklet
        Fancy Flapbook
    5: 24 pages
        Tetraflexagon
    6: 26 pages
        Square Accordion
        Normal Accordion
    7: 32 pages
        Mini-Mini-Booklet
    8: 64 pages
        Micro
*/
const BG_TILE = 'example.gif'; // If an image is preferred over a static color!
const BGCOLOR = '#f5f5f5'; // Change this hex value to set the background color. Remember to keep the quotes!
const ALT = 'Reader for Electric Zine Maker'; // Change this to a plaintext copy or description of your content to make it visible to screen-readers
const SMOOTH = true; // Set to false if you want crispy pixels. Leave true if you like the blur.
const MUSIC = 'elnath.mp3'; // Change this to the path of your music file
const MUTE_SPRITE = 'mute.png'; // Change this to the path of your mute sprite
const UNMUTE_SPRITE = 'unmute.png'; // Change this to the path of your unmute sprite


//---- END USER OPTIONS ----//

// Setup constants and variables
const FOV = 45;
const LOADING_OVERLAY = document.querySelector('#loading');
let card_amount;
let current_state = 0;
let textures = [];
let pages = [];
let isMuted = false;
let music;
let muteButton;

console.log('Setting background to:', BG_TILE); // For error handling
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.background = `url(${BG_TILE}) repeat`;
    document.body.style.backgroundSize = 'auto';
    document.body.style.backgroundPosition = 'top left';
});

document.body.ariaLabel = ALT;
if (SMOOTH) {
    document.body.style.imageRendering = 'auto';
} else {
    document.body.style.imageRendering = 'pixelated';
}
const metaTheme = document.createElement('meta');
metaTheme.name = 'theme-color';
metaTheme.content = BGCOLOR;
document.head.appendChild(metaTheme);

function getTextures(num) {
    return ['pages/FRONT.png', 'pages/INNERFRONT.png'].concat(
        new Array(num).fill().map((_, idx) => 'pages/' + (idx + 1) + '.png'),
        ['pages/BACK.png']
    );
}

// Select template
switch (TEMPLATE) {
    default:
    case 1:
        card_amount = 4;
        textures = getTextures(5);
        break;
    case 2:
        card_amount = 6;
        textures = getTextures(9);
        break;
    case 3:
        card_amount = 7;
        textures = getTextures(11);
        break;
    case 4:
        card_amount = 8;
        textures = getTextures(13);
        break;
    case 5:
        card_amount = 12;
        textures = getTextures(21);
        break;
    case 6:
        card_amount = 13;
        textures = getTextures(23);
        break;
    case 7:
        card_amount = 16;
        textures = getTextures(29);
        break;
    case 8:
        card_amount = 32;
        textures = getTextures(61);
        break;
}

// Preloader
Promise.all(
    textures.map(
        src =>
            new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
                img.alt = src.split('/')[1].split('.')[0];
            })
    )
)
    .then(imgs => {


 
        LOADING_OVERLAY.remove();
        const list = document.createElement('ul');
        list.ariaHidden = true;
        pages = imgs.map((img, idx) => {
            const li = document.createElement('li');
            const flip = idx % 2;
            li.className = 'depth-' + Math.min(2, idx);
            li.style.transform = 'translateX(100%) rotateY(0deg) scaleZ(' + (flip ? -1 : 1) + ')';
            li.appendChild(img);
            list.appendChild(li);
            return li;
        });
        document.body.appendChild(list);
// Create music player
music = new Audio(MUSIC);
music.loop = true;

// Check if music file exists
music.onerror = function() {
    console.log("Music file not found. Not creating mute button.");
    return;
};

// Create mute button only if music file exists
music.oncanplay = function() {
    muteButton = document.createElement('button');
    muteButton.className = 'mute-button';
    muteButton.style.position = 'absolute';
    muteButton.style.top = '10px';
    muteButton.style.right = '10px';
    muteButton.style.backgroundImage = `url(${MUTE_SPRITE})`;
    muteButton.style.backgroundSize = 'cover';
    muteButton.style.width = '30px';
    muteButton.style.height = '30px';
    muteButton.style.border = 0;
    muteButton.style.border = 'none';
    muteButton.style.cursor = 'pointer';
    muteButton.onclick = () => {
        if (isMuted) {
            music.play();
            muteButton.style.backgroundImage = `url(${MUTE_SPRITE})`;
        } else {
            music.pause();
            muteButton.style.backgroundImage = `url(${UNMUTE_SPRITE})`;
        }
        isMuted = !isMuted;
    };
    document.body.appendChild(muteButton);
};


        function updatePerspective() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            list.style.perspective = Math.sqrt(((w / 2) * w) / 2 + ((h / 2) * h) / 2) / Math.tan(((FOV / 2) * Math.PI) / 180) + 'px';
        }

        window.addEventListener('resize', updatePerspective);
        updatePerspective();
    })
    .catch(error => {
        console.error(error);
        LOADING_OVERLAY.textContent = 'Something went wrong Make sure your images are in the pages folder See console for details.';
    });


// Keyboard input
document.addEventListener('keyup', function onKeyUp(key) {
    if (key.key === 'ArrowLeft' || key.key === 'a') {
        flipLeft();
    } else if (key.key === 'ArrowRight' || key.key === 'd') {
        flipRight();
    }
    if (key.key === 'm' || key.key === 'M') {
          if (isMuted) {
                music.play();
                muteButton.style.backgroundImage = `url(${MUTE_SPRITE})`;
            } else {
                music.pause();
                muteButton.style.backgroundImage = `url(${UNMUTE_SPRITE})`;
            }
            isMuted = !isMuted;
    }
});


let isFirstClick = true;
// Mouse input
document.addEventListener('pointerup', function onPointerUp(event) {
    
    if (event.button !== 0) return;
    if (event.target === muteButton) {
        return;
    }
  
    if (event.clientX < window.innerWidth / 2) {
        flipRight(); // Changed from flipRight() to flipLeft()
    } else {
        flipLeft(); // Changed from flipLeft() to flipRight()
    }
    if (isFirstClick) {
        // First click, start music and set isFirstClick to false
        try {
                music.play();

        } catch (error) {
            console.error('Error playing music:', error);
        }
        isFirstClick = false;
    }
});



function getPages(state) {
    return [pages[state * 2], pages[state * 2 + 1]].filter(i => i);
}
function replaceTransformPerPage(state, search, replace) {
    getPages(state).forEach(page => {
        page.style.transform = page.style.transform.replace(search, replace);
    });
}


function setDepth(state, depth) {
    getPages(state).forEach(page => {
        page.className = page.className.replace(/depth-\d+/, 'depth-' + Math.min(depth, 2));
    });
}

// Flip page left
function flipLeft() {
    if (current_state >= card_amount) return;
    replaceTransformPerPage(current_state, '0deg', '-180deg');
    setDepth(current_state - 1, 1);
    setDepth(current_state - 2, 2);
    setDepth(current_state + 1, 0);
    setDepth(current_state + 2, 1);
    ++current_state;
}

// Flip page right
function flipRight() {
    if (current_state <= 0) return;
    replaceTransformPerPage(current_state - 1, '-180deg', '0deg');
    setDepth(current_state - 3, 1);
    setDepth(current_state - 2, 0);
    setDepth(current_state + 1, 2);
    setDepth(current_state, 1);
    --current_state;
}


muteButton.onmouseover = () => {

  muteButton.style.opacity = '0.7';
};
muteButton.onmouseout = () => {
 
  muteButton.style.opacity = '1';
};
