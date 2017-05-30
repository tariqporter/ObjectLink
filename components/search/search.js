import template from './search.html'

export default angular.module('cc.search', [])
    .controller('SearchController', SearchController)
    .directive('ccSearch', SearchDirective);

function SearchDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: template,
        controller: SearchController
    };
}

function SearchController() {
    var self = this;
    self.um = {
        refineShow: true
    };

    self.toggleRefineShow = function () {
        self.um.refineShow = !self.um.refineShow;
    };
}
