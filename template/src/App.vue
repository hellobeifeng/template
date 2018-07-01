<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import {
  mapState
//   mapGetters,
//   mapActions,
//   mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Loading from './components/loading/loading.vue'
export default {
  metaInfo: {
    title: 'vue脚手架'
  },
  methods: {
    // ...mapActions(['updateCountAsync']),
    // ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  components: {
    Header,
    Loading
  },
  mounted () {
    this.$notify({
      content: '测试一下通知弹窗',
      btn: 'close'
    })
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="stylus" scoped>
</style>
