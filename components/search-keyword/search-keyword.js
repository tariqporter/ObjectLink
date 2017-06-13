import template from './search-keyword.html'

export default angular.module('cc.search-keyword', [])
    .controller('SearchKeywordController', SearchKeywordController)
    .directive('ccSearchKeyword', SearchKeywordDirective);

function SearchKeywordDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            fm: '='
        },
        controllerAs: '$ctrl',
        template: template,
        controller: SearchKeywordController
    };
}

function SearchKeywordController() {
    var self = this;
	
    self.clear = function () {
        self.fm.keywordInput = null;
    };
}