import template from './compare-items.html'

export default angular.module('cc.modal-compare-items', [])
    .controller('ModalPickListsController', ModalPickListsController)
    .directive('ccModalCompareItems', ModalPickListsDirective);

function ModalPickListsDirective() {
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
        controller: ModalPickListsController
    }
}

function ModalPickListsController() {
    var self = this;

    self.cancel = function () {
        self.dismiss({ $value: 'cancel' });
    };
}
