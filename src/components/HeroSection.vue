<template>
  <section
    class="hero h-screen bg-cover bg-center flex items-center px-8"
    style="background-image: url('/background_hero.jpg')"
  >
    <div class="text-white md:mx-4 sm:mx-16 space-y-8">
      <h1 class="text-blue-500 text-4xl sm:text-6xl font-extrabold drop-shadow-xl sm:text-left uppercase loading wave hidden-text1" ref="loadingText">Léon Marchand</h1>
      <p class="w-2/3 md:w-full text-lg md:text-xl sm:text-2xl italic sm:text-left hidden-text2" id="text-anim">
        Explorez mes réalisations, performances et projets inspirants.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
        <button
          class="swimButton duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-12 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold"
        >
          <div
            class="swimButton absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"
          ></div>
          <div
            class="swimButton absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"
          ></div>
          <div
            class="swimButton absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"
          ></div>
          <div
            class="swimButton absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"
          ></div>
          <p class="swimButton z-10">Découvrir mon parcours</p>
        </button>

        <ActionButton text="Me Contacter" href="/contact" />
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from './ui/ActionButton.vue'
import { gsap } from 'gsap'

export default {
  name: 'HeroSection',
  components: {
    ActionButton,
  },
  mounted() {
    //this.animationText();
    //this.animateButtons();

    const loadingElement = this.$refs.loadingText;
    
    loadingElement.addEventListener('animationend', (event) => {
        loadingElement.style.animation = 'none';
        loadingElement.style.color = 'white';
    });
  },
  methods: {
    startHeroAnimation() {
      //console.log('startHeroAnimation');
      //document.querySelector('.wave').classList.add('wave-animation');
      document.querySelectorAll('.swimButton').forEach((button) => {
        button.classList.add('swiwButton-animation');
      });
      document.querySelectorAll('.hidden-text2').forEach((text) => {
        text.classList.remove('hidden-text2');
      });
    },
    startLoadingAnimation() {
      this.animationText();
      document.querySelector('.wave').classList.add('wave-animation');
      document.querySelectorAll('.hidden-text1').forEach((text) => {
        text.classList.remove('hidden-text1');
      });
    },
    animationText() {
      var newText = "";
      var theText = document.querySelector("#text-anim");
      for (let i = 0; i < theText.innerText.length; i++) {
        newText += `<div class="letter">`;
        if (theText.innerText[i] == " "){newText += "&nbsp;"}
        else {newText += theText.innerText[i];}
        newText += "</div>";
      }
      theText.innerHTML = newText;
      gsap.fromTo("#text-anim div", {
        opacity:0, 
        y:45
      }, {
        duration: 2, 
        opacity:1, 
        y:0, 
        stagger: 0.03, 
        ease: "elastic(1.2, 0.5)",
      });
    },
    animateButtons() {
      const buttons = document.querySelectorAll('.swimButton');

      /*gsap.fromTo(
        buttons,
        {
          opacity: 0,
          x: -300,
          filter: "blur(3px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "none",
          stagger: 0.02,
        }
      );*/

      buttons.forEach((button, index) => {
        gsap.to(button, {
          y: "+=5",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 2 + index * 0.2,
        });
      });
    },
  },
}
</script>

<style scoped>
.hero {
  position: relative;
}
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 0;
}
.hero > div {
  position: relative;
  z-index: 1;
}

/* *** WAVE ANIMATION TITLE *** */
.loading {
  /*height: 120px;*/
  position: relative;
  top: 20px;
  line-height: 110px;
  vertical-align: bottom;
}

.wave {
  background-image: url('https://i.imgur.com/uFpLbYt.png');
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  /*animation: wave-animation 1s infinite linear, loading-animation 7s linear;*/
  background-size: 200px 100px;
  background-repeat: repeat-x;
}

.wave-animation {
  animation: wave-animation 1s infinite linear, loading-animation 2s linear;
}

@keyframes wave-animation {
  0% {
    background-position: 0 bottom;
  }
  100% {
    background-position: 100px bottom;
  }
}

@keyframes loading-animation {
  0% {
    background-size: 100px 40px;
  }
  100% {
    background-size: 100px 200px;
  }
}

/* *** MEDIA QUERIES *** */
@media (max-width: 640px) {
  .loading {
    line-height: normal;
  }

  @keyframes loading-animation {
    0% {
      background-size: 100px 0px;
    }
    100% {
      background-size: 100px 200px;
    }
  }

  .wave {
    animation: wave-animation 1s infinite linear, loading-animation 1s linear;
  }
}

/* *** ELASTIC TEXT ANIMATION *** */
/*.container {
  margin-top: 500px;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: #212121;
}

h1 {
  color: #fff;
  font-size: 6vw;
  max-width: 50%;
}

h1 div {
  display:inline-block;
}*/

:deep(.letter) {
  display: inline-block;
}
</style>
<style>
/* *** BUTTON ANIMATION *** */
.swimButton {
  opacity: 0;
  transform: translateX(-300px);
  filter: blur(3px);
}

.swiwButton-animation {
  animation: slideIn 1.5s ease-out forwards;
}

/* Stagger effect using nth-child */
.swimButton:nth-child(1) {
  animation-delay: 0s;
}

.swimButton:nth-child(2) {
  animation-delay: 0.2s;
}

.swimButton:nth-child(3) {
  animation-delay: 0.4s;
}

.swimButton:nth-child(4) {
  animation-delay: 0.6s;
}

.swimButton:nth-child(5) {
  animation-delay: 0.8s;
}

.swimButton:nth-child(6) {
  animation-delay: 1s;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-300px);
    filter: blur(3px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);
  }
}

.hidden-text1, .hidden-text2 {
  opacity: 0;
}
</style>
