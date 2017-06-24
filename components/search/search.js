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

function SearchController(Search) {
    var self = this;
    self.um = {
        activeTab: 0
    };

    Search.getFormModel().then(function (fm) {
        self.fm = fm;
    });
}
