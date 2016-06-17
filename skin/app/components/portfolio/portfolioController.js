// Header Controller
app.controller('portfolioController', ['$scope', function ($scope) {
  // Scope Data.
  $scope.portfolio = {
    "websites": [{
      "marsxn": {
        "name": "Marsxn.io",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque in diam a varius.Phasellus orci lectus.",
        "url": "https://github.com/marsxn",
        "tech": [
          "NodeJS",
          "Express",
          "AngularJS",
          "MongoDB",
          ]
        }
      },{
      "github": {
        "name": "Github",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque in diam a varius.Phasellus orci lectus.",
        "url": "https://github.com/marsxn",
        "tech": [
          "Python", 
          "Django",
          "MySQL",
          "GIT",
          "Foundation Framework",
          ]
        }
      },{
      "stackoverflow": {
        "name": "StackOverflow",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque in diam a varius.Phasellus orci lectus.",
        "url": "https://github.com/marsxn",
        "tech": [
          "Python", 
          "Django",
          "MySQL",
          "GIT",
          "Foundation Framework",
          ]
        }
      }
    ],
    "libs":[{
      "simplesite": {
        "name": "Simple Site",
        "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque in diam a varius.Phasellus orci lectus, ornare ac luctus nec, laoreet at enim. Curabitur sed volutpat metus. ",
        "url": "https://github.com/marsxn", 
        }
      },{
      "htpl": {
        "name": "HTPL",
        "summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque in diam a varius.Phasellus orci lectus, ornare ac luctus nec, laoreet at enim. Curabitur sed volutpat metus. ",
        "url": "https://github.com/marsxn",  
        }
      }
    ]
  };
}]);