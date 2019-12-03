var app = angular.module('app', 
    [
      'angular.filter'
    ]
  );

app.factory('schoolService', function($http) {
    return {
      getSchool: function(id) {
         return $http.get('http://vsu-u1804-01t:9200/transfer_articulations/_search?q=schoolcode:'+ id +'%20AND%20vsucoursehours:*&pretty&size=5000');
      }
    }
  });
 
app.controller('appCtrl', ['$scope', '$http', '$log', 'schoolService', function($scope, $http, $log, schoolService) { 
  
  $scope.getSchoolListing = function(school) {
       var promise = schoolService.getSchool(school);
          promise.then(
            function(payload) {
                $scope.data = payload.data;
                $scope.courses = $scope.data.hits.hits;               
            },
            function(errorPayload) {
                $log.error('failure loading school', errorPayload);
            }
          );
     };
  
  $http.get('http://vsu-u1804-01t:9200/course_equivalency_schools/_search/?size=2000&pretty') // School List
      .then(function(response) {
        $scope.data = response.data;
        $scope.schools = $scope.data.hits.hits;
      });
  
  $scope.initSchool = function() {
      $scope.searchSchool = ""; 
      $scope.searchCourse = "";
      $scope.courses = [];
    };
  
  $scope.initSubject = function() {
      $scope.searchCourse = "";
      // Garbage collector // $scope.courses = [];
    };
  
(function($){ // here code can always use $ as in alias for jQuery, regardless if the user has repointed $ to something else.
  
// A $( document ).ready() block.
$( document ).ready(function() { 
  
  //fullscreen code
    // Maximize & Minimize Fullscreen
    	$('#title').click(function() {
      
	        	        // Supports most browsers and their versions.
	        function toggleFull() {
	            var elem = document.documentElement; // Make the body go full screen.
	            var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);

	            if (isInFullScreen) {
	                cancelFullScreen(document);
	            } else {
	                requestFullScreen(elem);
	            }
	            return false;
	        }
	        toggleFull();
	    });

	    function cancelFullScreen(el) {
            var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
            if (requestMethod) { // cancel full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }

        function requestFullScreen(el) {
            // Supports most browsers and their versions.
            var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

            if (requestMethod) { // Native full screen.
                requestMethod.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
            return false
        } 

  //End of fullscreen code
  
  $('#showResults').click(function(){
    $('#searchResults').removeClass('hide');
    $('#hideResults').removeClass('hide');
    $(this).addClass('hide');
  });
  
  $('#hideResults').click(function(){
    $('#searchResults').addClass('hide');
    $('#showResults').removeClass('hide');
    $(this).addClass('hide');
  });

  $('#searchState, #searchSchool, #searchSchool-trainingwheels, #bugatti').click(function(){
    $('#searchResults').addClass('hide');
    $('#showResults').removeClass('hide');
    $('#hideResults').addClass('hide');
  });

  $( "#searchSchool" ).change(function() {
    var schoolName = $( "#searchSchool option:selected" ).text();
    $( "#txcollege h3" ).html( schoolName );
  });
  
  $( "#searchSchool-trainingwheels" ).change(function() {
    var schoolName = $( "#searchSchool-trainingwheels option:selected" ).text();
    $( "#txcollege h3" ).html( schoolName );
  });
  
  //happy easter - hidden full feature toggle switch
   $( "#bugatti" ).click(function() {
      $('.bugatti, .trainingwheels').toggleClass('hide');
   });
   
  //auto-scroll to top of page
  $(window).scroll(function(){
      if($(this).scrollTop() > 300) {
          $(".auto-scroll-to-top").addClass("visible");                    
      } else {
          $(".auto-scroll-to-top").removeClass("visible");
      }        
  });
      
   $(".auto-scroll-to-top").click(function(){
      $("html, body").animate({scrollTop: 0}, 600);
  }); 
  //end auto-scroll to top of page 
  
}); // End of A $( document ).ready() block.
  
})(jQuery); // End of explicit jQuery  
}]);  // End of Angular app controller
