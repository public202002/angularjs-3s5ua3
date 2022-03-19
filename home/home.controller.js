class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";
    this.sendMess = function($event){
      console.log($event.target)
      this.name = "huhu"
    }
  }
}

export default HomeCtrl;
