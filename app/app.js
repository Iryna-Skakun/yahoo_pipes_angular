(function () {
    "use strict";
    var app = angular.module("articlesList",
        ["ui.router"]);
    app.config(function ($provide) {
        $provide.decorator("$exceptionHandler",
            ["$delegate",
                function ($delegate) {
                    return function (exception, cause) {
                        exception.message = "Please contact the Help Desk! \n Message: " +
                            exception.message;
                        $delegate(exception, cause);
                        alert(exception.message);
                    };
                }]);
    });
    app.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/articles/articlesListView.html",
                    controller: "articlesListCtrl as vm",
                    resolve: {
                        articles: function ($http) {
                            return $http.get("http://real.pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json");

                        }
                    }
                })
        }]
    );
}());