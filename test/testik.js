// see also: https://github.com/ded/script.js

function f() {
  return 11
};

//////////////////////////////////////////////////////

const callback = function() {
  console.log('...***...  setTimeout callback context is', this);
}

const ctx1 = { name: 'ctx1' };
const ctx2 = { name: 'ctx2' };

const func = function() {
  console.log('...***...  caller context is', this);
  setTimeout(callback);
}

func.apply(ctx1);
func.apply(ctx2);

/////////////////////////////////////////////////////

let xxx =133
setTimeout(() => {
  console.log("huhuuuuhhuuhuhuhuhu" , this, xxx) 
}, 6000) 

//////////////////////////////////////////////////////
// https://angular.io/guide/zone
// zonejs    https://fossies.org/linux/angular/packages/zone.js/README.md
// https://github.com/gilbox/vizone
// http://gilbox.github.io/vizone/demo/

//import zone from "https://unpkg.com/zone.js"

// import "~/test/vizone.js"
// import "~/test/zone.ts"
 import "~/test/zonejs.js"

// https://javascript.plainenglish.io/what-is-zone-why-zone-8534350480dd


function createNewContext() {
  console.log(zone.x)
}
zone.x = "root zone"
var myZone = zone.fork();
myZone.x = "forked zone"
myZone.run(createNewContext);

///////////////////////////////////////////////// 

console.log("EXAMPLE 2")
function executeUnderNewContext() {
  console.log("Executing the Function within a Zone");
  let xx =13
  setTimeout(() => {
    console.log("Entering the 'setTimeout' within the Zone " , this, zone, xx) 
  }, 3000) 
}

var myZoneSpecifiation = {
  data:{myData:"mojeData"},
  context:{myData:"mojeData"},
  beforeTask: function () {
    console.log("'beforeTask' Hooks Entered");
  }, afterTask: function () {
    console.log("'afterTask' Hooks Entered");
  }
};

zone.x = "root zone"
zone.parent.x = "root parent zone"
//var myData = {myData:"mojeData"}
var myZone = zone.fork(myZoneSpecifiation, 
  {data:{myData:"mojeData"}});
myZone.x = "myZone"
myZone.run(executeUnderNewContext);

console.log("Executed outside the Zone")
console.log("/EXAMPLE 2")


console.log(window.zone)

//////////////////////////////////////////////////////

// https://medium.com/swlh/what-is-zone-js-and-how-can-i-use-it-63ce08a55962
//https://docs.google.com/document/d/1F5Ug0jcrm031vhSMJEOgp1l-Is-Vf0UCNDY-LsQtAIY/edit


console.log("///////////////////////",Zone)
 
export default f; 