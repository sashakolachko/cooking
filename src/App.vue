<template>
<v-app>
  <Header />
  <v-content>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </v-content>
  <Footer />
</v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
<style >
.slide-enter-active,
.slide-leave-active {
  transition: opacity .4s, transform .4s;
}

.slide-enter-active {
  transition-delay: .4s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateZ(-100px);
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: translateZ(0px);
}
</style>
