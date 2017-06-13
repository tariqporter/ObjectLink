import template from './advanced-search-obj-details.html'

export default angular.module('cc.advanced-search-obj-details', [])
	.controller('AdvancedSearchObjDetailsController', AdvancedSearchObjDetailsController)
	.directive('ccAdvancedSearchObjDetails', AdvancedSearchObjDetailsDirective);

function AdvancedSearchObjDetailsDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            fm: '='
		},
		controllerAs: '$ctrl',
		template: template,
		controller: AdvancedSearchObjDetailsController
	};
}

function AdvancedSearchObjDetailsController() {
	var self = this;
}