"use strict"
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('allStadiums');
/*
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
});  */


// using Observable

const { Observable, from, interval, of } = rxjs;
const { map, filter, flatMap} = rxjs.operators;

function myAjax(url) {
   const teamsdata =  fetch(url).then(data => data.json());
   return teamsdata;
   }



   document.getElementById("myBtn").addEventListener("click", function(){
    var  mydata = myAjax('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json');
    var  myTeam = document.getElementById('textInput').value;

from(mydata)
   .pipe(
       flatMap((obj) => obj.teams),
       map(function(sta) {
         if(sta.name == myTeam){
        let li = createNode('li')
        li.innerHTML = `${sta.fifaCode} ${sta.id}`;
        append(ul, li);
         }
      }),
   )
   .subscribe(
    
   )
    
});