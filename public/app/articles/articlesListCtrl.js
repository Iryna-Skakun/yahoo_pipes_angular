(function () {
    "use strict";

    angular
        .module("articlesList")
        .controller("articlesListCtrl", articlesListCtrl);

    articlesListCtrl.$inject = ['articles'];

    function articlesListCtrl(articles) {
        var vm = this;
        vm.title = articles.title;
        vm.articles = articles.items;
    }
}());
