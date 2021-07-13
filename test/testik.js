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

//////////////////////////////////////////////////////
// https://angular.io/guide/zone
// zonejs    https://fossies.org/linux/angular/packages/zone.js/README.md
// https://github.com/gilbox/vizone
// http://gilbox.github.io/vizone/demo/

//import zone from "https://unpkg.com/zone.js"
//import "http://gilbox.github.io/vizone/demo/vizone-bundle.js"

console.log(window)

//////////////////////////////////////////////////////
export default f;