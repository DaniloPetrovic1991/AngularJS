var myNinjaApp = angular.module("myNinjaApp", ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html'
      })
      .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'NinjaController'
      }).otherwise({
        redirectTo: '/home'
      });
}]);

myNinjaApp.controller("NinjaController", [
  "$scope",
  function($scope) {

    $scope.removeNinja = function(ninja) {
        var removeNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja, 1);
    } 

    $scope.addNinja = function() {
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });

        $scope.newninja.name = "",
        $scope.newninja.belt = "",
        $scope.newninja.rate = ""
    };

    $scope.ninjas = [
      {
        name: "Kevin",
        belt: "Green",
        rate: 50,
        available: true,
        thumb: "content/img/Kevin.png"
      },
      {
        name: "Grace",
        belt: "Yellow",
        rate: 30,
        available: true,
        thumb: "content/img/Grace.png"
      },
      {
        name: "Suzan",
        belt: "Black",
        rate: 100,
        available: false,
        thumb: "content/img/Suzan.png"
      },
      {
        name: "Tiffany",
        belt: "Red",
        rate: 25,
        available: false,
        thumb: "content/img/Tiffany.png"
      },
      {
        name: "Mark",
        belt: "Purple",
        rate: 55,
        available: false,
        thumb: "content/img/Mark.png"
      },
    ];
  }
]);
