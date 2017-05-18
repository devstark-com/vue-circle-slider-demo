<template>
  <div class="row">
    <div class="col-sm-6 col-xs-12 snippet">
      <h3 class="ex-title">{{ title }}</h3>
      <h5 class="ex-desc" v-if="desc">{{ desc }}</h5>
      <pre>
        <code v-text="snippet" v-hljs class="xml"></code>
      </pre>
    </div>
    <div class="col-sm-6 col-xs-12">
      <div class="demo">
        <slot></slot>
      </div>
      <slot name="external"></slot>
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
