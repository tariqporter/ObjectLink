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

function SearchFooterController($location) {
    var self = this;
	
    self.search = function() {
        $location.path('results').search('query',  Object.keys(self.fm).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(self.fm[k])}`).join('&'));
    };
}