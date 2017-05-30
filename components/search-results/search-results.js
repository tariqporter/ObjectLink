import template from './search-results.html'

export default angular.module('cc.search-results', [])
    .controller('SearchResultsController', SearchResultsController)
    .directive('ccSearchResults', SearchResultsDirective);

function SearchResultsDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: template,
        controller: SearchResultsController
    };
}

function SearchResultsController(Search, Modal) {
    var self = this;
    self.um = {
        allSelected: false,
        itemSelected: [],
        page: 1,
        pageSize: 11,
        searchInput: null,
        pages: []
    };

    self.changePage = function (page) {
        if (page === self.um.page) {
            return;
        }

        self.um.page = (page === null) ? self.um.page : page;
        Search.search(null, self.um.page, self.um.pageSize).then(function (data) {
            self.um.results = data.Items;
            self.um.totalLength = data.TotalLength;
            self.um.totalPageLength = data.TotalPageLength;

            self.um.pages = [];
            var i = (self.um.page < self.um.totalPageLength - 2) ? self.um.page - 2 : self.um.totalPageLength - 4;
            while (self.um.pages.length <= 4 && i <= self.um.totalPageLength) {
                if (i >= 1) {
                    self.um.pages.push(i);
                }
                i++;
            }
        });
    };

    self.changePage(null);

    self.toggleAll = function () {
        for (let i = 0; i < self.um.results.length; ++i) {
            self.um.results[i].Selected = !self.um.allSelected;
        }
        self.um.allSelected = !self.um.allSelected;
    };

    self.clear = function () {
        self.um.searchInput = null;
    };

    self.openPickLists = function () {
        var modalInstance = Modal.openPickLists();
    };

    self.openCompareItems = function () {
        var modalInstance = Modal.openCompareItems();
    };

}