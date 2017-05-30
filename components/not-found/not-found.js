import template from './not-found.html'

export default angular.module('cc.not-found', [])
    .controller('NotFoundController', NotFoundController)
    .directive('ccNotFound', NotFoundDirective)

function NotFoundDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: template,
        controller: NotFoundController
    };
}

function NotFoundController() {
    var self = this;
}
