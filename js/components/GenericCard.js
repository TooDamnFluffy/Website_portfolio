app.component('generic-card', {
  props: {
    imgStuff: Object
  },
  template: `
  <div class="logo-card">
    <img class="logo-img" @click="openTab" :src="imgCardURL" />
    <h1> imgCardTitle </h1>
    <p>Bruh Description</p>
  </div>
  `,
  data() {
    return {


    }
  },
  methods: {
    openTab() {
      this.$emit('tab-clicked', this.imgCardIndex);
      console.log("Tab Clicked")
      console.log(imgStuff);
    },

  },
  computed: {

  }
});
