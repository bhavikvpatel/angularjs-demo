custom.factory('gridData', ['$rootScope', function ($rootScope) {
    var data = { jsonObject: {}, jsonArray: [], eventJsonArray: [], filteredJsonArray: [], isFiltered: false, headingJsonArray: [], subGridJsonArray: {}, gridChangedData: {}, activeGrid: {} };

    data.setJsonObject = function (_jsonObject, _gridName) {
        if (!angular.isUndefined(data[_gridName])) {
            data[_gridName].row = _jsonObject;
        } else {
            data[_gridName] = {};
            data[_gridName].row = _jsonObject;
        }
    };

    data.setJsonArray = function (_jsonArray, _gridName) {
        if (!angular.isUndefined(data[_gridName])) {
            data[_gridName].source = _jsonArray;
        } else {
            data[_gridName] = {};
            data[_gridName].source = _jsonArray;
        }
    };

    data.setFilteredJsonArray = function (_jsonArray, _gridName) {
        if (!angular.isUndefined(data[_gridName])) {
            data[_gridName].filteredSource = _jsonArray;
        } else {
            data[_gridName] = {};
            data[_gridName].filteredSource = _jsonArray;
        }
    };
    data.setLanguageHeader = function (_JsonArray) {
        for (var _jo in _JsonArray) {
            var _jObject = rxJson.find(data.headingJsonArray, { languageProperty: _jo })[0];
            var _index = data.headingJsonArray.indexOf(_jObject);
            if (_index != -1) {
                data.headingJsonArray[_index]["headerText"] = _JsonArray[_jo];
            }
        }
    }

    data.setCurrentEvent = function (_eventName, _gridName) {
        if (!angular.isUndefined(data[_gridName])) {
            data[_gridName].event = _eventName;
        }
    }

    data.setHeadingJsonArray = function (_headingJsonArray) {
        data.headingJsonArray = _headingJsonArray;
    }

    data.add = function (_jsonObject, _gridName) {
        if (!angular.isUndefined(data[_gridName])) {
            data[_gridName].source.push(_jsonObject);
        }
    }

    data.rowDelete = function (_gridName) {
        if (!angular.isUndefined(data[_gridName])) {
            var i = data[_gridName].source.indexOf(data[_gridName].row);
            if (i != -1) {
                data[_gridName].source.splice(i, 1);
            }
            if (data.filteredJsonArray != 0) {
                i = data[_gridName].filteredSource.indexOf(data.jsonObject);
                if (i != -1) {
                    data[_gridName].filteredSource.splice(i, 1);
                }
            }
        }
    }
    return data;
}]);

custom.directive('dataGrid', ['$compile', 'gridData', '$rootScope', '$window', 'jsonFilter', 'response', 'cacheData', '$filter', function ($compile, gridData, $rootScope, $window, jsonFilter, response, cacheData, $filter) {
    return {
        restrict: 'E',
        scope: {
            gridSource: '=',
            gridOption: '='
        },
        controller: ['$scope', '$element', function ($scope, $element) {

            var primaryKey = '';
            $scope.setGrid = function () {

            }
        }],
        link: function (scope, elm, attrs, gridctrl) {
        },
        replace: true
    }

}]);