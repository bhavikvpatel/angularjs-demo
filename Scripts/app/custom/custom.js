custom = angular.module("custom", ["ng", "ngCookies", "ngRoute"]);
custom.factory("progress", function () {
    var showProgress = function (t) {
        var i = angular.isUndefined(t) ? "Please wait" + "..." : "Please wait" + " " + t + "...";
        $("#loadDiv").removeClass("spinnerOut").addClass("spinner");
    }, hideProgress = function () {
        $("#loadDiv").removeClass("spinner").addClass("spinnerOut")
    };
    return {
        show: showProgress,
        hide: hideProgress
    }
});
custom.factory("logMessage", function () {
    toastr.options = {
        positionClass: "toast-bottom-left",
        timeOut: "4000",
        showMethod: "slideDown",
        hideMethod: "slideUp"
    };
    var customTimeOut = "10000";
    toastr.options.timeOut = angular.isUndefined(customTimeOut) ? 4e3 : customTimeOut;
    toastr.options.positionClass = "toast-bottom-right";

    successToastr = function (successMessage) {
        toastr.success(successMessage);
    }, errorToastr = function (errorMessage) {
        toastr.error(errorMessage);
    }, warningToastr = function (warningMessage) {
        toastr.warning(warningMessage);
    }, logToastr = function (infoMessage) {
        toastr.info(infoMessage);
    };
    return {
        success: successToastr,
        error: errorToastr,
        warning: warningToastr,
        log: logToastr
    }
});

custom.factory('jsonFilter', ['$filter', function ($filter) {
    var filter = function (key, value, json) {
        var search = {};
        search[key] = value;
        var filterJson = $filter('filter')(json, search);
        var rJson = [];
        for (var i = 0; i < filterJson.length; i++) {
            if (filterJson[i][key] == value) {
                rJson.push(filterJson[i]);
            }
        }
        return rJson;
    },
    advanceFilter = function (jsonArray, jsonObject) {
        var filterJson = $filter('filter')(jsonArray, jsonObject);
        return filterJson
    },
    convertToArrary = function (jsonArrary, key) {
        return _.pluck(jsonArrary, key)
    },
    max = function (jsonArrary, key) {
        return _.max(jsonArrary, function (json) { return json[key]; });
    },
    min = function (jsonArrary, key) {
        return _.min(jsonArrary, function (json) { return json[key]; });
    },
    unique = function (array) {
        return _.uniq(array);
    }
    find = function (jsonArrary, jsonObject) {
        return _.where(jsonArrary, jsonObject);
    },
    del = function (jsonArray, jsonObject) {
        var findArray = find(jsonArray, jsonObject);
        for (var i = 0; i < findArray.length; i++) {
            var i = jsonArray.indexOf(findArray[i]);
            if (i != -1) {
                jsonArray.splice(i, 1);
            }
        }

        return jsonArray;
    },
    removeColumn = function (jsonObject, key) {
        return _.omit(jsonObject, key)
    },
    arrayContains = function (array, value) {
        return _.contains(array, value);
    },
    uniqueNumber = function () {
        return _.uniqueId();
    },
    createJsonObject = function (jsonArray, keyColumn, valueColumn) {
        var jObject = {};
        for (var i = 0; i < jsonArray.length; i++) {
            jObject[jsonArray[i][keyColumn]] = jsonArray[i][valueColumn];
        }
        return jObject;
    },
    createJsonObjectArray = function (keyValues, columnValues, keyColumn, valueColumn, replacer, isInit) {
        var splitIds = keyValues.split(replacer);
        var splitColumns = columnValues.split(replacer);
        var jsonArray = [];
        for (var i = 0; i < splitIds.length; i++) {
            var jsonObject = {};
            jsonObject[keyColumn] = (isInit) ? parseInt(splitIds[i]) : splitIds[i];
            jsonObject[valueColumn] = splitColumns[i];
            jsonArray.push(jsonObject);
        }
        return jsonArray;
    }
    groupBy = function (jsonArray, columnName) {
        return _.groupBy(jsonArray, columnName);
    },
    pascalCase = function (_string) {
        return _string.charAt(0).toUpperCase() + _string.slice(1);
    },
    camelCase = function (_string) {
        return _string.charAt(0).toLowerCase() + _string.slice(1);
    },
    keys = function (_object) {
        return _.keys(_object);
    },
    values = function (_object) {
        return _.values(_object);
    },
    sortBy = function (_arrary, _columnName) {
        return _.sortBy(_arrary, _columnName);
    }

    return {
        filter: filter,
        convertToArrary: convertToArrary,
        max: max,
        min: min,
        find: find,
        unique: unique,
        advanceFilter: advanceFilter,
        del: del,
        createJsonObject: createJsonObject,
        removeColumn: removeColumn,
        arrayContains: arrayContains,
        uniqueNumber: uniqueNumber,
        groupBy: groupBy,
        pascalCase: pascalCase,
        keys: keys,
        values: values,
        camelCase: camelCase,
        createJsonObjectArray: createJsonObjectArray,
        sortBy: sortBy
    }
}]);




////Service Example
//custom.factory('alertNotification', ['$window', function (window) {
//    var alerts = [];
//    return function (message) {
//        alerts.push(message);
//        if (alerts.length >= 3) {
//            window.alert(alerts.join(" "));
//            alerts = [];
//        }
//    };
//}]);