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

function SearchResultsController($routeParams) {
    var self = this;
    self.um = {
        query: decodeURIComponent($routeParams.query)
    };
}