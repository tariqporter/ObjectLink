import template from './pick-lists.html'

export default angular.module('cc.modal-pick-lists', [])
    .controller('ModalPickListsController', ModalPickListsController)
    .directive('ccModalPickLists', ModalPickListsDirective);

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
