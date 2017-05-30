import template from './item-detail.html'

export default angular.module('cc.item-detail', [])
    .controller('ItemDetailController', ItemDetailController)
    .directive('ccItemDetail', ItemDetailDirective);

function ItemDetailDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: template,
        controller: ItemDetailController
    };
}

function ItemDetailController($routeParams, Search, Modal) {
    var self = this;
    self.id = parseInt($routeParams.id, 10);

    self.um = {
        searchInput: null
    };

    Search.getItem(self.id).then(function (x) {
        self.item = x.item;
    });

    self.clear = function () {
        self.um.searchInput = null;
    };

    self.openZoomImage = function (image) {
        var modalInstance = Modal.openZoomImage(image);
    };
}
