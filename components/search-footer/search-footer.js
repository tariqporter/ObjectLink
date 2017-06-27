import template from './search-footer.html'

export default angular.module('cc.search-footer', [])
    .controller('SearchFooterController', SearchFooterController)
    .directive('ccSearchFooter', SearchFooterDirective);

function SearchFooterDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            fm: '='
        },
        controllerAs: '$ctrl',
        template: template,
        controller: SearchFooterController
    };
}

function SearchFooterController($location, Search) {
    var self = this;
	
    self.search = function () {
        var diff = Search.getDifference(self.fm);
        $location.path('results').search('q', Object.keys(diff).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(diff[k])}`).join('&'));
        //$location.path('results').search('q', Object.keys(self.fm).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(self.fm[k])}`).join('&'));
    };
}