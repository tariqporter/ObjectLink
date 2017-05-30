import template from './refine-search.html'

export default angular.module('cc.refine-search', [])
    .controller('RefineSearchController', RefineSearchController)
    .directive('ccRefineSearch', RefineSearchDirective);

function RefineSearchDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: template,
        controller: RefineSearchController
    };
}

function RefineSearchController() {
    var self = this;

}