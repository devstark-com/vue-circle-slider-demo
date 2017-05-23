<template>
  <div class="hello">
    <div class="header">
      <h1>vue-circle-slider demo</h1>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Vue.js docs</a></li>
        <li><a href="https://github.com/devstark-com/vue-circle-slider" target="_blank">Plugin repo</a></li>
        <li><a href="https://github.com/devstark-com/vue-circle-slider-demo" target="_blank">This demo repo</a></li>
      </ul>
    </div>

    <div class="container-fluid">
      <div class="row">

        <div class="col-md-3">
          <div class="nav-sidebar">
            <h3>Examples</h3>
            <div class="list-group">
              <a href="#Default" class="list-group-item">Default</a>
              <a href="#Custom dimension" class="list-group-item">Custom dimension</a>
              <a href="#Custom side" class="list-group-item">Custom side</a>
              <a href="#Exact sizes" class="list-group-item">Exact sizes</a>
              <a href="#Relative sizes" class="list-group-item">Relative sizes</a>
              <a href="#Colors" class="list-group-item">Colors</a>
              <a href="#Two-way binding" class="list-group-item">Two-way binding</a>
            </div>
            <h3>CDN</h3>
            <p>https://unpkg.com/vue-circle-slider@1.0.0</p>
          </div>
        </div>
        <div class="col-md-9">
          <example :title="exs.ex1.title" :desc="exs.ex1.desc" :fiddlelink="exs.ex1.fiddlelink" :snippet="exs.ex1.snippet">
            <circle-slider v-model="val1"></circle-slider>
            <div slot="external">{{ val1 }}</div>
          </example>

          <example :title="exs.ex2.title" :desc="exs.ex2.desc" :fiddlelink="exs.ex2.fiddlelink" :snippet="exs.ex2.snippet">
            <circle-slider
              v-model="val2"
              :min="0"
              :max="10000"
              :stepSize="100"
            ></circle-slider>
            <div slot="external">{{ val2 }}</div>
          </example>

          <example :title="exs.ex3.title" :desc="exs.ex3.desc" :fiddlelink="exs.ex3.fiddlelink" :snippet="exs.ex3.snippet">
            <circle-slider :side="150" v-model="val3"></circle-slider>
            <circle-slider :side="50" v-model="val3"></circle-slider>
            <div slot="external">{{ val3 }}</div>
          </example>

          <example :title="exs.ex4.title" :desc="exs.ex4.desc" :fiddlelink="exs.ex4.fiddlelink" :snippet="exs.ex4.snippet">
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

          <example :title="exs.ex5.title" :desc="exs.ex5.desc" :fiddlelink="exs.ex5.fiddlelink" :snippet="exs.ex5.snippet">
            <circle-slider
              v-model="val5"
              :circleWidthRel="30"
              :progressWidthRel="15"
              :knobRadiusRel="8"
            ></circle-slider>
            <div slot="external">{{ val5 }}</div>
          </example>

          <example :title="exs.ex6.title" :desc="exs.ex6.desc" :fiddlelink="exs.ex6.fiddlelink" :snippet="exs.ex6.snippet">
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

          <example :title="exs.ex7.title" :desc="exs.ex7.desc" :fiddlelink="exs.ex7.fiddlelink" :snippet="exs.ex7.snippet">
            <circle-slider
              v-model="val7"
              @touchmove="$refs.input.blur()"
            ></circle-slider>
            <!-- @touchmove="$refs.input.blur()" - hide keyboard on touchmove at mobile devices -->
            <input ref="input" type="number" v-model.number="val7" />
          </example>
        </div>
      </div>

      <div class="row footer">
        <div class="col-md-12">
          <h1>vue-circle-slider</h1>
          <div class="">
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/devstark-com/vue-circle-slider/subscription" data-size="large" data-show-count="true" aria-label="Watch devstark-com/vue-circle-slider on GitHub">Watch</a>
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/devstark-com/vue-circle-slider" data-size="large" data-show-count="true" aria-label="Star devstark-com/vue-circle-slider on GitHub">Star</a>
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/devstark-com/vue-circle-slider/archive/master.zip" data-size="large" aria-label="Download devstark-com/vue-circle-slider on GitHub">Download</a>
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/devstark-com" data-size="large" data-show-count="true" aria-label="Follow @devstark-com on GitHub">Follow</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import "../assets/style.css";
</style>

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
      val7: 10,

      exs: {
        ex1: {
          title: 'Default',
          desc: 'Usage without any props',
          fiddlelink: 'https://jsfiddle.net/alexx_l/88h9qp7b/',
          snippet: `\
          <circle-slider v-model="val1"></circle-slider>

          <div>{{ val1 }}</div>`
        },
        ex2: {
          title: 'Custom dimension',
          desc: 'Custom min/max values and step size',
          fiddlelink: 'https://jsfiddle.net/alexx_l/5mfyd1sp/2/',
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
          fiddlelink: 'https://jsfiddle.net/alexx_l/t1asf075/',
          snippet: `\
          <circle-slider :side="150" v-model="val3"></circle-slider>
          <circle-slider :side="50" v-model="val3"></circle-slider>

          <div>{{ val3 }}</div>`
        },
        ex4: {
          title: 'Exact sizes',
          desc: 'Custom circumference and progress curve width, custom knob radius',
          fiddlelink: 'https://jsfiddle.net/alexx_l/fL5ojhtz/',
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
          fiddlelink: 'https://jsfiddle.net/alexx_l/qfbnzgy5/',
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
          fiddlelink: 'https://jsfiddle.net/alexx_l/abvf9joh/',
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
        },
        ex7: {
          title: 'Two-way binding',
          desc: 'Two way binding with input field',
          fiddlelink: 'https://jsfiddle.net/alexx_l/ake02cro/',
          snippet: `\
          <circle-slider
            v-model="val7"
            @touchmove="$refs.input.blur()"
          ></circle-slider>
          <!-- @touchmove="$refs.input.blur()" - hide keyboard on touchmove at mobile devices -->

          <input ref="input" type="number" v-model.number="val7" />`
        }
      }
    }
  }
}
</script>
