app.controller("headerAfterLoginCtrl", ["$scope", "$http", "progress", "$cookies", "jsonFilter",
    function appCtrl($scope, $http, progress, cookies, filter) {
        $scope.initHeaderDetails = function () {
            var userId = cookies.get('userId');
            if (userId != null && parseInt(userId) > 0) {
                progress.show();
                $http.get("Data/users.json").success(function (jsonResult) {
                    //$scope.countries = jsonResult;
                    if (jsonResult != undefined && jsonResult.length > 0) {
                        var userDetail = filter.find(jsonResult, { userId: parseInt(userId) });
                        if (userDetail != undefined && userDetail.length > 0) {
                            $scope.user = userDetail[0];
                        }
                    }
                    progress.hide();
                });
            }
        }

    }]);