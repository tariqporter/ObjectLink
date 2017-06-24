import template from './search-results-bar.html'

export default angular.module('cc.search-results-bar', [])
	.controller('SearchResultsBarController', SearchResultsBarController)
	.directive('ccSearchResultsBar', SearchResultsBarDirective);

function SearchResultsBarDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            searchResultsModel: '=',
            isGridView: '='
		},
		controllerAs: '$ctrl',
		template: template,
		controller: SearchResultsBarController
	};
}

function SearchResultsBarController($location, Modal, Search) {
    var self = this;
    self.um = {
        allSelected: false
    };

    self.toggleAll = function () {
        for (var i = 0; i < self.searchResultsModel.searchResults.length; ++i) {
            self.searchResultsModel.searchResults[i].selected = !self.um.allSelected;
        }
        self.um.allSelected = !self.um.allSelected;
    };

    self.openPickLists = function () {
        var modalInstance = Modal.openPickLists();
    };

    self.addToPickList = function (searchResults) {

    };

    self.toggleViewType = function () {
        self.isGridView = !self.isGridView;
        $location.search('vt', !self.isGridView ? 'l' : null);
    };

    self.openSelectColumns = function () {
        var modalInstance = Modal.openSelectColumns(self.searchResultsModel);
    };

    self.openSearchForm = function () {
        Search.getFormModel().then(function (fm) {
            var modalInstance = Modal.openSearchForm(fm);
        });
    };

    self.openCompareItems = function () {
        var searchResultsModel = angular.merge({}, self.searchResultsModel);
        searchResultsModel.searchResults = [];

        for (var i = 0; i < self.searchResultsModel.searchResults.length; ++i) {
            if (self.searchResultsModel.searchResults[i].selected) {
                searchResultsModel.searchResults.push(self.searchResultsModel.searchResults[i]);
            }
        }
        var modalInstance = Modal.openCompareItems(searchResultsModel, self.isGridView);
    };
}