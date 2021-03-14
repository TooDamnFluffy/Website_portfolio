var spreadSheetURL = "https://docs.google.com/spreadsheets/d/1IIomYzU5LzKjN375wc9HTn04a_R8AlA_nnPPrg8-Dxk/edit?usp=sharing";
const dataLoaded = new Event('dataLoaded');
var data = [];

function init() {
  Tabletop.init({
    key: spreadSheetURL,
    callback: grabData,
    simpleSheet: true,
  });
};

function grabData(results, tabletop) {
  results.forEach(async function (e) {
    data.push({
      title: e.title,
      desc: e.desc,
      url: e.imgURL
    });
  })
  loadLogos();
  window.dispatchEvent(dataLoaded);
}

window.addEventListener('DOMContentLoaded', init);
