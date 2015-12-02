(function () {
    "use strict";
    angular
        .module("articlesList")
        .controller("articlesListCtrl",
            ["articles",
                articlesListCtrl]);

    function articlesListCtrl(articles) {
        var vm = this;
        vm.title = articles.data.value.title;
        vm.articles = articles.data.value;
    }
}());
