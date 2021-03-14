function loadLogos() {
  var panelBody = document.querySelector('.logo-body');

  var count = 0;
  data.forEach(async function (e, index) {
    var cardImg = document.createElement('img');
    cardImg.classList.add('logo-img');
    cardImg.setAttribute('v-on:click', "toggleTab(" + index + ")");
    cardImg.setAttribute('src', e.url);

    var cardH = document.createElement('h1');
    cardH.innerHTML = e.title;

    var cardP = document.createElement('p');
    cardP.innerHTML = e.desc;

    var card = document.createElement('div');
    card.classList.add('logo-card');
    card.appendChild(cardImg);
    card.appendChild(cardH);
    card.appendChild(cardP);

    if (index < 3) {
      var column = document.createElement('div');
      column.classList.add('column', 'is-one-third');
      column.setAttribute('id', 'count' + index);
      column.appendChild(card);
      panelBody.appendChild(column);
    } else {
      var currentColumn;
      if (count == 0) {
        currentColumn = document.querySelector('#count0');
        currentColumn.append(card);
        count++;
      }
      else if (count == 1) {
        currentColumn = document.querySelector('#count1');
        currentColumn.append(card);
        count++;
      }
      else if (count == 2) {
        currentColumn = document.querySelector('#count2');
        currentColumn.append(card);
        count++;
      }
      if (count == 3) {
        count = 0;
      }
    }


  });
}

const app = Vue.createApp({
  data() {
    return {
      showTab: true,
      index: null
    }
  },
  methods: {
    toggleTab(e) {
      this.showTab = !this.showTab;
      this.index = e;
    },
    closeTab() {
      this.showTab = !this.showTab;
    }
  },
  computed: {
    imgTitle() {
      if (this.index != null) {
        return data[this.index].title;
      }
    },
    imgDesc() {
      if (this.index != null) {
        return data[this.index].desc;
      }
    },
    imgTabURL() {
      if (this.index != null) {
        return data[this.index].url;
      }
    }
  }
})












