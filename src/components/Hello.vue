<template>
  <div class="hello">
    <h1>vue-circle-slider demo</h1>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vue.js docs</a></li>
      <li><a href="https://github.com/vuedev-com/vue-circle-slider" target="_blank">Plugin repo</a></li>
      <li><a href="javascript:;" target="_blank">This demo repo</a></li>
    </ul>

    <div class="container-fluid">
      <example :title="exs.ex1.title" :desc="exs.ex1.desc" :snippet="exs.ex1.snippet">
        <circle-slider v-model="val1"></circle-slider>
        <div slot="external">{{ val1 }}</div>
      </example>

      <example :title="exs.ex2.title" :desc="exs.ex2.desc" :snippet="exs.ex2.snippet">
        <circle-slider
          v-model="val2"
          :min="0"
          :max="10000"
          :stepSize="100"
        ></circle-slider>
        <div slot="external">{{ val2 }}</div>
      </example>

      <example :title="exs.ex3.title" :desc="exs.ex3.desc" :snippet="exs.ex3.snippet">
        <circle-slider :side="150" v-model="val3"></circle-slider>
        <circle-slider :side="50" v-model="val3"></circle-slider>
        <div slot="external">{{ val3 }}</div>
      </example>

      <example :title="exs.ex4.title" :desc="exs.ex4.desc" :snippet="exs.ex4.snippet">
        <circle-slider
          v-model="val4"
          :circleWidth="8"
          :progressWidth="12"
          :knobRadius="10"
        ></circle-slider>
        <circle-slider
          v-model="val4"
          :circleWidth="10"
          :progressWidth="5"
          :knobRadius="10"
        ></circle-slider>
        <circle-slider
          v-model="val4"
          :circleWidth="12"
          :progressWidth="3"
          :knobRadius="4"
        ></circle-slider>
        <div slot="external">{{ val4 }}</div>
      </example>

      <example :title="exs.ex5.title" :desc="exs.ex5.desc" :snippet="exs.ex5.snippet">
        <circle-slider
          v-model="val5"
          :circleWidthRel="30"
          :progressWidthRel="15"
          :knobRadiusRel="8"
        ></circle-slider>
        <div slot="external">{{ val5 }}</div>
      </example>

      <example :title="exs.ex6.title" :desc="exs.ex6.desc" :snippet="exs.ex6.snippet">
        <circle-slider
          v-model="val6"
          circleColor="#edeff0"
          progressColor="#cecece"
          knobColor="#a0a0ff"
        ></circle-slider>
        <circle-slider
          v-model="val6"
          circleColor="#f00"
          progressColor="#0a0"
          knobColor="#0c0"
        ></circle-slider>
        <circle-slider
          v-model="val6"
          circleColor="#cecece"
          progressColor="#00f"
          knobColor="#5555ff"
        ></circle-slider>
        <div slot="external">{{ val6 }}</div>
      </example>
    </div>

  </div>
</template>

<script>
import Example from './Example.vue'
export default {
  name: 'hello',
  components: {
    Example
  },
  data () {
    return {
      val1: 30,
      val2: 2000,
      val3: 75,
      val4: 50,
      val5: 50,
      val6: 25,

      exs: {
        ex1: {
          title: 'Default',
          desc: 'Usage without any props',
          snippet: `\
<circle-slider v-model="val1"></circle-slider>

<div>{{ val1 }}</div>`
        },
        ex2: {
          title: 'Custom dimension',
          desc: 'Custom min/max values and step size',
          snippet: `\
<circle-slider
  v-model="val2"
  :min="0"
  :max="10000"
  :stepSize="100"
></circle-slider>

<div>{{ val2 }}</div>`
        },
        ex3: {
          title: 'Custom side',
          desc: 'Exact size of svg square side (in px)',
          snippet: `\
<circle-slider :side="150" v-model="val3"></circle-slider>
<circle-slider :side="50" v-model="val3"></circle-slider>

<div>{{ val3 }}</div>`
        },
        ex4: {
          title: 'Exact sizes',
          desc: 'Custom circumference and progress curve width, custom knob radius',
          snippet: `\
<circle-slider
  v-model="val4"
  :circleWidth="8"
  :progressWidth="12"
  :knobRadius="10"
></circle-slider>

<circle-slider
  v-model="val4"
  :circleWidth="10"
  :progressWidth="5"
  :knobRadius="10"
></circle-slider>

<circle-slider
  v-model="val4"
  :circleWidth="12"
  :progressWidth="3"
  :knobRadius="4"
></circle-slider>

<div>{{ val4 }}</div>`
        },
        ex5: {
          title: 'Relative sizes',
          desc: 'Custom relative circumference and progress curve width, custom relative knob radius',
          snippet: `\
<circle-slider
  v-model="val5"
  :circleWidthRel="30"
  :progressWidthRel="15"
  :knobRadiusRel="8"
></circle-slider>

<div>{{ val5 }}</div>`
        },
        ex6: {
          title: 'Colors',
          desc: 'Custom color for circle, progress and knob',
          snippet: `\
<circle-slider
  v-model="val6"
  circleColor="#edeff0"
  progressColor="#cecece"
  knobColor="#a0a0ff"
></circle-slider>

<circle-slider
  v-model="val6"
  circleColor="#f00"
  progressColor="#0a0"
  knobColor="#0c0"
></circle-slider>

<circle-slider
  v-model="val6"
  circleColor="#cecece"
  progressColor="#00f"
  knobColor="#5555ff"
></circle-slider>

<div>{{ val6 }}</div>`
        }
      }
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.snippet {
  text-align: left;
}

.snippet pre {
  background-color: transparent;
  padding: 0 !important;
  margin: 0 0 0 10px !important;
}

.snippet .ex-title {
  text-align: left;
  padding-left: 10px;
}

.snippet .ex-desc {
  text-align: left;
  padding-left: 10px;
}

.demo {
  padding-top: 75px;
}
</style>
