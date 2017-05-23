<template>

  <div class="row">
    <div class="col-md-12 snippet-title" :id="title">
      <h3 class="ex-title">{{ title }}</h3>
      <h5 class="ex-desc" v-if="desc">{{ desc }}</h5>
      <p><a :href="fiddlelink" target="_blank" class="btn btn-default btn-jsfiddle">Try it with JSfiddle</a></p>
    </div>
    <div class="col-md-8 col-sm-12 col-xs-12 snippet">
      <pre>
        <code v-text="snippet" v-hljs class="xml"></code>
      </pre>
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12">
      <div class="demo">
        <slot></slot>
      </div>
      <slot name="external"></slot>
    </div>
  </div>
</div>

  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    fiddlelink: {
      type: String,
      required: false
    },
    desc: {
      type: String,
      required: false,
      default: null
    },
    snippet: {
      type: String,
      required: true
    }
  }
}
</script>
