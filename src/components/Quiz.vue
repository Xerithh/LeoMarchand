<template>
  <form name="quiz">
    <div class="flex flex-col md:flex-row justify-center mb-32">
      <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv1">
        <div class="choice">
          <p class="text-9xl flex justify-center numbers">1</p>
          <p class="question">
            Quel est le nom de l'entraîneur qui a joué un rôle clé dans la carrière de Léon Marchand
            ?
          </p>
          <div class="flex flex-col quiz-options" ref="quizOptions1">
            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-1" name="quiz-2" value="1" />
              <label>Philippe Lucas</label>
            </div>

            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-2" name="quiz-2" value="2" />
              <label>Bob Bowman</label>
            </div>

            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-3" name="quiz-2" value="3" />
              <label>Jean-Luc Rougé</label>
            </div>

            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-4" name="quiz-2" value="4" />
              <label>Denis Auguin</label>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv2">
        <div class="choice">
          <p class="text-9xl flex justify-center numbers">2</p>
          <p class="question">Qui est la mère de Léon Marchand?</p>
          <div class="flex flex-col quiz-options" ref="quizOptions2">
            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-1" name="quiz-2" value="1" />
              <label>Fanny Peltier</label>
            </div>

            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-2" name="quiz-2" value="2" />
              <label>Ambre Priotti </label>
            </div>

            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-3" name="quiz-2" value="3" />
              <label>Céline Bonnet</label>
            </div>

            <div>
              <input v-on:click="on2Click()" type="radio" id="quiz-2-4" name="quiz-2" value="4" />
              <label>Eloise de la Taille</label>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv3">
        <div class="choice">
          <p class="text-9xl flex justify-center numbers">3</p>
          <p class="question">
            À quelle course Léon Marchand a-t-il gagné sa premiere médaille olympique?
          </p>
          <div class="flex flex-col quiz-options" ref="quizOptions3">
            <div>
              <input v-on:click="on3Click()" type="radio" id="quiz-3-1" name="quiz-3" value="1" />
              <label>100m Brasse </label>
            </div>

            <div>
              <input v-on:click="on3Click()" type="radio" id="quiz-3-2" name="quiz-3" value="2" />
              <label>200m Papillon</label>
            </div>

            <div>
              <input v-on:click="on3Click()" type="radio" id="quiz-3-3" name="quiz-3" value="3" />
              <label>200m Nage Libre</label>
            </div>

            <div>
              <input v-on:click="on3Click()" type="radio" id="quiz-3-4" name="quiz-3" value="4" />
              <label>400m Quatre Nages </label>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv4">
        <div class="choice">
          <p class="text-9xl flex justify-center numbers">4</p>
          <p class="question">Combien de médailles a-til gagné aux Jeux Olympiques de Paris 2024</p>
          <div class="flex flex-col quiz-options" ref="quizOptions4">
            <div>
              <input
                type="number"
                id="quiz-4-gold"
                name="quiz-4"
                min="0"
                max="10"
                value="0"
                class="border-2 pakistans"
              />
              <label>Or </label>
            </div>

            <div>
              <input
                type="number"
                id="quiz-4-silver"
                name="quiz-4"
                min="0"
                max="10"
                value="0"
                class="border-2 pakistans"
              />
              <label>Argent</label>
            </div>

            <div>
              <input
                type="number"
                id="quiz-4-bronze"
                name="quiz-4"
                min="0"
                max="10"
                value="0"
                class="border-2 pakistans"
              />

              <label>Bronze</label>
            </div>

            <div></div>
            <button>Soumettre</button>
          </div>

          <!-- when clicking on one, sumbit button appears -->
        </div>
      </div>
      <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv5">
        <div class="choice">
          <p class="text-9xl flex justify-center numbers">5</p>
          <p class="pakistans-bold question">
            Quel est le surnom de Léon Marchand à Arizona State University?
          </p>
          <div class="flex flex-col quiz-options" ref="quizOptions5">
            <div>
              <input v-on:click="on5Click()" type="radio" id="quiz-5-1" name="quiz-5" value="1" />
              <label>The croissant </label>
            </div>

            <div>
              <input v-on:click="on5Click()" type="radio" id="quiz-5-2" name="quiz-5" value="2" />
              <label>The baguette</label>
            </div>

            <div>
              <input v-on:click="on5Click()" type="radio" id="quiz-5-3" name="quiz-5" value="3" />
              <label>Hon Hon</label>
            </div>

            <div>
              <input v-on:click="on5Click()" type="radio" id="quiz-5-4" name="quiz-5" value="4" />
              <label>Oui Oui</label>
            </div>
          </div>
          <!-- when clicking on one, sumbits -->
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Quiz',
  data() {
    return {
      quizCollapsed: true,
      answered: [false, false, false, false, false],
      answers: ['', '', '', '', ''],
      buttonText: 'Faire le Quiz +',
    }
  },
  methods: {
    quizText() {
      return this.quizCollapsed ? 'Faire le Quiz +' : 'Faire le Quiz -'
    },
    on5Click() {
      //show answer
      answered[0] = true
      console.log('5 answer')
    },
    on4Click() {
      //show answer
      answered[1] = true
      console.log('4 answer')
    },
    on3Click() {
      //show answer
      answered[2] = true
      console.log('3 answer')
    },
    on2Click() {
      //show answer
      answered[3] = true
      console.log('2 answer')
    },
    on1Click() {
      //show answer
      answered[4] = true
      console.log('1 answer')
    },
    animateQuizDiv1() {
      // GSAP animation
      gsap.to(this.$refs.quizDiv1, {
        width: 500,
        paused: false,
        backgroundColor: '#BAE6FD',
        color: '#000',
      })
      gsap.to(this.$refs.quizOptions1, {
        opacity: 1,
        paused: false,
      })
    },
    resetQuizDiv1() {
      gsap.to(this.$refs.quizDiv1, {
        opacity: 1,
        width: 'auto',
        paused: false,
        backgroundColor: 'transparent',
        color: '#B4B5B7',
      })
      gsap.to(this.$refs.quizOptions1, {
        opacity: 0,
        paused: false,
      })
    },
    animateQuizDiv2() {
      // GSAP animation
      gsap.to(this.$refs.quizDiv2, {
        width: 500,
        paused: false,
        backgroundColor: '#BAE6FD',
        color: '#000',
      }),
        gsap.to(this.$refs.quizOptions2, {
          opacity: 1,
          paused: false,
        })
    },
    resetQuizDiv2() {
      gsap.to(this.$refs.quizDiv2, {
        opacity: 1,
        width: 'auto',
        paused: false,
        backgroundColor: 'transparent',
        color: '#B4B5B7',
      }),
        gsap.to(this.$refs.quizOptions2, {
          opacity: 0,
          paused: false,
        })
    },
    animateQuizDiv3() {
      // GSAP animation
      gsap.to(this.$refs.quizDiv3, {
        width: 500,
        paused: false,
        backgroundColor: '#BAE6FD',
        color: '#000',
      }),
        gsap.to(this.$refs.quizOptions3, {
          opacity: 1,
          paused: false,
        })
    },
    resetQuizDiv3() {
      gsap.to(this.$refs.quizDiv3, {
        opacity: 1,
        width: 'auto',
        paused: false,
        backgroundColor: 'transparent',
        color: '#B4B5B7',
      }),
        gsap.to(this.$refs.quizOptions3, {
          opacity: 0,
          paused: false,
        })
    },
    animateQuizDiv4() {
      // GSAP animation
      gsap.to(this.$refs.quizDiv4, {
        width: 500,
        paused: false,
        backgroundColor: '#BAE6FD',
        color: '#000',
      }),
        gsap.to(this.$refs.quizOptions4, {
          opacity: 1,
          paused: false,
        })
    },
    resetQuizDiv4() {
      gsap.to(this.$refs.quizDiv4, {
        opacity: 1,
        width: 'auto',
        paused: false,
        backgroundColor: 'transparent',
        color: '#B4B5B7',
      }),
        gsap.to(this.$refs.quizOptions4, {
          opacity: 0,
          paused: false,
        })
    },
    animateQuizDiv5() {
      // GSAP animation
      gsap.to(this.$refs.quizDiv5, {
        width: 500,
        paused: false,
        backgroundColor: '#BAE6FD',
        color: '#000',
      }),
        gsap.to(this.$refs.quizOptions5, {
          opacity: 1,
          paused: false,
        })
    },
    resetQuizDiv5() {
      gsap.to(this.$refs.quizDiv5, {
        opacity: 1,
        width: 'auto',
        paused: false,
        backgroundColor: 'transparent',
        color: '#B4B5B7',
      }),
        gsap.to(this.$refs.quizOptions5, {
          opacity: 0,
          paused: false,
        })
    },
  },
  mounted() {
    // Adding event listener inside Vue lifecycle
    this.resetQuizDiv1()
    this.resetQuizDiv2()
    this.resetQuizDiv3()
    this.resetQuizDiv4()
    this.resetQuizDiv5()
    this.$refs.quizDiv1.addEventListener('mouseenter', this.animateQuizDiv1)
    this.$refs.quizDiv1.addEventListener('mouseleave', this.resetQuizDiv1)
    this.$refs.quizDiv2.addEventListener('mouseenter', this.animateQuizDiv2)
    this.$refs.quizDiv2.addEventListener('mouseleave', this.resetQuizDiv2)
    this.$refs.quizDiv3.addEventListener('mouseenter', this.animateQuizDiv3)
    this.$refs.quizDiv3.addEventListener('mouseleave', this.resetQuizDiv3)
    this.$refs.quizDiv4.addEventListener('mouseenter', this.animateQuizDiv4)
    this.$refs.quizDiv4.addEventListener('mouseleave', this.resetQuizDiv4)
    this.$refs.quizDiv5.addEventListener('mouseenter', this.animateQuizDiv5)
    this.$refs.quizDiv5.addEventListener('mouseleave', this.resetQuizDiv5)
  },
  // beforeDestroy() {
  //   // Clean up event listener when the component is destroyed
  //   if (this.$refs.quizDiv1) {
  //     this.$refs.quizDiv1.removeEventListener('mouseenter', this.animateQuizDiv1)
  //   }
  // },
}
</script>

<style scoped>
iframe {
  width: 470px;
  height: 250px;
}
@media (max-width: 768px) {
  iframe {
    width: 300px;
    height: 150px;
  }
}
.quiz-div {
  width: 500;
}
.quiz-options {
  opacity: 0;
  opacity: 1;
  width: 'auto';
  background-color: 'transparent';
  color: '#B4B5B7';
}

.numbers {
  font-family: pakistans-bold;
  margin-bottom: 50px;
}
.question {
  font-family: pakistans-bold;
  margin-bottom: 1em;
  /* height: 3em; */
  width: 25vh;
  max-height: 70em;
  text-align: center;
}
.quiz-collapse {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: red;
  background-color: #555555;
}
.quiz-options div input {
  margin-right: 10px;
}
.pakistans {
  font-family: pakistans;
}
.choice {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center along the horizontal axis */
}

button {
  font-family: pakistans;
}
label {
  font-family: pakistans;
}
</style>
