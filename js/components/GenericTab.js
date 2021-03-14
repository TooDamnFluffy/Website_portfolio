app.component('generic-tab', {
  props: {
    imgStuff: {
      type: Number,
      required: true
    }
  },
  template: `
      <div class="column is-two-thirds">
        <div class="logo-img-tab">
          <img class="" style="width: 100%; height: auto;" :src="imgTabURL" />
        </div>
      </div>
      <div class="column">
        <div class="logo-desc-tab">
          <h1 style="display: inline-block;"> {{ imgTitle }} </h1>
          <p @click="closeTab" style="display: inline-block; float: right;"><i class="fas fa-times"></i></p>
        </div>
      </div>
    `,
  data() {
    return {
      imgTabURL: data[this.imgStuff].title
    }
  },
  methods: {
    closeTab() {
      console.log(imgStuff);
      this.$emit('tab-closed');
    },

  },
  computed: {
    imgTitle() {
      console.log("Img Title Accessed");
      return this.imgStuff.title;
    }
  }
});