"use strict"
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('allStadiums');
const url = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json'; 
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let stadios = data.stadiums;
  return stadios.map(function(sta) {
    let li = createNode('li')
    li.innerHTML = `${sta.name} ${sta.city}`;
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});  