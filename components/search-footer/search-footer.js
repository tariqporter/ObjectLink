import template from './search-footer.html'

export default angular.module('cc.search-footer', [])
    .controller('SearchFooterController', SearchFooterController)
    .directive('ccSearchFooter', SearchFooterDirective);

function SearchFooterDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            um: '='
        },
        controllerAs: '$ctrl',
        template: template,
        controller: SearchFooterController
    };
}

function SearchFooterController($location) {
    var self = this;
	
    self.search = function() {
        $location.path('results').search('query',  Object.keys(self.um).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(self.um[k])}`).join('&'));
    };
}