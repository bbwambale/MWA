"use strict"
function myCallToApi(url){
    fetch(url).then(data => data.json()).
    then(data => dataGen.next(data))
}

function* getAllDetails(){
    console.log('fetching All WorldCup details');
    const teamInfo = 
           yield myCallToApi('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json');
           console.log(teamInfo);
}


const dataGen = getAllDetails();
dataGen.next();