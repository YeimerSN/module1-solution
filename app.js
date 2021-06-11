(function (){
    'use strict';
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function($scope, $filter){
        $scope.input = "";

        $scope.check = function(){
            var message = Lunch($scope.input);
            $scope.checkLunch = message;
        };

        function Lunch(string){
            var mesagge = "";
            var elements = string.split(',');
            console.log(elements)
            if(elements.length == 1){
                mesagge = "Please enter data first";
            }else if(elements.length > 1 && elements.length < 4){
                mesagge = "Enjoy!";
            }else if(elements.length >= 4){
                mesagge = "Too much!";
            }

            return mesagge;
        };

    });

})();