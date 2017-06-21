import ccSearchResultsItems from './search-results-items/search-results-items.js';

import template from './search-results.html'

export default angular.module('cc.search-results', [ccSearchResultsItems.name])
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

function SearchResultsController($routeParams, Modal) {
    var self = this;
    self.um = {
        query: decodeURIComponent($routeParams.query)
    };

    self.showResultsFilter = function () {
        Modal.openSearchForm();
    };
}