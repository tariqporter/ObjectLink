import ccAdvancedSearchHeader from './advanced-search-header/advanced-search-header.js';
import ccAdvancedSearchObjDetails from './advanced-search-obj-details/advanced-search-obj-details.js';
import ccAdvancedSearchAccordion from './advanced-search-accordion/advanced-search-accordion.js';

import template from './advanced-search.html';

export default angular.module('cc.advanced-search', [ccAdvancedSearchHeader.name, ccAdvancedSearchObjDetails.name, ccAdvancedSearchAccordion.name])
	.controller('AdvancedSearchController', AdvancedSearchController)
	.directive('ccAdvancedSearch', AdvancedSearchDirective);

function AdvancedSearchDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            fm: '='
		},
		controllerAs: '$ctrl',
		template: template,
		controller: AdvancedSearchController
	};
}

function AdvancedSearchController() {
    var self = this;
    self.um = {

    };
}