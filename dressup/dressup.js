const buttons = document.querySelectorAll('.custom-btn');
const avatarLayers = {
    head: document.getElementById('head'),
    body: document.getElementById('body'),
    fur: document.getElementById('fur'),
    eyes: document.getElementById('eyes'),
    eyebrows: document.getElementById('eyebrows'),
    mouth: document.getElementById('mouth'),
    outfit: document.getElementById('outfit'),
    accessory1: document.getElementById('accessory1'),
    accessory2: document.getElementById('accessory2')
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const src = button.getAttribute('data-src');
        const toggle = button.getAttribute('data-toggle') === 'true';

        if (src === 'none') {
            avatarLayers[target].style.display = 'none';
        } else {
            avatarLayers[target].src = src;
            avatarLayers[target].style.display = 'block';
        }

        if (toggle) {
            avatarLayers[target].style.display = avatarLayers[target].style.display === 'none' ? 'block' : 'none';
        }
    });
});
const avatarOptions = {
  head: [
    'images/HEAD/STRAWBERRY.png', 'images/HEAD/ORIGINAL.png', 
    'images/HEAD/WATERMELON.png', 'images/HEAD/SAKURA.png', 
    'images/HEAD/BUBBLEGUM.png', 'images/HEAD/BLUEBERRY.png', 
    'images/HEAD/MELON.png', 'images/HEAD/YOGURT.png', 
    'images/HEAD/MATCHA.png', 'images/HEAD/COCONUT.png', 
    'images/HEAD/GRAPE.png', 'images/HEAD/BANANA.png'
  ],
  body: [
    'images/BODY/PINK.png', 'images/BODY/YELLOW.png', 
    'images/BODY/LIGHTPINK.png', 'images/BODY/GREEN.png', 
    'images/BODY/ORANGE.png', 'images/BODY/PURPLE.png', 
    'images/BODY/LIGHTBLUE.png', 'images/BODY/BLUE.png', 
    'images/BODY/LIGHTGREEN.png', 'images/BODY/BROWN.png', 
    'images/BODY/RED.png'
  ],
  fur: [
    'images/FUR/1/YELLOW.png', 'images/FUR/1/RED.png',
    'images/FUR/1/ORANGE.png', 'images/FUR/1/GREEN.png',
    'images/FUR/1/BLUE.png', 'images/FUR/1/LIGHTBLUE.png',
    'images/FUR/1/PINK.png', 'images/FUR/1/LIGHTGREEN.png',
    'images/FUR/1/LIGHTPINK.png', 'images/FUR/1/PURPLE.png',
    'images/FUR/1/BROWN.png', 'images/FUR/2/BROWN.png',
    'images/FUR/2/YELLOW.png', 'images/FUR/2/RED.png',
    'images/FUR/2/ORANGE.png', 'images/FUR/2/GREEN.png',
    'images/FUR/2/BLUE.png', 'images/FUR/2/LIGHTBLUE.png',
    'images/FUR/2/PINK.png', 'images/FUR/2/LIGHTGREEN.png',
    'images/FUR/2/LIGHTPINK.png', 'images/FUR/2/PURPLE.png',
    'images/FUR/3/BROWN.png', 'images/FUR/4/BROWN.png',
    'images/FUR/3/YELLOW.png', 'images/FUR/3/RED.png',
    'images/FUR/3/ORANGE.png', 'images/FUR/3/GREEN.png',
    'images/FUR/3/BLUE.png', 'images/FUR/3/LIGHTBLUE.png',
    'images/FUR/3/PINK.png', 'images/FUR/3/LIGHTGREEN.png',
    'images/FUR/3/LIGHTPINK.png', 'images/FUR/3/PURPLE.png',
    'images/FUR/4/YELLOW.png', 'images/FUR/4/RED.png',
    'images/FUR/4/ORANGE.png', 'images/FUR/4/GREEN.png',
    'images/FUR/4/BLUE.png', 'images/FUR/4/LIGHTBLUE.png',
    'images/FUR/4/PINK.png', 'images/FUR/4/LIGHTGREEN.png',
    'images/FUR/4/LIGHTPINK.png', 'images/FUR/4/PURPLE.png',
    'images/FUR/5.png', 'images/FUR/6.png',
    'images/FUR/7.png', 'images/FUR/8.png'
  ],
  eyes: [
    'images/EYES/BEADY.png', 'images/EYES/ANGRY.png', 'images/EYES/CARTOON.png',
    'images/EYES/CHILL.png', 'images/EYES/DROOPY.png', 'images/EYES/EXCITED.png',
    'images/EYES/HAPPY.png', 'images/EYES/LEFT.png', 'images/EYES/RIGHT.png',
    'images/EYES/SLEEPY.png', 'images/EYES/STARRY.png', 'images/EYES/UNINTERESTED.png'
  ],
  eyebrows: [
    'images/EYEBROW/ANGRY.png', 'images/EYEBROW/ANNOYED.png', 'images/EYEBROW/EVIL.png',
    'images/EYEBROW/FROWN.png', 'images/EYEBROW/FURROWED.png', 'images/EYEBROW/SAD.png',
    'images/EYEBROW/SILHOUETTE.png'
  ],
  mouth: [
    'images/MOUTH/1.png', 'images/MOUTH/2.png', 'images/MOUTH/3.png',
    'images/MOUTH/4.png', 'images/MOUTH/5.png', 'images/MOUTH/6.png',
    'images/MOUTH/7.png'
  ],
  outfit: [
    'images/OUTFIT/NONE.png', 'images/OUTFIT/TIE.png', 
    'images/OUTFIT/BOW.png', 'images/OUTFIT/NECKLACE.png', 
    'images/OUTFIT/MARBLE.png'
  ],
  accessory1: [
    'images/ACCESSORY/NONE.png', 'images/ACCESSORY/1.png', 
    'images/ACCESSORY/2.png', 'images/ACCESSORY/3.png', 
    'images/ACCESSORY/4.png', 'images/ACCESSORY/5.png', 
    'images/ACCESSORY/GLASSES.png', 'images/ACCESSORY/GLASSES2.png', 
    'images/ACCESSORY/STARGLASSES.png', 'images/ACCESSORY/STRING.png', 
    'images/ACCESSORY/X.png'
  ],
  accessory2: [
    'images/ACCESSORY/NONE.png', 'images/ACCESSORY/1.png', 
    'images/ACCESSORY/2.png', 'images/ACCESSORY/3.png', 
    'images/ACCESSORY/4.png', 'images/ACCESSORY/5.png', 
    'images/ACCESSORY/GLASSES.png', 'images/ACCESSORY/GLASSES2.png', 
    'images/ACCESSORY/STARGLASSES.png', 'images/ACCESSORY/STRING.png', 
    'images/ACCESSORY/X.png'
  ]
};

document.getElementById('randomize-btn').addEventListener('click', () => {
  Object.keys(avatarLayers).forEach(part => {
      const randomSrc = getRandomOption(avatarOptions[part]);
      if (randomSrc === 'none') {
          avatarLayers[part].style.display = 'none';
      } else {
          avatarLayers[part].src = randomSrc;
          avatarLayers[part].style.display = 'block';
      } 
  });
});

function getRandomOption(options) {
  return options[Math.floor(Math.random() * options.length)];
}
// Save data before the page reloads
window.addEventListener("beforeunload", function () {
  localStorage.setItem("savedData", document.getElementById("inputField").value);
});

// Restore data after reload
window.addEventListener("DOMContentLoaded", function () {
  const savedData = localStorage.getItem("savedData");
  if (savedData) {
      document.getElementById("inputField").value = savedData;
  }
});

