import template from './modal-search-form.html'

export default angular.module('cc.modal-search-form', [])
	.controller('ModalSearchFormController', ModalSearchFormController)
	.directive('ccModalSearchForm', ModalSearchFormDirective);

function ModalSearchFormDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {

		},
		controllerAs: '$ctrl',
		template: template,
		controller: ModalSearchFormController
	};
}

function ModalSearchFormController() {
	var self = this;
}