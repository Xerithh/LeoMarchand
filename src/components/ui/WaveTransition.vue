<template>
    <div class="background" id="backgroundGoDown">
        <canvas ref="canvas" id="canvas"></canvas>
        <div id="backgroundRipples">
            <RipplesAnimation v-show="isRipplesActive" ref="ripplesAnimationRef" class="ripple" @updateGoUp="handleGoUp" @updateSwimmer="handleSwimmer" />
            <h1 class="text-5xl sm:text-6xl font-extrabold drop-shadow-xl sm:text-left uppercase hiddenText" ref="title" id="textRipples">Plongez dans mon monde</h1>
            <SwimAnimation @swimEvent="swimmerUp" v-if="isSwimActive" class="hidden"/>
        </div>
    </div>
</template>
  
<style scoped>
.background {
    background-color: transparent;
    width: 100%;
    height: 100%; 
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    pointer-events: none; 
    /*border: 5px solid rgb(242, 255, 0);*/
}
  
#canvas {
    position: relative;
    width: 100%;
    height: 100%;
    pointer-events: none; 
    /*border: 1px solid blue;*/
}

#backgroundRipples {
    background-color: #6ec3fe;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /*border: 3px solid red;*/
}

h1 {
    margin-top: 25rem; /* Ajuste cette valeur pour déplacer le titre vers le bas */
    text-align: center;
    color: #d1f5ff;
}

.hiddenText {
    opacity: 0;
}

:deep(.letter) {
  display: inline-block;
}
</style>
  
<script setup>
import { onMounted, onBeforeUnmount, defineEmits, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RipplesAnimation from "./RipplesAnimation.vue";
import SwimAnimation from "./SwimAnimation.vue";

gsap.registerPlugin(ScrollTrigger);

const title = ref(null);
const canvas = ref(null);
let context;
let resolution = Math.min(window.devicePixelRatio || 1, 2);

let waves = [];
let resized = false;

let vw, vh;

let halfwayTriggered = false;
let thirdwayTriggered = false;
let animGoUp = false;

const ripplesAnimationRef = ref(null);

const isSwimActive = ref(false);
const isRipplesActive = ref(true);

const emit = defineEmits();

document.body.style.overflow = 'hidden';
            
function startHeroAnimation() {
    emit('wavesAnimationCompleted');
}

function handleGoUp(value) {
    animGoUp = value;
    //console.log('animGoUp updated:', animGoUp);
    window.addEventListener("wheel", (event) => {
        //console.log("WHEELING IN WAVE");
        if (event.deltaY > 0 && !animGoUp) {
            //console.log("WHEELING IN UP");
            // Défilement vers le bas (scroll down)
            parallaxAnimationUp.play();
        } else if (event.deltaY < 0 && animGoUp) {
            //console.log("WHEELING IN DOWN");
            // Défilement vers le haut (scroll up)
            parallaxAnimationDown.play();
        }
    });
}

function handleSwimmer() {
  // Activer SwimAnimation et désactiver RipplesAnimation
    isSwimActive.value = true;
    isRipplesActive.value = false;
}

function swimmerUp() {
    console.log("SHOOOOOOOOOOOOW");
    isSwimActive.value = false;
    isRipplesActive.value = true;
    resetAnimations(false);
    animGoUp = false;

    gsap.to(".background", {
        y: "-100%",
        ease: "power5.out",
        duration: 1,
        paused: false,
        onStart: () => {
            waves.forEach(wave => {
                wave.amplitude = wave.amplitude * 3;
            });
        },
        onComplete: () => {
            if (ripplesAnimationRef.value) {
                ripplesAnimationRef.value.addWindowListener();
            }
            resetAnimations(true);
            //animGoUp = true;
        }
    });
}

const onTitleVisible = () => {
    if (title.value) {
        title.value.classList.remove('hiddenText');
    }
    var newText = "";
      var theText = document.querySelector("#textRipples");
      for (let i = 0; i < theText.innerText.length; i++) {
        newText += `<div class="letter">`;
        if (theText.innerText[i] == " "){newText += "&nbsp;"}
        else {newText += theText.innerText[i];}
        newText += "</div>";
      }
      theText.innerHTML = newText;
      gsap.fromTo("#textRipples div", {
        opacity:0, 
        y:45
      }, {
        duration: 2, 
        opacity:1, 
        y:0, 
        stagger: 0.03, 
        ease: "elastic(1.2, 0.5)",
      });
};

onMounted(() => {
    /* *** RIPPLES *** */
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onTitleVisible();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  if (title.value) {
    observer.observe(title.value);
  }
  
  /* *** CANVAS *** */
    function resetAnimations(bool) {
        if(!bool)
            parallaxAnimationUp.progress(0).pause();
        else
            parallaxAnimationDown.progress(0).pause();
    }

    context = canvas.value.getContext("2d");
    resizeCanvas();

    const wave1 = createWave({
        amplitude: 10,
        duration: 0.9,
        fillStyle: "rgba(182,182,254,0.5)",
        frequency: 20,
        width: vw,
        height: vw,
        segments: 100,
        waveHeight: vh * 0.001,
    });

    const wave2 = createWave({
        amplitude: 13,
        duration: 0.6,
        fillStyle: "rgba(81,182,254,0.5)",
        frequency: 15,
        width: vw,
        height: vh,
        segments: 100,
        waveHeight: vh * 0.01,
    });

    const wave3 = createWave({
        amplitude: 12,
        duration: 1.5,
        fillStyle: "rgba(81,182,254,1)",
        frequency: 10,
        width: vw,
        height: vh,
        segments: 100,
        waveHeight: vh * 0.05,
    });

    waves.push(wave1, wave2, wave3);

    /* *** WAVE ANIMATION *** */
    const createWaveAnimation = (wave, delay) => {
        return gsap.to(wave, {
            duration: 1.3,
            waveHeight: vh * 0.95,
            ease: "sine.inOut",
            repeat: 0,
            yoyo: false,
            delay: delay
        });
    };

    const wave1Animation = gsap.to(wave1, {
        duration: 1.3,
        waveHeight: vh * 0.95,
        ease: "sine.inOut",
        repeat: 0,
        yoyo: false,
        delay: 0.18,
        onUpdate: () => {
            const progress = wave1Animation.progress();
            if (progress >= 0.35 && !thirdwayTriggered) {
                thirdwayTriggered = true;
                emit('wavesAnimationCompleted', 1);
            }
            if (progress >= 0.5 && !halfwayTriggered) {
                halfwayTriggered = true;
                emit('wavesAnimationCompleted', 2);
            }
        },
        onComplete: () => {
            document.body.style.overflow = 'hidden';
                window.addEventListener("wheel", (event) => {
                    //console.log("WHEELING IN WAVE");
                    if (event.deltaY > 0 && !animGoUp) {
                        //console.log("WHEELING IN UP");
                        // Défilement vers le bas (scroll down)
                        parallaxAnimationUp.play();
                    } else if (event.deltaY < 0 && animGoUp) {
                        //console.log("WHEELING IN DOWN");
                        // Défilement vers le haut (scroll up)
                        parallaxAnimationDown.play();
                    }
                });
        },
    });

    createWaveAnimation(wave2, 0.1);
    createWaveAnimation(wave3, 0.15);

    window.addEventListener("resize", () => {
        resized = true;
    });

    /* *** ANIMATION SCROLL *** */
    const parallaxAnimationUp = gsap.to(".background", {
        y: "-100%",
        ease: "power5.out",
        duration: 1,
        paused: true,
        onStart: () => {
            waves.forEach(wave => {
                wave.amplitude = wave.amplitude * 3;
            });
        },
        onComplete: () => {
            if (ripplesAnimationRef.value) {
                setTimeout(() => {
                    ripplesAnimationRef.value.addWindowListener();
                }, 600);
            }
            resetAnimations(true);
            //animGoUp = true;
        }
    });

    const parallaxAnimationDown = gsap.to(".background", {
        y: "0%",
        ease: "power5.out",
        duration: 1,
        paused: true,
        onStart: () => {
            waves.forEach(wave => {
                wave.amplitude = wave.amplitude / 3;
            });
        },
        onComplete: () => {
            resetAnimations(false);
            animGoUp = false;
        }
    });

    gsap.ticker.add(update);
});

onBeforeUnmount(() => {
    gsap.ticker.remove(update);
});
  
function update() {
    if (resized) {
        resizeCanvas();
        waves.forEach(wave => wave.resize(vw, vh));
        resized = false;
    }

    context.clearRect(0, 0, vw, vh);
    context.globalCompositeOperation = "soft-light";

    waves.forEach(wave => wave.draw());
}
  
function createWave(options) {
    options = options || {};

    let wave = {
        amplitude: options.amplitude || 200,
        context: context,
        curviness: options.curviness || 0.75,
        duration: options.duration || 2,
        fillStyle: options.fillStyle || "rgba(33,150,243,1)",
        frequency: options.frequency || 4,
        height: options.height || 600,
        points: [],
        segments: options.segments || 100,
        tweens: [],
        waveHeight: options.waveHeight || 300,
        width: options.width || 500,
        x: options.x || 0,
        y: options.y || 0,
        init: init,
        resize: resize,
        draw: draw,
        kill: kill,
    };

    init();

    function kill() {
        wave.tweens.forEach(tween => tween.kill());
        wave.tweens.length = 0;
        wave.points.length = 0;
    }

    function init() {
        kill();
        let segments = wave.segments;
        let interval = wave.width / segments;

        for (let i = 0; i <= segments; i++) {
            let norm = i / segments;
            let point = { x: wave.x + i * interval, y: 1 };

            let tween = gsap.to(point, {
                duration: wave.duration,
                y: -1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }).progress(norm * wave.frequency);

            wave.tweens.push(tween);
            wave.points.push(point);
        }
    }

    function draw() {
        let points = wave.points;
        let len = points.length;
        let startY = wave.waveHeight;
        let height = wave.amplitude / 2;

        context.beginPath();
        context.moveTo(points[0].x, startY + points[0].y * height);

        for (let i = 1; i < len; i++) {
            let point = points[i];
            context.lineTo(point.x, startY + point.y * height);
        }

        context.lineTo(wave.x + wave.width, wave.y + wave.height);
        context.lineTo(wave.x, wave.y + wave.height);
        context.closePath();
        context.fillStyle = wave.fillStyle;
        context.fill();
    }

    function resize(width, height) {
        wave.width = width;
        wave.height = height;

        let points = wave.points;
        let len = points.length;
        let interval = wave.width / wave.segments;

        for (let i = 0; i < len; i++) {
            let point = points[i];
            point.x = wave.x + i * interval;
        }
    }

    return wave;
}
  
function resizeCanvas() {
    vw = window.innerWidth;
    vh = window.innerHeight;

    canvas.value.width = vw * resolution;
    canvas.value.height = vh * resolution;

    context.scale(resolution, resolution);
}
</script>
  