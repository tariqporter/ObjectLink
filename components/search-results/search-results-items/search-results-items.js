import template from './search-results-items.html'

export default angular.module('cc.search-results-items', [])
    .controller('SearchResultsItemsController', SearchResultsItemsController)
    .directive('ccSearchResultsItems', SearchResultsItemsDirective);

    //directive('myTouchstart', [function () {
    //    return function (scope, element, attr) {

    //        element.on('touchstart', function (event) {
    //            scope.$apply(function () {
    //                scope.$eval(attr.myTouchstart);
    //            });
    //        });
    //    };
    //}]).directive('myTouchend', [function () {
    //    return function (scope, element, attr) {

    //        element.on('touchend', function (event) {
    //            scope.$apply(function () {
    //                scope.$eval(attr.myTouchend);
    //            });
    //        });
    //    };
    //}]);

function SearchResultsItemsDirective($document) {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
            searchResultsModel: '=',
            isGridView: '='
		},
		controllerAs: '$ctrl',
		template: template,
        controller: SearchResultsItemsController,
        link: function (scope, element, attrs) {
            var $el = element[0].getElementsByClassName('search-results-items__listview')[0];

            var getTransform = function (el) {
                if (!window.getComputedStyle) return;
                var style = getComputedStyle(el);
                var transform = style.transform || style.webkitTransform || style.mozTransform;
                var t1 = null;
                var t2 = null;
                var m = transform.match(/^matrix3d\((.+)\)$/);
                if (m) {
                    t1 = m[1].split(', ');
                    t2 = { x: parseFloat(t1[12]), y: parseFloat(t1[13]), z: parseFloat(t1[14]) }
                }
                m = transform.match(/^matrix\((.+)\)$/);
                if (m) {
                    t1 = m[1].split(', ');
                    t2 = { x: parseFloat(t1[4]), y: parseFloat(t1[5]), z: 0 }
                }
                return t2;
            };

            var start = null;
            $el.addEventListener("touchstart", function (e) {
                var touch = e.touches[0];
                var startTransform = getTransform($el);
                start = { x: touch.clientX - startTransform.x, y: touch.clientY - startTransform.y };
                var transform = 'translate(' + startTransform.x + 'px, ' + startTransform.y + 'px)';
                $el.style.transform = transform;
            });

            $el.addEventListener("touchmove", function (e) {
                var touch = e.touches[0];
                var transformX = touch.clientX - start.x;
                var $parent = $el.parentNode;
                transformX = (transformX > 0) ? 0 : (transformX < $parent.clientWidth - $el.clientWidth) ? $parent.clientWidth - $el.clientWidth : transformX;
                var transform = 'translate('
                    + Math.round(transformX) + 'px, '
                    + '0)';
                $el.style.transform = transform;
            });
        }
	};
}

function SearchResultsItemsController() {
    var self = this;

    self.getBoundValue = function (searchResult, value) {
        var computedValue = '';
        if (angular.isArray(value.title)) {
            for (var i = 0; i < value.title.length; ++i) {
                computedValue += searchResult[value.title[i]];
            }
        } else {
            computedValue = searchResult[value.title];
        }
        return computedValue;
    };
}