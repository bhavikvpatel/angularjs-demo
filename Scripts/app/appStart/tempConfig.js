app.constant('tempConfig',
{
    hashurl: {
        login: '/' + 'login',
        dashboard: '/' + 'dashboard',
        userProfile: '/' + 'userProfile',
        postHome: '/' + 'postHome'
    },
    controllers: {
        appCtrl: 'appCtrl',
        dashboardCtrl: 'dashboardCtrl',
        userCtrl: 'userCtrl',
        postCtrl: 'postCtrl'
    },
    getTemplate: function (tmplname) {
        return "Templates/" + tmplname + ".html";
    }
});