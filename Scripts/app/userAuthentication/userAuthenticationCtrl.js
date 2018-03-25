//replace "__" text to your base entity
var app = angular.module('app', ['ng', 'ngRoute', 'custom','ngCookies'], ['$controllerProvider', function ($controllerProvider) { }]);
app.controller("userAuthenticationCtrl", ["$scope", "$location", "$window", "$http", "$filter", "progress", "logMessage","$cookies",
    function userAuthenticationCtrl($scope, $location, $window, $http, $filter, progress, log, cookies) {
    $scope.user = {
        UserName: "",
        Password: "",
        CompanyURL: ""
    }
    $scope.postLogin = function (user) {
        if (user != undefined && user.userName != "" && user.password != "") {
            debugger
            progress.show();
            $http.get("Data/users.json").success(function (jsonResult) {
                if (jsonResult != undefined && jsonResult.length > 0) {
                    $scope.currentUser = $filter('filter')(jsonResult, { userName: user.userName, password: user.password }, true);
                    if (!angular.isUndefined($scope.currentUser) && $scope.currentUser.length > 0) {
                        cookies.put('userId', $scope.currentUser[0].userId);
                        cookies.put('userName', $scope.currentUser[0].userName);
                        //cookies.put('userId', $scope.currentUser[0].userId);
                        $window.location.href = 'main.html#/dashboard';
                    }
                    else
                        log.error('Invalid Credentials!!!');
                }
                progress.hide();
            });
        }
    }
    $scope.getClass = function (keyVal) {

        var theClass = 'class';
        if (keyVal == 1)
            theClass = "class1";
        //angular.forEach(myArray, function (value, id) {
        //    if (value.key === keyVal) {
        //        theClass = value.class;
        //    }
        //});
        return theClass;
    }
}]);