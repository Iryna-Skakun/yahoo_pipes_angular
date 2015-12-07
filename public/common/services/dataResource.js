(function() {
    'use strict';

    angular
        .module("common.services")
        .factory("dataResource", dataResource);

    dataResource.$inject = ['$http'];

    function dataResource($http) {

        var service = {
            getArticles: getArticles
        };

        return service;

        function getArticles() {
            return $http.get('http://real.pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json')
                .then(getArticlesComplete)
                .catch(function() {
                 console.log("Connection Error");
                });

            function getArticlesComplete(data, status, headers, config) {
                return data.data.value
            }
        }
    }
})();
