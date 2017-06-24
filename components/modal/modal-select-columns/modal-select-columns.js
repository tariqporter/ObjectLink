import template from './modal-select-columns.html'

export default angular.module('cc.modal-select-columns', [])
	.controller('ModalSelectColumnsController', ModalSelectColumnsController)
	.directive('ccModalSelectColumns', ModalSelectColumnsDirective);

function ModalSelectColumnsDirective() {
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
		controller: ModalSelectColumnsController
	};
}

function ModalSelectColumnsController() {
    var self = this;

    self.$onInit = function () {
        var fm = self.resolve.fm;
        self.searchResultsModel = fm.searchResultsModel;
    };

    self.cancel = function () {
        self.dismiss({ $value: 'cancel' });
    };
}