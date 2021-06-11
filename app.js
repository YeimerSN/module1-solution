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
            var empty = false;
            var elements = string.split(',');
            for(var i = 0; i <elements.length; i++){
                if(elements.length != 1 && (elements[i] == "" || elements[i] == " ")){
                    empty = true;
                }
            }
            if(empty == false){
                if(elements == ""){
                    mesagge = "Please enter data first";
                }else if(elements.length > 0 && elements.length < 4){
                    mesagge = "Enjoy!";
                }else if(elements.length >= 4){
                    mesagge = "Too much!";
                }
            }else{
                mesagge = "Element empty! Check your input.";
            }
            return mesagge;
        };
    });

})();