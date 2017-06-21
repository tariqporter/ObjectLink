import template from './advanced-search-obj-activity.html'

export default angular.module('cc.advanced-search-obj-activity', [])
	.controller('AdvancedSearchObjActivityController', AdvancedSearchObjActivityController)
	.directive('ccAdvancedSearchObjActivity', AdvancedSearchObjActivityDirective);

function AdvancedSearchObjActivityDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            fm: '='
		},
		controllerAs: '$ctrl',
		template: template,
		controller: AdvancedSearchObjActivityController
	};
}

function AdvancedSearchObjActivityController() {
    var self = this;

    self.$onInit = function () {
        console.log(self.fm)
    };

    self.test = function () {
        console.log(self.fm);
    };
}