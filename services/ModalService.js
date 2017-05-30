
export default angular.module('ModalService', [])
    .service('Modal', ModalService);

function ModalService($uibModal) {
    var self = this;

    self.openPickLists = function () {
        var modal = {
            animation: true,
            component: 'ccModalPickLists',
            windowClass: 'modal-pick-lists',
            size: 'lg'
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };

    self.openCompareItems = function () {
        var modal = {
            animation: true,
            component: 'ccModalCompareItems',
            windowClass: 'modal-compare-items',
            size: 'lg'
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };

    self.openZoomImage = function (image) {
        var modal = {
            animation: true,
            component: 'ccModalZoomImage',
            windowClass: 'modal-zoom-image',
            size: 'fs',
            resolve: {
                fm: {
                    image: image
                }
            }
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };
}