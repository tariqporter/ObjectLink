import template from './advanced-search-accordion.html'

export default angular.module('cc.advanced-search-accordion', [])
	.controller('AdvancedSearchAccordionController', AdvancedSearchAccordionController)
	.directive('ccAdvancedSearchAccordion', AdvancedSearchAccordionDirective);

function AdvancedSearchAccordionDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            title: '@'
		},
		controllerAs: '$ctrl',
		template: template,
        controller: AdvancedSearchAccordionController,
        transclude: true
	};
}

function AdvancedSearchAccordionController() {
    var self = this;
    self.um = {
        open: false
    };
}