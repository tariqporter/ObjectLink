import template from './advanced-search-header.html'

export default angular.module('cc.advanced-search-header', [])
	.controller('AdvancedSearchHeaderController', AdvancedSearchHeaderController)
	.directive('ccAdvancedSearchHeader', AdvancedSearchHeaderDirective);

function AdvancedSearchHeaderDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            fm: '='
		},
		controllerAs: '$ctrl',
		template: template,
		controller: AdvancedSearchHeaderController
	};
}

function AdvancedSearchHeaderController() {
    var self = this;
}