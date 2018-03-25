app.controller("userCtrl", ["$scope", "$http", "progress", "logMessage", "$cookies", "jsonFilter", function appCtrl($scope, $http, progress, log, cookies, filter) {
    $scope.initUserProfileDetails = function () {
        var userId = cookies.get('userId');
        if (userId != null && parseInt(userId) > 0) {
            progress.show();
            $http.get("Data/country_codes.json").success(function (jsonResultCountry) {
                $scope.countries = jsonResultCountry;
                $http.get("Data/users.json").success(function (jsonResult) {
                    //$scope.countries = jsonResult;
                    if (jsonResult != undefined && jsonResult.length > 0) {
                        var userDetail = filter.find(jsonResult, { userId: parseInt(userId) });
                        if (userDetail != undefined && userDetail.length > 0) {
                            $scope.user = userDetail[0];
                            $scope.user.confirmPassword = $scope.user.password;
                            $scope.user.dateOfBirth = new Date($scope.user.dateOfBirth);
                        }
                    }
                    progress.hide();
                });
            });
        }
    }
    $scope.putUserDetails = function (user) {
        debugger
        //user = {
        //    "userId": 1,
        //    "userName": "123",
        //    "password": "123",
        //    "firstName": "123",
        //    "lastName": "Patel",
        //    "dateOfBirth": "1989-09-09",
        //    "countryCode": "IN",
        //    "active": true
        //};
        var config = {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost',
                'Access-Control-Allow-Methods': 'GET, POST'
            }
        };
      
        user = {
            email: "disha@patel.com",
            username: "disha",
            password: "disha09"
        };

        //$http({
        //    method: 'GET', url: 'http://localhost:8080/getangularusers', headers: {
        //        'Access-Control-Allow-Origin': 'http://localhost',
        //        'Access-Control-Allow-Methods': 'GET, POST'
        //    }
        //});
        $http.get("http://localhost:8080/getangularusers", config).success(function (data, status, headers, config) {
            debugger

        });

        if (!angular.isUndefined(user)) {
            $http.post("http://localhost:8080/insertangularmongouser", user, config).success(function (data, status, headers, config) {
                debugger

            });
        }
    }
    $scope.resetUserDetails = function () {
        $scope.initUserProfileDetails();
    }

}]);