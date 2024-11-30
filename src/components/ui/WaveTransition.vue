<template>
    <div class="background">
      <canvas ref="canvas" id="canvas"></canvas>
    </div>
  </template>
  
  <style scoped>
  .background {
    background-color: transparent;  /* Assurez-vous que le fond est transparent */
  width: 100vw;
  height: 100vh; /* Définissez une hauteur de 100% ou ajustez selon vos besoins */
  position: absolute;  /* Cela va positionner la vague par-dessus les autres sections */
  top: 0;  /* Positionné tout en haut */
  left: 0;  /* Positionné à gauche */
  z-index: 100; 
  }
  
  #canvas {
    position: relative;
    width: 100%;
    height: 100%;
  }
  </style>
  
  <script setup>
  import { onMounted, onBeforeUnmount, ref } from "vue";
  import gsap from "gsap";
  
  const canvas = ref(null);
  let context;
  let resolution = window.devicePixelRatio || 1;
  
  let waves = [];
  let resized = false;
  
  let vw, vh;

  const emit = defineEmits();
  
  onMounted(() => {
  context = canvas.value.getContext("2d");
  resizeCanvas();

  // Création des vagues
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

function startHeroAnimation() {
    emit('wavesAnimationCompleted');
    console.log("Animation des vagues terminée");
}

    let halfwayTriggered = false;
  const wave1Animation = gsap.to(wave1, {
    duration: 2.5,
    waveHeight: vh * 0.95,
    ease: "sine.inOut",
    repeat: 0,
    yoyo: false,
    delay: 0.38,
    onUpdate: () => {
        const progress = wave1Animation.progress();
    if (progress >= 0.5 && !halfwayTriggered) {
      halfwayTriggered = true;  // Empêche le déclenchement multiple
      emit('wavesAnimationCompleted');  // Émet l'événement à la moitié de l'animation
      console.log("Animation des vagues à la moitié");
    }
  },
  });

  gsap.to(wave2, {
    duration: 2.5,
    waveHeight: vh * 0.95,
    ease: "sine.inOut",
    repeat: 0,
    yoyo: false,
    delay: 0.3,
  });

  gsap.to(wave3, {
    duration: 2.5,
    waveHeight: vh * 0.95,
    fillStyle: "rgba(81,182,254,0.5)",
    ease: "sine.inOut",
    repeat: 0,
    yoyo: false,
    delay: 0.35,
  });

  window.addEventListener("resize", () => {
    resized = true;
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
  
    canvas.value.style.width = `${vw}px`;
    canvas.value.style.height = `${vh}px`;
  
    context.scale(resolution, resolution);
  }
  </script>
  