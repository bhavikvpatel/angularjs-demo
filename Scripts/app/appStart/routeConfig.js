app.config(['$routeProvider', 'tempConfig', '$locationProvider', function ($routeProvider, tempConfig, $locationProvider) {

    $routeProvider.when(tempConfig.hashurl.dashboard, {
        controller: tempConfig.controllers.dashboardCtrl,
        templateUrl: tempConfig.getTemplate("Dashboard")
    }).when(tempConfig.hashurl.menu1, {
        controller: tempConfig.controllers.dashboardCtrl,
        templateUrl: tempConfig.getTemplate("Menu1")
    }).when(tempConfig.hashurl.userProfile, {
        controller: tempConfig.controllers.userCtrl,
        templateUrl: tempConfig.getTemplate("UserProfile")
    }).when(tempConfig.hashurl.postHome, {
        controller: tempConfig.controllers.postCtrl,
        templateUrl: tempConfig.getTemplate("PostHome")
    })
    //.when("/login", {
    //    controller: "dashboardCtrl",
    //    templateUrl: "Templates/" + "Dashboard" + ".html"
    //})

}]);
