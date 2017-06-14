import ccAdvancedSearchHeader from './advanced-search-header/advanced-search-header.js';
import ccAdvancedSearchObjDetails from './advanced-search-obj-details/advanced-search-obj-details.js';
import ccAdvancedSearchCatRais from './advanced-search-cat-rais/advanced-search-cat-rais.js';
import ccAdvancedSearchObjActivity from './advanced-search-obj-activity/advanced-search-obj-activity.js';

import ccAdvancedSearchAccordion from './advanced-search-accordion/advanced-search-accordion.js';

import template from './advanced-search.html';

export default angular.module('cc.advanced-search', [ccAdvancedSearchHeader.name, ccAdvancedSearchObjDetails.name, ccAdvancedSearchAccordion.name, ccAdvancedSearchCatRais.name, ccAdvancedSearchObjActivity.name])
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