webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.header', [])
    .controller('HeaderController', HeaderController)
    .directive('ccHeader', HeaderDirective));

function HeaderDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__header_html___default.a,
        controller: HeaderController
    };
}

function HeaderController() {
    var self = this;

    self.leftMenus = [
        { title: 'Search', subMenus: [] },
        { title: 'Manage Links', subMenus: [] },
        { title: 'James Map', subMenus: [] },
        {
            title: 'Databases',
            subMenus: [
                { title: 'CAMS' },
                { title: 'COS' },
                { title: 'JDE' }
            ]
        },
        { title: 'Help', subMenus: [] }
    ];

    self.modal = function (menu) {
        console.log(menu);
    };

    self.rightMenus = [
        {
            title: 'Manage My Pick Lists',
            subMenus: [
                { title: 'Pick List 1', action: self.alert },
                { title: 'Pick List 2' }
            ]
        },
        {
            title: 'Saved Searches',
            subMenus: [
                { title: 'Search 1' },
                { title: 'Search 2' }
            ]
        },
        {
            title: 'User Preferences',
            subMenus: [
                { title: 'Settings' },
                { title: 'Preferences' }
            ]
        }
    ];
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ 
ItemDetailController.$inject = ["$routeParams", "Search", "Modal"];var __WEBPACK_IMPORTED_MODULE_0__item_detail_html__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_detail_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__item_detail_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.item-detail', [])
    .controller('ItemDetailController', ItemDetailController)
    .directive('ccItemDetail', ItemDetailDirective));

function ItemDetailDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__item_detail_html___default.a,
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


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compare_items_html__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compare_items_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__compare_items_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.modal-compare-items', [])
    .controller('ModalPickListsController', ModalPickListsController)
    .directive('ccModalCompareItems', ModalPickListsDirective));

function ModalPickListsDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__compare_items_html___default.a,
        controller: ModalPickListsController
    }
}

function ModalPickListsController() {
    var self = this;

    self.cancel = function () {
        self.dismiss({ $value: 'cancel' });
    };
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pick_lists_html__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pick_lists_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pick_lists_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.modal-pick-lists', [])
    .controller('ModalPickListsController', ModalPickListsController)
    .directive('ccModalPickLists', ModalPickListsDirective));

function ModalPickListsDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__pick_lists_html___default.a,
        controller: ModalPickListsController
    }
}

function ModalPickListsController() {
    var self = this;

    self.cancel = function () {
        self.dismiss({ $value: 'cancel' });
    };
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ 
ModalZoomImageController.$inject = ["$timeout"];var __WEBPACK_IMPORTED_MODULE_0__zoom_image_html__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zoom_image_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__zoom_image_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.modal-zoom-image', [])
    .controller('ModalZoomImageController', ModalZoomImageController)
    .directive('ccModalZoomImage', ModalZoomImageDirective));

function ModalZoomImageDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__zoom_image_html___default.a,
        controller: ModalZoomImageController
    }
}

function ModalZoomImageController($timeout) {
    var self = this;

    self.$onInit = function () {
        var fm = self.resolve.fm;
        self.image = fm.image;
    };

    self.cancel = function () {
        self.dismiss({ $value: 'cancel' });
    };
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__not_found_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__not_found_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__not_found_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.not-found', [])
    .controller('NotFoundController', NotFoundController)
    .directive('ccNotFound', NotFoundDirective));

function NotFoundDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__not_found_html___default.a,
        controller: NotFoundController
    };
}

function NotFoundController() {
    var self = this;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__refine_search_html__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__refine_search_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__refine_search_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.refine-search', [])
    .controller('RefineSearchController', RefineSearchController)
    .directive('ccRefineSearch', RefineSearchDirective));

function RefineSearchDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__refine_search_html___default.a,
        controller: RefineSearchController
    };
}

function RefineSearchController() {
    var self = this;

}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ 
SearchResultsController.$inject = ["Search", "Modal"];var __WEBPACK_IMPORTED_MODULE_0__search_results_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_results_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__search_results_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.search-results', [])
    .controller('SearchResultsController', SearchResultsController)
    .directive('ccSearchResults', SearchResultsDirective));

function SearchResultsDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__search_results_html___default.a,
        controller: SearchResultsController
    };
}

function SearchResultsController(Search, Modal) {
    var self = this;
    self.um = {
        allSelected: false,
        itemSelected: [],
        page: 1,
        pageSize: 11,
        searchInput: null,
        pages: []
    };

    self.changePage = function (page) {
        if (page === self.um.page) {
            return;
        }

        self.um.page = (page === null) ? self.um.page : page;
        Search.search(null, self.um.page, self.um.pageSize).then(function (data) {
            self.um.results = data.Items;
            self.um.totalLength = data.TotalLength;
            self.um.totalPageLength = data.TotalPageLength;

            self.um.pages = [];
            var i = (self.um.page < self.um.totalPageLength - 2) ? self.um.page - 2 : self.um.totalPageLength - 4;
            while (self.um.pages.length <= 4 && i <= self.um.totalPageLength) {
                if (i >= 1) {
                    self.um.pages.push(i);
                }
                i++;
            }
        });
    };

    self.changePage(null);

    self.toggleAll = function () {
        for (let i = 0; i < self.um.results.length; ++i) {
            self.um.results[i].Selected = !self.um.allSelected;
        }
        self.um.allSelected = !self.um.allSelected;
    };

    self.clear = function () {
        self.um.searchInput = null;
    };

    self.openPickLists = function () {
        var modalInstance = Modal.openPickLists();
    };

    self.openCompareItems = function () {
        var modalInstance = Modal.openCompareItems();
    };

}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_html__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__search_html__);
﻿

/* harmony default export */ __webpack_exports__["a"] = (angular.module('cc.search', [])
    .controller('SearchController', SearchController)
    .directive('ccSearch', SearchDirective));

function SearchDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controllerAs: '$ctrl',
        template: __WEBPACK_IMPORTED_MODULE_0__search_html___default.a,
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


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
﻿
/* harmony default export */ 
ModalService.$inject = ["$uibModal"];__webpack_exports__["a"] = (angular.module('ModalService', [])
    .service('Modal', ModalService));

function ModalService($uibModal) {
    var self = this;

    self.openPickLists = function () {
        var modal = {
            animation: true,
            component: 'ccModalPickLists',
            windowClass: 'modal-pick-lists',
            size: 'lg'
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };

    self.openCompareItems = function () {
        var modal = {
            animation: true,
            component: 'ccModalCompareItems',
            windowClass: 'modal-compare-items',
            size: 'lg'
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };

    self.openZoomImage = function (image) {
        var modal = {
            animation: true,
            component: 'ccModalZoomImage',
            windowClass: 'modal-zoom-image',
            size: 'fs',
            resolve: {
                fm: {
                    image: image
                }
            }
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
﻿
/* harmony default export */ 
SearchService.$inject = ["$http", "$timeout", "$q", "apiPath"];__webpack_exports__["a"] = (angular.module('SearchService', [])
    .service('Search', SearchService));

function SearchService($http, $timeout, $q, apiPath) {
    var self = this;

    self.getItem = function (id) {
        var promise = $http.get(apiPath + '/search?id=' + id).then(function (x) {
            var data = x.data;
            return {
                item: data
            }
        }, function (x) {
            console.log(x);
        });
        return promise;
    };

    self.search = function (input, page, pageSize) {
        var promise = $http.get(apiPath + '/search?page=' + page + '&pageSize=' + pageSize).then(function (x) {
            var data = x.data;
            return data;
        }, function (x) {
            console.log(x);
        });
        return promise;
    };
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_route__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_animate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_ui_bootstrap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_ui_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_ui_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Content_main_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Content_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Content_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_search_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_refine_search_refine_search_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_results_search_results_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_item_detail_item_detail_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_not_found_not_found_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_modal_pick_lists_pick_lists_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_modal_compare_items_compare_items_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_modal_zoom_image_zoom_image_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_SearchService_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_ModalService_js__ = __webpack_require__(14);
﻿




//import style from './Content/bootstrap.scss'















__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap',
    __WEBPACK_IMPORTED_MODULE_5__components_search_search_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_6__components_header_header_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_7__components_refine_search_refine_search_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_8__components_search_results_search_results_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_9__components_item_detail_item_detail_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_10__components_not_found_not_found_js__["a" /* default */].name,
    __WEBPACK_IMPORTED_MODULE_11__components_modal_pick_lists_pick_lists_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_12__components_modal_compare_items_compare_items_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_13__components_modal_zoom_image_zoom_image_js__["a" /* default */].name,
    __WEBPACK_IMPORTED_MODULE_14__services_SearchService_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_15__services_ModalService_js__["a" /* default */].name])

.constant('appPath', '/Angular')

//.constant('apiPath', 'http://localhost:53187/api')
.constant('apiPath', 'http://ppapp05u:9097/api')

.run(['$rootScope', '$uibModalStack', function ($rootScope, $uibModalStack) {
    $rootScope.$on('$routeChangeSuccess', function (newVal, oldVal) {
        if (oldVal !== newVal) {
            $uibModalStack.dismissAll();
        }
    });
}])

.config(['$routeProvider', '$locationProvider', '$qProvider', function ($routeProvider, $locationProvider, $qProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $qProvider.errorOnUnhandledRejections(false);

    $routeProvider
        .when("/", {
            template: "<cc-search><cc-search>"
        })
        .when("/home", {
            redirectTo: '/'
        })
        .when("/home/index", {
            redirectTo: '/'
        })
        .when("/itemdetail/:id", {
            template: "<cc-item-detail></cc-item-detail>"
        })
        .otherwise({
            template: '<cc-not-found class="cc-not-found"></cc-not-found>'
        });
}]);

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-header page--header\">\r\n        <a href=\"/\" class=\"\"><h3>Object Link</h3></a>\r\n    </div>\r\n\r\n    <div class=\"navbar-collapse collapse\" uib-collapse=\"$ctrl.um.nc\" aria-expanded=\"false\" aria-hidden=\"true\">\r\n        <ul class=\"nav navbar-nav navbar-left\">\r\n            <li ng-repeat=\"menu in $ctrl.leftMenus\" class=\"btn-group btn-dropdown btn--dropdown text-center\">\r\n                <button type=\"button\" class=\"\">\r\n                    <span ng-bind=\"menu.title\"></span>\r\n                    <i ng-if=\"menu.subMenus.length > 0\" class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <ul class=\"dropdown-menu dropdown--menu\" uib-dropdown-menu role=\"menu\">\r\n                    <li ng-repeat=\"subMenu in menu.subMenus\" class=\"\">\r\n                        <button type=\"button\" ng-bind=\"subMenu.title\" class=\"sub--dropdown\"></button>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li ng-repeat=\"menu in $ctrl.rightMenus\" class=\"btn-group btn-dropdown large btn--dropdown text-center\">\r\n                <button type=\"button\" class=\"\">\r\n                    <span ng-bind=\"menu.title\"></span>\r\n                    <i ng-if=\"menu.subMenus.length > 0\" class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n                </button>\r\n                <ul class=\"dropdown-menu dropdown--menu\" uib-dropdown-menu role=\"menu\">\r\n                    <li ng-repeat=\"subMenu in menu.subMenus\" class=\"\">\r\n                        <button type=\"button\" ng-bind=\"subMenu.title\" ng-click=\"subMenu.action(subMenu)\" class=\"sub--dropdown\"></button>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <cc-header class=\"cc-header\"></cc-header>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2\">\r\n            <a class=\"\" href=\"/\">\r\n                <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n                <span>Back to results</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"col-xs-7\">\r\n            <div class=\"search--header\">\r\n                <i class=\"fa fa-search v-center\" style=\"position:absolute;\" aria-hidden=\"true\"></i>\r\n                <input class=\"input\" placeholder=\"{{'Object Keyword Search'}}\" ng-model=\"$ctrl.um.searchInput\" />\r\n                <button type=\"button\" ng-click=\"$ctrl.clear()\" class=\"clear pull-right btn--none\">\r\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n            <ul class=\"list-inline checkbox--group\">\r\n                <li>\r\n                    <label class=\"checkbox--label\">\r\n                        <input type=\"checkbox\" checked />\r\n                        <span class=\"checkbox\">CAMS</span>\r\n                    </label>\r\n                </li>\r\n                <li>\r\n                    <label class=\"checkbox--label\">\r\n                        <input type=\"checkbox\" checked />\r\n                        <span class=\"checkbox\">COS</span>\r\n                    </label>\r\n                </li>\r\n                <li>\r\n                    <label class=\"checkbox--label\">\r\n                        <input type=\"checkbox\" checked />\r\n                        <span class=\"checkbox\">JDE</span>\r\n                    </label>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-10 col-xs-offset-1\">\r\n            <div class=\"col-xs-8\">\r\n                <div class=\"col-xs-12\">\r\n                    <h3 ng-bind=\"$ctrl.item.Title1\"></h3>\r\n                    <h4 ng-bind=\"$ctrl.item.Title2\"></h4>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <h5 ng-bind=\"$ctrl.item.Medium\"></h5>\r\n\r\n                    <h6>Size</h6>\r\n                    <button type=\"button\">cm</button>\r\n                    <button type=\"button\">ins</button>\r\n                    <p ng-bind=\"$ctrl.item.Dimensions\"></p>\r\n\r\n                    <h6>Details / description</h6>\r\n                    <p ng-bind=\"$ctrl.item.Details\"></p>\r\n\r\n                    <h6>Category</h6>\r\n                    <p ng-bind=\"$ctrl.item.Category\"></p>\r\n\r\n                    <h6>Department</h6>\r\n                    <p ng-bind=\"$ctrl.item.Department\"></p>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <h6>Catalogue raisonne key</h6>\r\n                    <p ng-bind=\"$ctrl.item.Raisonne\"></p>\r\n\r\n                    <h6>Edition</h6>\r\n                    <p ng-bind=\"$ctrl.item.Edition\"></p>\r\n\r\n                    <h6>Parts</h6>\r\n                    <p ng-bind=\"$ctrl.item.Parts\"></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"image--container\">\r\n                    <img ng-src=\"{{$ctrl.item.ImageUrl}}\"/>\r\n                    <button type=\"button\" ng-click=\"$ctrl.openZoomImage($ctrl.item.ImageUrl)\" class=\"btn btn-primary btn--primary btn--expand\">\r\n                        <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" ng-click=\"$ctrl.cancel()\"><span>&times;</span></button>\r\n    <p class=\"modal-title\">Compare Items</p>\r\n</div>\r\n<div class=\"modal-body\">\r\n    test\r\n</div>";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" ng-click=\"$ctrl.cancel()\"><span>&times;</span></button>\r\n    <p class=\"modal-title\">Pick Lists</p>\r\n</div>\r\n<div class=\"modal-body\">\r\n    test\r\n</div>";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <img ng-src=\"{{$ctrl.image}}\" alt=\"\" class=\"image--fullscreen\" />\r\n            <button type=\"button\" ng-click=\"$ctrl.cancel()\">\r\n                <span>Close</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\n    .cc-not-found{display:block; width:100%; margin:100px 0; line-height:1.6em; text-align:center;}\r\n    .cc-not-found .hgroup{text-transform:uppercase;}\r\n    .cc-not-found .hgroup h1{margin-bottom:25px; font-size:80px;}\r\n    .cc-not-found .hgroup h1 span{display:inline-block; margin-left:5px; padding:2px; border:1px solid #ccc; overflow:hidden;}\r\n    .cc-not-found .hgroup h1 span strong{display:inline-block; padding:0 20px 20px; border:1px solid #ccc; font-weight:normal;}\r\n    .cc-not-found .hgroup h2{font-size:60px;}\r\n    .cc-not-found .hgroup h2 span{display:block; font-size:30px;}\r\n    .cc-not-found p{margin:25px 0 0 0; padding:0; font-size:16px;}\r\n    .cc-not-found p:first-child{margin-top:0;}\r\n</style>\r\n\r\n<div id=\"container\">\r\n    <section>\r\n        <div class=\"hgroup\">\r\n            <!--<div class=\"page-header page--header\">\r\n                <a href=\"/ItemDetail\" class=\"\"><h3>Object Link</h3></a>\r\n            </div>-->\r\n            <h1><span><strong>4</strong></span><span><strong>0</strong></span><span><strong>4</strong></span></h1>\r\n            <h2>Error ! <span>Page Not Found</span></h2>\r\n        </div>\r\n        <p>The Page You Requested Could Not Be Found</p>\r\n        <p><a href=\"javascript:history.go(-1)\">&laquo; Go Back</a> / <a href=\"/\">Go Home &raquo;</a></p>\r\n    </section>\r\n</div>";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    \r\n    <h4 class=\"section-title text-center\">\r\n        <i class=\"fa fa-sliders\" aria-hidden=\"true\"></i>\r\n        <span>Refine search</span>\r\n    </h4>\r\n\r\n    <div>\r\n        <uib-tabset active=\"active\">\r\n            <uib-tab index=\"0\">\r\n                <uib-tab-heading>\r\n                    <span>Fine Art</span>\r\n                </uib-tab-heading>\r\n                <div class=\"row\">\r\n                    <div class=\"row top-buffer\">\r\n                        <div class=\"col-xs-4 col-xs-offset-2\">\r\n                            <button type=\"button\" class=\"btn btn-default btn--default\">\r\n                                <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\r\n                                <span>Clear</span>\r\n                            </button>\r\n                        </div>\r\n\r\n                        <div class=\"col-xs-4 col-xs-offset-0\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn--primary\">\r\n                                <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                                <span>Apply</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <!--<h6>Object details</h6>\r\n                    <input type=\"text\" placeholder=\"Object ID/Inventory No/Item No\" />\r\n                    <label>\r\n                        <input type=\"checkbox\" />\r\n                        <span>CAMS</span>\r\n                    </label>\r\n                    <label>\r\n                        <input type=\"checkbox\" />\r\n                        <span>COS</span>\r\n                    </label>\r\n                    <label>\r\n                        <input type=\"checkbox\" />\r\n                        <span>JDE</span>\r\n                    </label>\r\n\r\n                    <input type=\"text\" placeholder=\"Artist\" />\r\n                    <input type=\"text\" placeholder=\"Title\" />\r\n\r\n                    <span>Execution date</span>\r\n                    <input type=\"text\" value=\"1940\" />\r\n                    <input type=\"text\" value=\"1997\" />\r\n\r\n                    <span>Value</span>\r\n                    <span>\r\n                        <button type=\"button\">£</button>\r\n                        <button type=\"button\">€</button>\r\n                        <button type=\"button\">$</button>\r\n                    </span>\r\n                    <div>\r\n                        <span>Slider</span>\r\n                        <input type=\"text\" value=\"2,000,000\" />\r\n                    </div>\r\n                    <div>\r\n                        <span>Slider</span>\r\n                        <input type=\"text\" value=\"10,000,000\" />\r\n                    </div>\r\n\r\n                    <input type=\"text\" placeholder=\"From\" />\r\n                    <button type=\"button\">Go</button>\r\n                    <input type=\"text\" placeholder=\"To\" />\r\n                    <button type=\"button\">Go</button>\r\n\r\n                    <span>Category</span>\r\n                    <label>\r\n                        <input type=\"checkbox\" />\r\n                        <span>Painting</span>\r\n                    </label>\r\n                    <label>\r\n                        <input type=\"checkbox\" />\r\n                        <span>Print</span>\r\n                    </label>\r\n                    <label>\r\n                        <input type=\"checkbox\" />\r\n                        <span>Works on Paper</span>\r\n                    </label>\r\n\r\n                    <input type=\"text\" placeholder=\"Medium\" />\r\n                    <input type=\"text\" placeholder=\"Details / description\" />\r\n                    <input type=\"text\" placeholder=\"Edition\" />\r\n                    <input type=\"text\" placeholder=\"Edition of\" />\r\n                    <input type=\"text\" placeholder=\"Medium\" />\r\n                    <input type=\"text\" placeholder=\"No. of parts / Quantity\" />\r\n\r\n                    <span>Department</span>\r\n                    <label>\r\n                        <input type=\"checkbox\" />\r\n                        <span>Post War &amp; Contemporary Art</span>\r\n                    </label>-->\r\n                </div>\r\n            </uib-tab>\r\n            <uib-tab index=\"1\">\r\n                <uib-tab-heading>\r\n                    <span>Watches</span>\r\n                </uib-tab-heading>\r\n            </uib-tab>\r\n        </uib-tabset>\r\n    </div>\r\n</div>";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"search--header\">\r\n            <i class=\"fa fa-search v-center\" style=\"position:absolute;\" aria-hidden=\"true\"></i>\r\n            <input class=\"input\" placeholder=\"{{'Object Keyword Search'}}\" ng-model=\"$ctrl.um.searchInput\" />\r\n            <button type=\"button\" ng-click=\"$ctrl.clear()\" class=\"clear pull-right btn--none\">\r\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row top-buffer\">\r\n    <div class=\"col-xs-12\">\r\n        <ul class=\"list-inline checkbox--group\">\r\n            <li>\r\n                <label class=\"checkbox--label\">\r\n                    <input type=\"checkbox\" checked />\r\n                    <span class=\"checkbox\">CAMS</span>\r\n                </label>\r\n            </li>\r\n            <li>\r\n                <label class=\"checkbox--label\">\r\n                    <input type=\"checkbox\" checked />\r\n                    <span class=\"checkbox\">COS</span>\r\n                </label>\r\n            </li>\r\n            <li>\r\n                <label class=\"checkbox--label\">\r\n                    <input type=\"checkbox\" checked />\r\n                    <span class=\"checkbox\">JDE</span>\r\n                </label>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row top-buffer\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"col-xs-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn--primary btn--fullwidth\" ng-click=\"$ctrl.toggleAll()\">\r\n                <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\r\n                <span ng-bind=\"$ctrl.um.allSelected ? 'Unselect All' : 'Select All'\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n            <button type=\"button\" ng-click=\"$ctrl.openPickLists()\" class=\"btn btn-primary btn--primary btn--fullwidth\">\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                <span>Add to my Pick List</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n            <button type=\"button\" ng-click=\"$ctrl.openCompareItems()\" class=\"btn btn-primary btn--primary btn--fullwidth\">\r\n                <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\r\n                <span>Compare</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn--primary btn--fullwidth\">\r\n                <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n                <span>Export</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row top-buffer\">\r\n    <div class=\"col-xs-12\">\r\n        <!--<div class=\"col-xs-3\">\r\n            <ul class=\"nav navbar-nav navbar--nav\">\r\n                <li class=\"btn-group btn-dropdown btn--dropdown full text-center\">\r\n                    <button type=\"button\" class=\"\">\r\n                        <span class=\"text-left\">Sort results</span>\r\n                        <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu dropdown--menu\" uib-dropdown-menu role=\"menu\">\r\n                        <li class=\"\">\r\n                            <button type=\"button\" class=\"sub--dropdown text-left\">Alphabetically</button>\r\n                        </li>\r\n                        <li class=\"\">\r\n                            <button type=\"button\" class=\"sub--dropdown text-left\">Low to high</button>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>-->\r\n        <!--<div class=\"col-xs-4 col-xs-offset-5\">\r\n            <button type=\"button\">Manage columns</button>\r\n            <button type=\"button\">\r\n                <i class=\"fa fa-th\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button type=\"button\">\r\n                <i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>-->\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row top-buffer\">\r\n    <div class=\"col-xs-1\">\r\n\r\n    </div>\r\n    <div class=\"col-xs-6 col-xs-offset-2 text-center\">\r\n        <div ng-bind=\"$ctrl.um.page + ' of ' + $ctrl.um.totalPageLength + ' page(s)'\"></div>\r\n        <ul class=\"pagination\">\r\n            <li>\r\n                <button type=\"button\" ng-click=\"$ctrl.changePage(1)\" class=\"btn\">\r\n                    <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </li>\r\n            <li>\r\n                <button type=\"button\" ng-click=\"$ctrl.changePage($ctrl.um.page <= 1 ? 1 : $ctrl.um.page - 1)\" class=\"btn\">\r\n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </li>\r\n            <li ng-repeat=\"page in $ctrl.um.pages\">\r\n                <button type=\"button\" class=\"btn\" ng-class=\"{'btn--active': page === $ctrl.um.page}\" ng-bind=\"page\" ng-click=\"$ctrl.changePage(page)\"></button>\r\n            </li>\r\n            <li>\r\n                <button type=\"button\" ng-click=\"$ctrl.changePage($ctrl.um.page >= $ctrl.um.totalPageLength ? $ctrl.um.totalPageLength : $ctrl.um.page + 1)\" class=\"btn\">\r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </li>\r\n            <li>\r\n                <button type=\"button\" ng-click=\"$ctrl.changePage($ctrl.um.totalPageLength)\" class=\"btn\">\r\n                    <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-xs-3\">\r\n        <div>\r\n            <button type=\"button\">Manage columns</button>\r\n            <button type=\"button\">\r\n                <i class=\"fa fa-th\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button type=\"button\">\r\n                <i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row top-buffer\">\r\n    <div class=\"col-xs-5\">\r\n        <div class=\"search-results--header\">\r\n            <span>Image / Summary</span>\r\n            <button type=\"button\" class=\"btn btn--sort\">\r\n                <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"row search-results--result\" ng-repeat=\"result in $ctrl.um.results\">\r\n            <div class=\"col-xs-1\">\r\n                <label class=\"checkbox--label\">\r\n                    <input type=\"checkbox\" ng-model=\"result.Selected\" />\r\n                    <span class=\"checkbox\"></span>\r\n                </label>\r\n                <button type=\"button\">\r\n                    <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-xs-11\">\r\n                <a href=\"\" ng-href=\"ItemDetail/{{result.Id}}\">\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"image--container\">\r\n                            <img alt=\"\" style=\"\" ng-src=\"{{result.ImageUrl}}\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-8\">\r\n                        <strong><i ng-bind=\"result.Title1\"></i></strong>\r\n                        <p ng-bind=\"result.Title2\"></p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-3\">\r\n        <div class=\"search-results--header\">\r\n            <span>Current Owner</span>\r\n            <button type=\"button\" class=\"btn btn--sort\">\r\n                <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"row search-results--result\" ng-repeat=\"result in $ctrl.um.results\">\r\n            <div class=\"col-xs-12\">\r\n                <p ng-bind=\"result.Owner\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-2\">\r\n        <div class=\"search-results--header\">\r\n            <span>Value</span>\r\n            <button type=\"button\" class=\"btn btn--sort\">\r\n                <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"row search-results--result\" ng-repeat=\"result in $ctrl.um.results\">\r\n            <div class=\"col-xs-12\">\r\n                <p ng-bind=\"result.Value\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-2\">\r\n        <div class=\"search-results--header\">\r\n            <span>DB</span>\r\n            <button type=\"button\" class=\"btn btn--sort\">\r\n                <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"row search-results--result\" ng-repeat=\"result in $ctrl.um.results\">\r\n            <div class=\"col-xs-12\">\r\n                <p ng-bind=\"result.Db\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <cc-header class=\"cc-header\"></cc-header>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t  <section class=\"wrapper\">\r\n\t\t  <article class=\"content_container\">\r\n\t\t\t<div class=\"search-window container\">\r\n\t\t\t  <div class=\"row\">\r\n\t\t\t\t<div class=\"search-box section_padd col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t  <a href=\"#\" class=\"sprite find-icon\"></a>\r\n\t\t\t\t  <input id=\"search-txt\" class=\"lrg\" type=\"text\" placeholder=\"Search\" />\r\n\t\t\t\t  <a href=\"#\" class=\"sprite cross-icon\"></a>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"row\">\r\n\t\t\t\t<div class=\"search-from section_padd col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t  <div class=\"chkbox\">\r\n\t\t\t\t\t<input type=\"checkbox\" id=\"camsDB\" checked />\r\n\t\t\t\t\t<label for=\"camsDB\">CAMS</label>\r\n\t\t\t\t\t<span class=\"check\"></span>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"chkbox\">\r\n\t\t\t\t\t<input type=\"checkbox\" id=\"cosDB\" />\r\n\t\t\t\t\t<label for=\"cosDB\">COS</label>\r\n\t\t\t\t\t<span class=\"check\"></span>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"chkbox\">\r\n\t\t\t\t\t<input type=\"checkbox\" id=\"jdeDB\" />\r\n\t\t\t\t\t<label for=\"jdeDB\">JDE</label>\r\n\t\t\t\t\t<span class=\"check\"></span>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"row dark-bg\">\r\n\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t  <ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#advanced-search\">Advanced Search</a></li>\r\n\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#query-builder\">Query Builder</a></li>\r\n\t\t\t\t  </ul>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"tab-content\">\r\n\t\t\t\t<div id=\"advanced-search\" class=\"row tab-pane fade in  active\">\r\n\t\t\t\t  <div class=\"col-*-12\">\r\n\t\t\t\t\t<div class=\"cccbg padding-tb200\">\r\n\t\t\t\t\t  <div class=\"sCategory_blc\">\r\n\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t  <div class=\"sHeadContent\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<h6>&nbsp;</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"CAMS item #/COS object ID/JDE item #\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<h6>Execution dates</h6>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"1900\" />\r\n\t\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"2017\" />\r\n\t\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<h6>Value</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"b4bbg padding-10\">\r\n\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs\">&pound;</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs\">&euro;</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs on\">&dollar;</button>\r\n\r\n\t\t\t\t\t\t\t\t  <div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t  <label class=\"lbltxt\">Minimum</label>\r\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"From\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t  <label class=\"lbltxt\">Maximum</label>\r\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"To\" />\r\n\t\t\t\t\t\t\t\t\t  <button id=\"infoMax\" type=\"button\" class=\"btn btn-round btn-xs info info-right\">i</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t  <div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"From\" />\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t  <div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"To\" />\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs info info-right\">i</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"mt10 whitebg\">\r\n\t\t\t\t\t\t\t  <a href=\"#selCluster\" class=\"sHead dwn-arrow\" data-toggle=\"collapse\">Select Cluster</a>\r\n\t\t\t\t\t\t\t  <div id=\"selCluster\" class=\"section_padd collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_culture\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_culture\">20th and 21st Centuary Culture</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_asian\" checked />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_asian\">Asian</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_decorative_arts\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_decorative_arts\">Decorative Arts</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_historic\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_historic\">Historic</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_Impressionist_and_Modern\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_Impressionist_and_Modern\">Impressionist and Modern</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_luxury\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_luxury\">Luxury</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_old\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_old\">Old Masters 19th Centuary and Russian</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_postwar\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_postwar\">Post-War and Contemporary</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_science\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_science\">Science and Books</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_world_art\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_world_art\">World Art</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"mt10 mb10 whitebg\">\r\n\t\t\t\t\t\t\t  <a href=\"#selDepartment\" class=\"sHead dwn-arrow\" data-toggle=\"collapse\">Select Department</a>\r\n\t\t\t\t\t\t\t  <div id=\"selDepartment\" class=\"section_padd collapse\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_asian\" checked />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_asian\">Asian</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_asian_contemporary\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_asian_contemporary\">Asian Contemporary Art</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_chinese_paintings\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_chinese_paintings\">Chinese Paintings</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_chinese_works\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_chinese_works\">Chinese Works of Art</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_japanese\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_japanese\">Japanese and Korean Art</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sCategory_blc\">\r\n\t\t\t\t\t\t<a href=\"#objectDetails\" class=\"sHead\" data-toggle=\"collapse\">Object Details</a>\r\n\t\t\t\t\t\t<div id=\"objectDetails\" class=\"container collapse\">\r\n\t\t\t\t\t\t  <div class=\"sHeadContent padding-tb2025\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-6 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_fine_arts\" name=\"selector\" checked>\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_fine_arts\">Fine Arts</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-6 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_watches\" name=\"selector\" checked>\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_watches\">Watches</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-6 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_other\" name=\"selector\" checked>\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_other\">Other</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Title\" />\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Medium\" />\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Details / description\" />\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Edition\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Edition of\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"No. of Parts / Quantity\" />\r\n\t\t\t\t\t\t\t\t<h6>Status</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_masterpiece\" checked />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_masterpiece\">Masterpiece</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_stolen\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_stolen\">Stolen</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_fake\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_fake\">Fake</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_looted\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_looted\">Looted</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_lost\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_lost\">Lost</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_condition_issues\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_condition_issues\">Condition issues</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<h6>Dimensions</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">cm</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">inc</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Min. height\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Max. height\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Min. width/diam\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Max. width/diam\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Min. depth\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Max. depth\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Min. area\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Max. area\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_All\" name=\"selector\" checked>\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_All\">All</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_objects\" name=\"selector\">\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_objects\">Objects</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_soft\" name=\"selector\">\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_soft\">Soft Intelligence only</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<h6>Category</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_painting\" checked />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_painting\">Painting</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_print\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_print\">Print</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_sculpture\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_sculpture\">Sculpture</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_other\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_other\">Other</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_installation\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_installation\">Installation</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_works_on_paper\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_works_on_paper\">Works on Paper</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_photograph\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_photograph\">Photograph</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row mt10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"lbltxt\">Show images?</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_Allimages\" name=\"selector\" checked>\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_Allimages\">All images</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_with_images\" name=\"selector\">\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_with_images\">With images</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_no_images\" name=\"selector\">\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_no_images\">No images</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"clearInputs sprite\" title=\"Clear all input in this section\"></a>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sCategory_blc\">\r\n\t\t\t\t\t\t<a href=\"#cos_catalogue\" class=\"sHead\" data-toggle=\"collapse\">COS catalogue raisonne</a>\r\n\t\t\t\t\t\t<div id=\"cos_catalogue\" class=\"container collapse\">\r\n\t\t\t\t\t\t  <div class=\"sHeadContent padding-tb2025\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-3\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Author last name\" />\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-3\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Volume\" />\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-3\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"CR Object #\" />\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-3\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Year\" />\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-3\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Code\" />\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"clearInputs sprite\" title=\"Clear all input in this section\"></a>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sCategory_blc\">\r\n\t\t\t\t\t\t<a href=\"#Object_activity\" class=\"sHead\" data-toggle=\"collapse\">Object activity</a>\r\n\t\t\t\t\t\t<div id=\"Object_activity\" class=\"container collapse\">\r\n\t\t\t\t\t\t  <div class=\"sHeadContent padding-tb2025\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"From\" />\r\n\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"To\" />\r\n\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<h6>Valuation / pricing</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_action_estimate\" name=\"selector\" checked>\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_action_estimate\">Action estimate</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_valuation_amount\" name=\"selector\">\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_valuation_amount\">Valuation amount</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"CAMS valuation ID\" />\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"CAMS item ID\" />\r\n\t\t\t\t\t\t\t\t<h6>Value</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Minimum\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Maximum\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t  <select><option>Valuation type</option></select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Valuer\" />\r\n\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t  <select><option>Office of entry</option></select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"mb20\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs on\">&pound;</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs\">&euro;</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs\">&dollar;</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-round btn-xs info\">i</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<h6>Transactions</h6>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"JDE item number/COS Object ID\" />\r\n\t\t\t\t\t\t\t\t<h6 class=\"mt10\">Auction</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t  <select><option>Auction house</option></select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Sale #\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Lot #\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Location\" />\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Sale title\" />\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Property title\" />\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"COS sale code\" />\r\n\r\n\t\t\t\t\t\t\t\t<h6 class=\"mt10\">Private sale</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Asking price min\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Asking price max\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Dealer\" />\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t  <select><option>Result (e.g. Sold or bid)</option></select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Low estimate\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"High estimate\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Hammer min\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Hammer max\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Price realisd. min\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Price realisd. max\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t  <select><option>Bid type</option></select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Bid amount min\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Bid amout max\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Net to vndr. min\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Net to vndr. max\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"clearInputs sprite\" title=\"Clear all input in this section\"></a>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sCategory_blc\">\r\n\t\t\t\t\t\t<a href=\"#ClientDetails\" class=\"sHead\" data-toggle=\"collapse\">Client details</a>\r\n\t\t\t\t\t\t<div id=\"ClientDetails\" class=\"container collapse\">\r\n\t\t\t\t\t\t  <div class=\"sHeadContent padding-tb2025\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"COS #\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Account #\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Client name\" />\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Client CTL name\" />\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"City\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Postcode\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"State\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Country</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_primary_address\" name=\"selector\" checked>\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_primary_address\">Primary address</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"radiobtn\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" id=\"rbtn_all_address\" name=\"selector\">\r\n\t\t\t\t\t\t\t\t\t  <label for=\"rbtn_all_address\">All address</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t  <select><option>Reporting country</option></select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t  <select><option>Reporting office</option></select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_painting\" checked />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_painting\">Deceased</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_painting\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_painting\">Defunct</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_painting\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_painting\">Archieved</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_last_confirmed\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_last_confirmed\">Last confirmed</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row gutter-10 mt10\">\r\n\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t\t  <select><option>Type</option></select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t\t  <select><option>U</option></select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<label class=\"lbltxt\">COS Ownership confirmation</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Type</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"clearInputs sprite\" title=\"Clear all input in this section\"></a>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sCategory_blc\">\r\n\t\t\t\t\t\t<a href=\"#Provenance\" class=\"sHead\" data-toggle=\"collapse\">Provenance, exhibitions, literature, condition and notes</a>\r\n\t\t\t\t\t\t<div id=\"Provenance\" class=\"container collapse\">\r\n\t\t\t\t\t\t  <div class=\"sHeadContent padding-tb2025\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<h6>&nbsp;</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Provenance\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Coditions\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Literature\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Exhibitors\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<h6>COS note dates</h6>\r\n\t\t\t\t\t\t\t\t<div class=\"row gutter-10\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"From\" />\r\n\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"DateInput\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"To\" />\r\n\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-calendar btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"COS notes\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"clearInputs sprite\" title=\"Clear all input in this section\"></a>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sCategory_blc\">\r\n\t\t\t\t\t\t<a href=\"#Tags\" class=\"sHead\" data-toggle=\"collapse\">Tags</a>\r\n\t\t\t\t\t\t<div id=\"Tags\" class=\"container collapse\">\r\n\t\t\t\t\t\t  <div class=\"sHeadContent padding-tb2025\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"tagsInput\">\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"Tags keyword\" />\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-tag btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">AND</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">OR</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"tagsInput\">\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" placeholder=\"Tags keyword\" />\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-tag btn-xs\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_male\" checked />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_male\">Male</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_female\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_female\">Female</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_animal\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_animal\">Animal</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_other\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_other\">Other</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_self_portrait\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_self_portrait\">Self portrait</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_nude\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_nude\">Nude</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"chkbox\">\r\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" id=\"chk_bw\" />\r\n\t\t\t\t\t\t\t\t\t  <label for=\"chk_bw\">Black and white</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"check\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-round btn-xs info\">i</button>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <a href=\"#\" class=\"clearInputs sprite\" title=\"Clear all input in this section\"></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t  <div class=\"row whitebg-light\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 section_padd2 text-center\">\r\n\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Reset search</button>\r\n\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Begin search</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"query-builder\" class=\"row tab-pane fade in\">\r\n\t\t\t\t  <div class=\"col-*-12\">\r\n\t\t\t\t\t<div class=\"dark-bg padding-tb200\">\r\n\t\t\t\t\t  <div class=\"sQuery_blc\">\r\n\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t  <div class=\"sQuery_blc_inner\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">AND</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">OR</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Artist</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Start with</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Picasso\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add rule</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add group</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-minus\">Delete</button>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sQuery_blc\">\r\n\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t  <div class=\"sQuery_blc_inner\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">AND</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">OR</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Artist</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Start with</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Picasso\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add rule</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add group</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-minus\">Delete</button>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sQuery_blc\">\r\n\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t  <div class=\"sQuery_blc_inner\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">AND</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">OR</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Artist</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Start with</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Picasso\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add rule</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add group</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-minus\">Delete</button>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sQuery_blc\">\r\n\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t  <div class=\"sQuery_blc_inner\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">AND</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">OR</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Artist</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Start with</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Picasso\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add rule</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add group</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-minus\">Delete</button>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sQuery_blc\">\r\n\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t  <div class=\"sQuery_blc_inner\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">AND</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">OR</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Artist</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Start with</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Picasso\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add rule</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add group</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-minus\">Delete</button>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"sQuery_blc\">\r\n\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t  <div class=\"sQuery_blc_inner\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<div class=\"btnAndOr clearfix\">\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs on\">AND</button>\r\n\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-switch btn-xs\">OR</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Artist</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"selectInput\">\r\n\t\t\t\t\t\t\t\t\t  <select><option>Start with</option></select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Picasso\" />\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add rule</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-plus\">Add group</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-minus\">Delete</button>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t  <div class=\"row whitebg-light\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 section_padd2 text-center\">\r\n\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Submit query</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </article>\r\n\t\t</section>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n";

/***/ })
],[16]);
//# sourceMappingURL=app.bundle.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiJ9