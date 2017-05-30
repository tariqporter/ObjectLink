import template from './zoom-image.html'

export default angular.module('cc.modal-zoom-image', [])
    .controller('ModalZoomImageController', ModalZoomImageController)
    .directive('ccModalZoomImage', ModalZoomImageDirective);

function ModalZoomImageDirective() {
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
        controller: ModalZoomImageController
    }
}

function ModalZoomImageController($timeout) {
    var self = this;

    self.$onInit = function () {
        var fm = self.resolve.fm;
        self.image = fm.image;
    };

    self.cancel = function () {
        self.dismiss({ $value: 'cancel' });
    };
}
