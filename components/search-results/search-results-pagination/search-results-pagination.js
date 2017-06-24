import template from './search-results-pagination.html'

export default angular.module('cc.search-results-pagination', [])
	.controller('SearchResultsPaginationController', SearchResultsPaginationController)
	.directive('ccSearchResultsPagination', SearchResultsPaginationDirective);

function SearchResultsPaginationDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            searchFn: '&',
            searchResultsModel: '='
		},
		controllerAs: '$ctrl',
		template: template,
		controller: SearchResultsPaginationController
	};
}

function SearchResultsPaginationController(Search) {
    var self = this;
    self.um = {
    };

    self.paginate = function (page) {
        self.searchFn({ input: '', page: page, pageSize: self.searchResultsModel.pageSize });
    };
}