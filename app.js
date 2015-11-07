(function(){

  var app = angular.module('discover', [ ]);

    app.controller('DiscoverController', ['$http', function($http){
      var discover = this;

      discover.projects = [ ];
      
      $http.get('projects.json').success(function(data){
        console.log(data.data);
        discover.projects = data.data;
      });

    }]);

})();


