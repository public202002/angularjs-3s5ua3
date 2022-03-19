import jQuery from "jquery"
import angular from 'angular';
var $ = jQuery
function newMessageHandler(e) {
	 console.log(e)
}
$(document).on("newMessage", newMessageHandler)


class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";
    this.sendMess = function($event){
      console.log($event.target)
      this.name = "huhu"
      // create custom events
      $.event.trigger({
        type: "newMessage",
        message: "Hello World!",
        time: new Date()
      });

    }
  }
}

export default HomeCtrl;
