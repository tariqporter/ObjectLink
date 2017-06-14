import template from './advanced-search-cat-rais.html'

export default angular.module('cc.advanced-search-cat-rais', [])
	.controller('AdvancedSearchCatRaisController', AdvancedSearchCatRaisController)
	.directive('ccAdvancedSearchCatRais', AdvancedSearchCatRaisDirective);

function AdvancedSearchCatRaisDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {

		},
		controllerAs: '$ctrl',
		template: template,
		controller: AdvancedSearchCatRaisController
	};
}

function AdvancedSearchCatRaisController() {
	var self = this;
}