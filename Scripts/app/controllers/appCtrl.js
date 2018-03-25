app.controller("appCtrl", ["$scope", "$rootScope", "$location", function appCtrl($scope, $rootScope, $location) {


    $scope.$on('$routeChangeStart', function (scope, next, current) {

    });


    $scope.$on('$locationChangeStart', function (event, next, current) {
        
        //var users = { userId: 0 };
        //var currentUrl = next.split("/");
        //currentUrl = currentUrl[4].split("/");
        //var findCurrentUrl = rx.linq(authorizePages.collections).where("t => t.url == '" + currentUrl[0] + "'").toList();
        //if ($scope.lastPage == undefined) {
        //    $scope.lastPage = "";
        //    var urlString = '';
        //    var currentUrlItems = current.split("/");
        //    if (currentUrlItems.length > 5) {
        //        if (currentUrlItems.length == 6) {

        //            urlString = currentUrlItems[4] + "/" + currentUrlItems[5];
        //        }
        //        else if (currentUrlItems.length == 7) {

        //            urlString = currentUrlItems[4] + "/" + currentUrlItems[5] + "/" + currentUrlItems[6];
        //        }
        //        else
        //            urlString = currentUrlItems[4] + "/" + currentUrlItems[5];
        //    }
        //    else
        //        urlString = currentUrlItems[4];
        //    rx.cache.session.save("redirectUrl", urlString);
        //    $location.url(rxEncoder.encode('blank'));
        //} else if ($scope.lastPage != next && findCurrentUrl.length == 1 && currentUrl[0] != "/" + rxEncoder.encode('blank')) {
        //    $scope.lastPage = next;
        //    event.preventDefault();
        //    $scope.validatePage(findCurrentUrl[0], next, event);
        //} else {
        //    $scope.lastPage = next;
        //}
        //$(".showpopup").remove();

    });

    $rootScope.$on('$locationChangeSuccess', function (event, next, previous) {
        //var currentUrl = next.split("/");
        //if (!angular.isUndefined(currentUrl[4])) {
        //    var currentEntity = rx.encryption.decode(currentUrl[4]);
        //    if (currentEntity == "staff" || currentEntity == "contact" || currentEntity == "Library" || currentEntity == "actionCard" || currentEntity == "communicationTemplate" || currentEntity == "checkList" || currentEntity == "resources" || currentEntity == "teams")
        //        $scope.hideRightBar = true;
        //    else
        //        $scope.hideRightBar = false;

        //    if (rx.encryption.decode(currentUrl[4]) == "staff" || rx.encryption.decode(currentUrl[4]) == "staffFolderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "registerStaff" || rx.encryption.decode(currentUrl[4]) == "editStaff" || rx.encryption.decode(currentUrl[4]) == "viewFolderStructure" || rx.encryption.decode(currentUrl[4]) == "folderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "scheduleCsvImport" || rx.encryption.decode(currentUrl[4]) == "permissionSet" || rx.encryption.decode(currentUrl[4]) == "folder" || rx.encryption.decode(currentUrl[4]) == "staffDetail") {
        //        $scope.location = "security";
        //        if (rx.encryption.decode(currentUrl[4]) == "staffFolderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "registerStaff" || rx.encryption.decode(currentUrl[4]) == "editStaff" || rx.encryption.decode(currentUrl[4]) == "staffDetail")
        //            $scope.sublocation = "staff";
        //        else if (rx.encryption.decode(currentUrl[4]) == "folderAccessPermission")
        //            $scope.sublocation = "permissionSet";
        //        else if (rx.encryption.decode(currentUrl[4]) == "viewFolderStructure")
        //            $scope.sublocation = "folder";
        //        else
        //            $scope.sublocation = rx.encryption.decode(currentUrl[4]);
        //    }
        //    else if (rx.encryption.decode(currentUrl[4]) == "incidentTypes" || rx.encryption.decode(currentUrl[4]) == "contact" || rx.encryption.decode(currentUrl[4]) == "resources" || rx.encryption.decode(currentUrl[4]) == "teams" || rx.encryption.decode(currentUrl[4]) == "Library" || rx.encryption.decode(currentUrl[4]) == "contactFolderLocation" || rx.encryption.decode(currentUrl[4]) == "addContact" || rx.encryption.decode(currentUrl[4]) == "editContact" || rx.encryption.decode(currentUrl[4]) == "AddDocument" || rx.encryption.decode(currentUrl[4]) == "EditDocument" || rx.encryption.decode(currentUrl[4]) == "resourceFolderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "AddDocument" || rx.encryption.decode(currentUrl[4]) == "EditDocument" || rx.encryption.decode(currentUrl[4]) == "DocumentDetail" || rx.encryption.decode(currentUrl[4]) == "AddDocumentVersion" || rx.encryption.decode(currentUrl[4]) == "LibraryFolderPermission" || rx.encryption.decode(currentUrl[4]) == "resourceFolderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "addResource" || rx.encryption.decode(currentUrl[4]) == "editResource" || rx.encryption.decode(currentUrl[4]) == "teamFolderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "addTeam" || rx.encryption.decode(currentUrl[4]) == "editTeam" || rx.encryption.decode(currentUrl[4]) == "whiteboardConfiguration") {
        //        $scope.location = "configuration";
        //        if (rx.encryption.decode(currentUrl[4]) == "contact" || rx.encryption.decode(currentUrl[4]) == "contactFolderLocation" || rx.encryption.decode(currentUrl[4]) == "addContact" || rx.encryption.decode(currentUrl[4]) == "editContact")
        //            $scope.sublocation = "contacts";
        //        else if (rx.encryption.decode(currentUrl[4]) == "Library" || rx.encryption.decode(currentUrl[4]) == "AddDocument" || rx.encryption.decode(currentUrl[4]) == "EditDocument" || rx.encryption.decode(currentUrl[4]) == "DocumentDetail" || rx.encryption.decode(currentUrl[4]) == "AddDocumentVersion" || rx.encryption.decode(currentUrl[4]) == "LibraryFolderPermission")
        //            $scope.sublocation = "Library";//Library,AddDocument,EditDocument,DocumentDetail,AddDocumentVersion,LibraryFolderPermission
        //        else if (rx.encryption.decode(currentUrl[4]) == "incidentTypes")
        //            $scope.sublocation = "incidentTypes";
        //        else if (rx.encryption.decode(currentUrl[4]) == "resources" || rx.encryption.decode(currentUrl[4]) == "resourceFolderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "addResource" || rx.encryption.decode(currentUrl[4]) == "editResource")
        //            $scope.sublocation = "resources";
        //        else if (rx.encryption.decode(currentUrl[4]) == "teams" || rx.encryption.decode(currentUrl[4]) == "teamFolderAccessPermission" || rx.encryption.decode(currentUrl[4]) == "addTeam" || rx.encryption.decode(currentUrl[4]) == "editTeam")
        //            $scope.sublocation = "teams";
        //        else if (rx.encryption.decode(currentUrl[4]) == "whiteboardConfiguration")
        //            $scope.sublocation = "whiteboardsConfig";
        //        else
        //            $scope.sublocation = rx.encryption.decode(currentUrl[4]);
        //    }
        //    else if (rx.encryption.decode(currentUrl[4]) == "communicationTemplate" || rx.encryption.decode(currentUrl[4]) == "postSmsTemplate" || rx.encryption.decode(currentUrl[4]) == "postEmailTemplate" || rx.encryption.decode(currentUrl[4]) == "putSmsTemplate" || rx.encryption.decode(currentUrl[4]) == "putEmailTemplate") {
        //        $scope.location = "notification";
        //        if (rx.encryption.decode(currentUrl[4]) == "communicationTemplate" || rx.encryption.decode(currentUrl[4]) == "postSmsTemplate" || rx.encryption.decode(currentUrl[4]) == "postEmailTemplate" || rx.encryption.decode(currentUrl[4]) == "putSmsTemplate" || rx.encryption.decode(currentUrl[4]) == "putEmailTemplate")
        //            $scope.sublocation = "communicationTemplate";
        //        else
        //            $scope.sublocation = rx.encryption.decode(currentUrl[4]);
        //    }
        //    else if (rx.encryption.decode(currentUrl[4]) == "actionCard" || rx.encryption.decode(currentUrl[4]) == "editActionCard" || rx.encryption.decode(currentUrl[4]) == "checkList" || rx.encryption.decode(currentUrl[4]) == "editCheckList") {
        //        $scope.location = "design";
        //        if (rx.encryption.decode(currentUrl[4]) == "actionCard" || rx.encryption.decode(currentUrl[4]) == "editActionCard")
        //            $scope.sublocation = "actionCard";
        //        else if (rx.encryption.decode(currentUrl[4]) == "checkList" || rx.encryption.decode(currentUrl[4]) == "editCheckList")
        //            $scope.sublocation = "checkList";
        //        else
        //            $scope.sublocation = rx.encryption.decode(currentUrl[4]);
        //    }
        //    else if (rx.encryption.decode(currentUrl[4]) == "whiteboards" || rx.encryption.decode(currentUrl[4]) == "liveCheckList") {
        //        $scope.location = "whiteboards";
        //        if (rx.encryption.decode(currentUrl[4]) == "whiteboards")
        //            $scope.sublocation = "whiteboards";
        //        else if (rx.encryption.decode(currentUrl[4]) == "liveCheckList")
        //            $scope.sublocation = "liveCheckList";
        //    }
        //    else if (rx.encryption.decode(currentUrl[4]) == "incidentArchive" || rx.encryption.decode(currentUrl[4]) == "checkListArchive" || rx.encryption.decode(currentUrl[4]) == "viewIncidentArchive" || rx.encryption.decode(currentUrl[4]) == "viewCheckListArchive") {
        //        $scope.location = "archive";
        //        if (rx.encryption.decode(currentUrl[4]) == "incidentArchive" || rx.encryption.decode(currentUrl[4]) == "viewIncidentArchive")
        //            $scope.sublocation = "incidentArchive";
        //        else if (rx.encryption.decode(currentUrl[4]) == "checkListArchive" || rx.encryption.decode(currentUrl[4]) == "viewCheckListArchive")
        //            $scope.sublocation = "checkListArchive";
        //    }
        //    else if (rx.encryption.decode(currentUrl[4]) == "metric") {
        //        $scope.location = "metric";
        //        if (rx.encryption.decode(currentUrl[4]) == "metric")
        //            $scope.sublocation = "activeMetric";
        //    }
        //    else if (rx.encryption.decode(currentUrl[4]) == "helpManual") {

        //        $scope.location = "training";
        //        if (rx.encryption.decode(currentUrl[4]) == "helpManual")
        //            $scope.sublocation = "manual";
        //    }
        //    else {
        //        $scope.location = rx.encryption.decode(currentUrl[4]);
        //        $scope.sublocation = undefined;
        //    }
        //    var prevUrl = previous.split("/");
        //    if (rx.encryption.decode(currentUrl[4]) != "printActionCard" && rx.encryption.decode(currentUrl[4]) != "printCheckList" && rx.encryption.decode(currentUrl[4]) != "printCheckListArchive" && rx.encryption.decode(currentUrl[4]) != "printIncidentArchive" && rx.encryption.decode(currentUrl[4]) != "printMetric") {
        //        if (rx.encryption.decode(prevUrl[4]) != "printActionCard") {
        //            $scope.showHeader();
        //        }
        //    }
        //    else { $('#wrapper').removeClass('right-side'); }
        //}
    });


    //$scope.validatePage = function (page, next, event) {
    //    ds.userPermission.postUserPermission.post({ pageId: page.pageId, permissionCode: page.permissionCode }).then(function (jsonResult) {
    //        var userPermissionSet = rx.linq(jsonResult.userPermissionSet).where("t => t.permissionCode == " + page.permissionCode).toList()[0];
    //        if (userPermissionSet != undefined && userPermissionSet[page.operationType]) {
    //            rx.permission = {};
    //            rx.permission.userContext = jsonResult.userPermissionSet;
    //            rx.language.pageProperties = rx.language.toObject(jsonResult.pageProperties, { propertyColumnName: 'contentPropertyName', contentColumnName: 'contentMultilingual' });
    //            rx.language.globalProperties = rx.language.toObject(jsonResult.globalProperties, { propertyColumnName: 'contentPropertyName', contentColumnName: 'contentMultilingual' });
    //            var split = next.split("#/");
    //            $location.url(split[1]);
    //            $scope.$apply();
    //            return;
    //        } else {
    //            window.open("index", "_self");
    //        }
    //    });
    //}

    $scope.headerAfterLogin = { url: 'Templates/Shared/HeaderAfterLogin.html' };
    $scope.sidebar = { url: 'Templates/Shared/Sidebar.html' };
    $scope.footer = { url: 'Templates/Shared/Footer.html' }
    $scope.rightbar = { url: 'Templates/Shared/Rightbar.html' }
    $scope.logout = function () {
        window.open("/", "_self");
    }
}]);
