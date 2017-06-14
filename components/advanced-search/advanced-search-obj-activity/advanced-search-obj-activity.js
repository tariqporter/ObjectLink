import template from './advanced-search-obj-activity.html'

export default angular.module('cc.advanced-search-obj-activity', [])
	.controller('AdvancedSearchObjActivityController', AdvancedSearchObjActivityController)
	.directive('ccAdvancedSearchObjActivity', AdvancedSearchObjActivityDirective);

function AdvancedSearchObjActivityDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {

		},
		controllerAs: '$ctrl',
		template: template,
		controller: AdvancedSearchObjActivityController
	};
}

function AdvancedSearchObjActivityController() {
	var self = this;
}