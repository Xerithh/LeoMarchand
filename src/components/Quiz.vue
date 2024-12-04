<template>
  <div class="flex flex-col md:flex-row justify-center mb-16">
    <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv1">
      <div
        v-if="answered[0] == true"
        class="w-full flex content-around justify-center quiz-div choice answer"
      >
        <b class="mb-6">{{ quiz1toString(quiz1) }} : {{ quiz1 == 2 ? 'Bravo!' : 'Dommage!' }}</b>
        Robert Bowman (né le 6 avril 1965) est un entraîneur de natation américain, actuellement
        directeur de la natation et entraîneur principal des équipes de natation et de plongeon des
        Longhorns à l'Université du Texas. Bowman est surtout connu pour avoir été l'entraîneur de
        Michael Phelps, nageur américain médaillé d'or olympique à 23 reprises.
      </div>
      <div v-if="answered[0] == false" class="choice">
        <div class="choice">
          <p class="text-9xl flex justify-center numbers">1</p>
          <p class="question">
            Quel est le nom de l'entraîneur qui a joué un rôle clé dans la carrière de Léon Marchand
            ?
          </p>
          <div class="flex flex-col quiz-options" ref="quizOptions1">
            <div>
              <label>
                <input
                  @change="on1Click()"
                  type="radio"
                  id="quiz-2-1"
                  name="quiz-2"
                  value="1"
                  v-model="quiz1"
                />
                Philippe Lucas</label
              >
            </div>

            <div>
              <label>
                <input
                  @change="on1Click()"
                  type="radio"
                  id="quiz-2-2"
                  name="quiz-2"
                  value="2"
                  v-model="quiz1"
                />
                Bob Bowman</label
              >
            </div>

            <div>
              <label>
                <input
                  @change="on1Click()"
                  type="radio"
                  id="quiz-2-3"
                  name="quiz-2"
                  value="3"
                  v-model="quiz1"
                />
                Jean-Luc Rougé</label
              >
            </div>

            <div>
              <label>
                <input
                  @change="on1Click()"
                  type="radio"
                  id="quiz-2-4"
                  name="quiz-2"
                  value="4"
                  v-model="quiz1"
                />
                Denis Auguin</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv2">
      <div
        v-if="answered[1] == true"
        class="w-full flex content-around justify-center quiz-div choice answer"
      >
        <b class="mb-6">{{ quiz2toString(quiz2) }} : {{ quiz2 == 3 ? 'Bravo!' : 'Dommage!' }}</b>

        Céline Bonnet (née le 2 février 1976) est une ancienne nageuse française spécialisée dans le
        dos et le quatre nages, qui a participé aux Jeux olympiques d'été de 1992. Elle est mariée à
        l'ex-nageur olympique français Xavier Marchand. Leur fils aîné, Léon Marchand, est quadruple
        médaillé d'or olympique.
      </div>
      <div v-if="answered[1] == false" class="choice">
        <p class="text-9xl flex justify-center numbers">2</p>
        <p class="question">Qui est la mère de Léon Marchand?</p>
        <div class="flex flex-col quiz-options" ref="quizOptions2">
          <div>
            <label>
              <input
                @change="on2Click()"
                type="radio"
                id="quiz-2-1"
                name="quiz-2"
                value="1"
                v-model="quiz2"
              />Fanny Peltier</label
            >
          </div>

          <div>
            <label>
              <input
                @change="on2Click()"
                type="radio"
                id="quiz-2-2"
                name="quiz-2"
                value="2"
                v-model="quiz2"
              />Ambre Priotti
            </label>
          </div>

          <div>
            <label>
              <input
                @change="on2Click()"
                type="radio"
                id="quiz-2-3"
                name="quiz-2"
                value="3"
                v-model="quiz2"
              />
              Céline Bonnet</label
            >
          </div>

          <div>
            <label>
              <input
                @change="on2Click()"
                type="radio"
                id="quiz-2-4"
                name="quiz-2"
                value="4"
                v-model="quiz2"
              />
              Eloise de la Taille</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv3">
      <div
        v-if="answered[2] == true"
        class="w-full flex content-around justify-center quiz-div choice answer"
      >
        <b class="mb-6">{{ quiz3toString(quiz3) }} : {{ quiz3 == 4 ? 'Bravo!' : 'Dommage!' }}</b>

        Il semblait difficile à croire, lorsque Marchand toucha le mur en premier lors du 400 m
        quatre nages, que ce n'était que sa première médaille olympique. Au cours des trois
        dernières années, il s'était tellement imposé qu'une médaille olympique était la dernière
        grande réalisation qui lui manquait. Dix titres de champion NCAA, cinq championnats du monde
        de natation et un record du monde semblaient constituer un palmarès trop impressionnant pour
        quelqu'un qui faisait ses débuts aux Jeux olympiques.
      </div>
      <div v-if="answered[2] == false" class="choice">
        <p class="text-9xl flex justify-center numbers">3</p>
        <p class="question">
          À quelle course Léon Marchand a-t-il gagné sa premiere médaille olympique?
        </p>
        <div class="flex flex-col quiz-options" ref="quizOptions3">
          <div>
            <label>
              <input
                @change="on3Click()"
                type="radio"
                id="quiz-3-1"
                name="quiz-3"
                value="1"
                v-model="quiz3"
              />
              100m Brasse
            </label>
          </div>

          <div>
            <label>
              <input
                @change="on3Click()"
                type="radio"
                id="quiz-3-2"
                name="quiz-3"
                value="2"
                v-model="quiz3"
              />
              200m Papillon</label
            >
          </div>

          <div>
            <label>
              <input
                @change="on3Click()"
                type="radio"
                id="quiz-3-3"
                name="quiz-3"
                value="3"
                v-model="quiz3"
              />
              200m Nage Libre</label
            >
          </div>

          <div>
            <label>
              <input
                @change="on3Click()"
                type="radio"
                id="quiz-3-4"
                name="quiz-3"
                value="4"
                v-model="quiz3"
              />
              400m Quatre Nages
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv4">
      <div
        v-if="answered[3] == true"
        class="w-full flex content-around justify-center quiz-div choice answer"
      >
        <b class="mb-6"
          >{{ quiz4toString(quiz4) }} :
          {{
            this.quiz4.bronze == '1' && this.quiz4.gold == '4' && this.quiz4.silver == '0'
              ? 'Bravo!'
              : 'Dommage!'
          }}</b
        >

        Quatre médailles d'or et une médaille de bronze en relais représentent le sommet de ce que
        Marchand aurait pu rêver. Cela le place dans une compagnie très sélecte, seuls Michael
        Phelps (à deux reprises), Mark Spitz et Kristin Otto ayant remporté autant de médailles d'or
        individuelles en piscine lors d'une seule édition des Jeux olympiques.
      </div>
      <div v-if="answered[3] == false" class="choice">
        <p class="text-9xl flex justify-center numbers">4</p>
        <p class="question">Combien de médailles a-til gagné aux Jeux Olympiques de Paris 2024</p>
        <div class="flex flex-col quiz-options number-container" ref="quizOptions4">
          <div>
            <label>
              <input
                type="number"
                id="quiz-4-gold"
                name="quiz-4"
                min="0"
                max="10"
                value="0"
                class="pakistans"
                v-model="quiz4.gold"
              />
              Or
            </label>
          </div>

          <div>
            <label>
              <input
                type="number"
                id="quiz-4-silver"
                name="quiz-4"
                min="0"
                max="10"
                value="0"
                class="pakistans"
                v-model="quiz4.silver"
              />
              Argent</label
            >
          </div>

          <div>
            <label>
              <input
                type="number"
                id="quiz-4-bronze"
                name="quiz-4"
                min="0"
                max="10"
                value="0"
                class="pakistans"
                v-model="quiz4.bronze"
              />

              Bronze</label
            >
          </div>
          <button class="mt:16 submit-4" @click="(event) => on4Click(event)">Soumettre</button>
        </div>

        <!-- when clicking on one, sumbit button appears -->
      </div>
    </div>
    <div class="w-full flex content-around justify-center quiz-div" ref="quizDiv5">
      <div
        v-if="answered[4] == true"
        class="w-full flex content-around justify-center quiz-div choice answer"
      >
        <b class="mb-6">{{ quiz5toString(quiz5) }} : {{ quiz5 == 2 ? 'Bravo!' : 'Dommage!' }}</b>

        Son surnom là bas, c'est bel et bien "The Baguette"!
      </div>
      <div v-if="answered[4] == false" class="choice">
        <p class="text-9xl flex justify-center numbers">5</p>
        <p class="pakistans-bold question">
          Quel est le surnom de Léon Marchand à Arizona State University?
        </p>
        <div class="flex flex-col quiz-options" ref="quizOptions5">
          <div>
            <label>
              <input
                @change="on5Click()"
                type="radio"
                id="quiz-5-1"
                name="quiz-5"
                value="1"
                v-model="quiz5"
              />
              The croissant
            </label>
          </div>

          <div>
            <label>
              <input
                @change="on5Click()"
                type="radio"
                id="quiz-5-2"
                name="quiz-5"
                value="2"
                v-model="quiz5"
              />
              The baguette</label
            >
          </div>

          <div>
            <label>
              <input
                @change="on5Click()"
                type="radio"
                id="quiz-5-3"
                name="quiz-5"
                value="3"
                v-model="quiz5"
              />
              Hon Hon</label
            >
          </div>

          <div>
            <label>
              <input
                @change="on5Click()"
                type="radio"
                id="quiz-5-4"
                name="quiz-5"
                value="4"
                v-model="quiz5"
              />
              Oui Oui</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isDone()">
    <h2 class="text-2xl font-bold text-center mb-12 text-gray-800">
      Résultats: {{ correctAnswers }} / 5
    </h2>
    <p class="text-1xl text-center mb-12 text-gray-800">{{ result2String(correctAnswers) }}</p>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Quiz',
  data() {
    return {
      quiz1: '',
      quiz2: '',
      quiz3: '',
      quiz4: { gold: '0', silver: '0', bronze: '0' },
      quiz5: '',
      quizCollapsed: true,
      answered: [false, false, false, false, false],
      correctAnswers: 0,
      answers: ['', '', '', '', ''],
      buttonText: 'Faire le Quiz +',
    }
  },
  methods: {
    isDone() {
      return this.answered.find((bool) => bool == false) == undefined
    },

    quiz1toString(answer) {
      switch (answer) {
        case '1':
          return 'Phillipe Lucas'
        case '2':
          return 'Bob Bowman'
        case '3':
          return 'Jean-Luc Rougé'
        case '4':
          return 'Denis Auguin'
        default:
          break
      }
    },
    quiz2toString(answer) {
      switch (answer) {
        case '1':
          return 'Fanny Peltier'
        case '2':
          return 'Ambre Priotti'
        case '3':
          return 'Céline Bonnet'
        case '4':
          return 'Eloise de la Taille'
        default:
          break
      }
    },
    quiz3toString(answer) {
      switch (answer) {
        case '1':
          return '100m Brasse'
        case '2':
          return '200m Papillon'
        case '3':
          return '200m Nage Libre'
        case '4':
          return '400m Quatre Nages'
        default:
          break
      }
    },
    quiz4toString(answer) {
      return `${answer.gold} Ors, ${answer.silver} Argents et ${answer.bronze} Bronzes`
    },
    quiz5toString(answer) {
      switch (answer) {
        case '1':
          return 'The croissant'
        case '2':
          return 'The baguette'
        case '3':
          return 'Hon Hon'
        case '4':
          return 'Oui Oui'
        default:
          break
      }
    },
    result2String(score) {
      let message
      switch (score) {
        case 5:
          message = 'Bravo ! Tu es un véritable expert ! 🎉'
          break
        case 4:
          message = "Bien joué ! Tu t'es super bien débrouillé ! 👍"
          break
        case 3:
          message = 'Pas mal ! Tu es sur la bonne voie. 😊'
          break
        case 2:
          message = 'Dommage, mais tu peux encore progresser ! 💪'
          break
        case 1:
          message = "Oups ! Allez, un peu d'effort et ça ira mieux la prochaine fois ! 😅"
          break
        default:
          message = 'Alors là... 🤔'
      }
      return message
    },
    quizText() {
      return this.quizCollapsed ? 'Faire le Quiz +' : 'Faire le Quiz -'
    },
    on5Click() {
      gsap.to(this.$refs.quizDiv5, {
        paused: false,
        opacity: 0,
        onComplete: () => {
          if (this.quiz1 == '2') {
            this.correctAnswers++
          }
          this.answered[4] = true
          gsap.to(this.$refs.quizDiv5, {
            paused: false,
            opacity: 1,
            duration: 1,
          })
        },
      })
    },
    on4Click(event) {
      if (event) {
        event.preventDefault()
      }
      gsap.to(this.$refs.quizDiv4, {
        paused: false,
        opacity: 0,
        onComplete: () => {
          if (this.quiz4.bronze == '1' && this.quiz4.gold == '4' && this.quiz4.silver == '0') {
            this.correctAnswers++
          }
          this.answered[3] = true
          gsap.to(this.$refs.quizDiv4, {
            paused: false,
            opacity: 1,
            duration: 1,
          })
        },
      })
    },
    on3Click() {
      gsap.to(this.$refs.quizDiv3, {
        paused: false,
        opacity: 0,
        onComplete: () => {
          if (this.quiz1 == '4') {
            this.correctAnswers++
          }
          this.answered[2] = true
          gsap.to(this.$refs.quizDiv3, {
            paused: false,
            opacity: 1,
            duration: 1,
          })
        },
      })
    },
    on2Click() {
      gsap.to(this.$refs.quizDiv2, {
        paused: false,
        opacity: 0,
        onComplete: () => {
          if (this.quiz1 == '2') {
            this.correctAnswers++
          }
          this.answered[1] = true
          gsap.to(this.$refs.quizDiv2, {
            paused: false,
            opacity: 1,
            duration: 1,
          })
        },
      })
    },
    on1Click() {
      gsap.to(this.$refs.quizDiv1, {
        paused: false,
        opacity: 0,
        onComplete: () => {
          if (this.quiz1 == '2') {
            this.correctAnswers++
          }
          this.answered[0] = true
          gsap.to(this.$refs.quizDiv1, {
            paused: false,
            opacity: 1,
            duration: 1,
          })
        },
      })
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
        //  opacity: 1,
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
        // opacity: 1,
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
        //opacity: 1,
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
        //  opacity: 1,
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
        // opacity: 1,
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
  beforeDestroy() {
    // Clean up event listener when the component is destroyed
    if (this.$refs.quizDiv1) {
      this.$refs.quizDiv1.removeEventListener('mouseenter', this.animateQuizDiv1)
      this.$refs.quizDiv1.removeEventListener('mouseexit', this.animateQuizDiv1)
    }
    if (this.$refs.quizDiv2) {
      this.$refs.quizDiv2.removeEventListener('mouseenter', this.animateQuizDiv2)
      this.$refs.quizDiv2.removeEventListener('mouseexit', this.animateQuizDiv2)
    }
    if (this.$refs.quizDiv3) {
      this.$refs.quizDiv3.removeEventListener('mouseenter', this.animateQuizDiv3)
      this.$refs.quizDiv3.removeEventListener('mouseexit', this.animateQuizDiv3)
    }
    if (this.$refs.quizDiv4) {
      this.$refs.quizDiv1.removeEventListener('mouseenter', this.animateQuizDiv4)
      this.$refs.quizDiv1.removeEventListener('mouseexit', this.animateQuizDiv4)
    }
    if (this.$refs.quizDiv5) {
      this.$refs.quizDiv1.removeEventListener('mouseenter', this.animateQuizDiv5)
      this.$refs.quizDiv1.removeEventListener('mouseexit', this.animateQuizDiv5)
    }
  },
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

.submit-4 {
  margin-top: 1em;
  padding: 10px;
}
.submit-4:hover {
  background-color: #ffffff;
  transition: background-color 0.4s;
  border-radius: 10px;
}
.quiz-div {
  width: 500;
  padding-top: 2em;
  padding-bottom: 2em;
}
.answer {
  text-align: center;
  width: 300px;
  overflow-x: hidden;
}
.quiz-options {
  opacity: 0;
  opacity: 1;
  width: 'auto';
  background-color: 'transparent';
  color: '#B4B5B7';
}
.number-container input {
  text-align: center;
  background-color: transparent;
  margin-bottom: 2px;
  opacity: 1;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 0.4;
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
