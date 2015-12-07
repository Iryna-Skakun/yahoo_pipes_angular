(function () {
    "use strict";

    var app = angular.module("articlesList",
                            ["common.services",
                             "ui.router"
                            ]);

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
                        articles: function (dataResource) {
                            return dataResource.getArticles();
                        }
                    }
                })
        }]
    );
}());