import ccModalSearchForm from '.././components/modal/modal-search-form/modal-search-form.js';

export default angular.module('ModalService', [ccModalSearchForm.name])
    .service('Modal', ModalService);

function ModalService($uibModal) {
    var self = this;

    self.openSearchForm = function () {
        var modal = {
            animation: true,
            component: 'ccModalSearchForm',
            windowClass: 'modal-search-form',
            size: 'lg'
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };
}