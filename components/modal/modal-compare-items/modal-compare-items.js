import template from './modal-compare-items.html'

export default angular.module('cc.modal-compare-items', [])
	.controller('ModalCompareItemsController', ModalCompareItemsController)
	.directive('ccModalCompareItems', ModalCompareItemsDirective);

function ModalCompareItemsDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            resolve: '<',
            close: '&',
            dismiss: '&'
		},
		controllerAs: '$ctrl',
		template: template,
		controller: ModalCompareItemsController
	};
}

function ModalCompareItemsController() {
    var self = this;

    self.$onInit = function () {
        var fm = self.resolve.fm;
        self.searchResultsModel = fm.searchResultsModel;
        self.isGridView = fm.isGridView
    };

    self.cancel = function () {
        self.dismiss({ $value: 'cancel' });
    };
}