import ccSearchResultsItems from './search-results-items/search-results-items.js';
import ccSearchResultsBar from './search-results-bar/search-results-bar.js';
import ccSearchResultsPagination from './search-results-pagination/search-results-pagination.js';

import template from './search-results.html'

export default angular.module('cc.search-results', [ccSearchResultsItems.name, ccSearchResultsBar.name, ccSearchResultsPagination.name])
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

function SearchResultsController($routeParams, Modal, Search) {
    var self = this;
    self.um = {
        isGridView: !(angular.isDefined($routeParams.vt) && $routeParams.vt.toLowerCase() === 'l'), //Default to grid-view
        queryStr: angular.isDefined($routeParams.q) ? decodeURIComponent($routeParams.q) : null,
        searchResultsModel: {
            page: angular.isDefined($routeParams.p) ? parseInt($routeParams.p, 10) : null,
            pageSize: angular.isDefined($routeParams.ps) ? parseInt($routeParams.ps, 10) : null,
            resultsLength: null,
            totalResultsLength: null,
            totalPagesLength: null,
            searchResults: null,
            pages:[]
        }
    };

    //console.log(self.um.queryStr);
    //console.log(decodeURIComponent(self.um.queryStr));
    //self.queryModel = {};
    Search.buildFormModel(self.um.queryStr).then(function (merge) {
        //console.log(merge);
        self.fm = merge;
    });
    
    self.showResultsFilter = function () {
        Modal.openSearchForm();
    };

    //Search.getFormModel().then(function (fm) {
    //    self.fm = fm;
    //});

    self.searchFn = function (input, page, pageSize) {
        Search.search(input, page, pageSize).then(function (searchResultsModel) {
            angular.merge(self.um.searchResultsModel, searchResultsModel);
        });
    };

    self.searchFn(null, self.um.searchResultsModel.page, self.um.searchResultsModel.pageSize);
}