app.controller("dashboardCtrl", ["$scope", "$http", "progress", "logMessage", /*"alertNotification", */function appCtrl($scope, $http, progress, log/*, alert*/) {
    $scope.initDashboardDetails = function () {
        progress.show();
        $http.get("Data/country_codes.json").success(function (jsonResult) {
            $scope.countries = jsonResult;
            progress.hide();
        })
        //alert("Message");
    }
    

}]);
app.controller("postCtrl", ["$scope", "$http", "progress", "logMessage", function postCtrl($scope, $http, progress, log) {
    $scope.initPostDetails = function () {
        progress.show();
        $http.get("Data/posts.json").success(function (jsonResult) {
            $scope.posts = jsonResult;
            //$scope.getDateWords(new Date(), new Date($scope.posts[0].createdDate));
            if ($scope.posts.length > 0) {
                for (var i = 0; i < $scope.posts.length; i++) {
                    $scope.posts[i].timeDifference = $scope.timeDifference(new Date(), new Date($scope.posts[i].createdDate));
                }
            }
            //var textstring = $scope.timeDifference(new Date(), new Date($scope.posts[1].createdDate));
            debugger
            progress.hide();
        })
    }

    $scope.timeDifference = function (current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
            return '' + Math.round(elapsed / msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
            return '' + Math.round(elapsed / msPerMonth) + ' months ago';
        }

        else {
            return '' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    }

    $scope.showDiff = function (date_old, date_now) {
        debugger
        var diff = (date_now - date_old) / 1000;
        var diff = Math.abs(Math.floor(diff));

        var days = Math.floor(diff / (24 * 60 * 60));
        var leftSec = diff - days * 24 * 60 * 60;

        var hrs = Math.floor(leftSec / (60 * 60));
        var leftSec = leftSec - hrs * 60 * 60;

        var min = Math.floor(leftSec / (60));
        var leftSec = leftSec - min * 60;

        document.getElementById("showTime").innerHTML = "You have " + days + " days " + hrs + " hours " + min + " minutes and " + leftSec + " seconds before death.";
        if (days > 30) {
            var diff2 = Math.floor(date_old - date_now);
            var day = 1000 * 60 * 60 * 24;

            var days = Math.floor(diff2 / day);
            var months = Math.floor(days / 31);
            var years = Math.floor(months / 12);

            var message = date_now.toDateString();
            message += " was "
            message += days + " days "
            message += months + " months "
            message += years + " years ago \n"
        }
        //setTimeout($scope.showDiff, 1000);
    }

    $scope.getDateWords = function (date_old, date_now) {
        debugger

        var diff = Math.floor(date_old - date_now);
        var day = 1000 * 60 * 60 * 24;

        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);

        var message = date_now.toDateString();
        message += " was "
        message += days + " days "
        message += months + " months "
        message += years + " years ago \n"
        debugger
        // get total seconds between the times
        var delta = Math.abs(date_old - date_now) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = delta % 60;  // in theory the modulus is not required
    }

    $scope.timeSince = function (date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }
   

}]);