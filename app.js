import angular from 'angular'
import ngRoute from 'angular-route'
import ngAnimate from 'angular-animate'
import uiBootstrap from 'angular-ui-bootstrap'

//import style from './Content/bootstrap.scss'
import style from './Content/main.scss'

import ccSearch from './components/search/search.js'
import ccHeader from './components/header/header.js'
import ccRefineSearch from './components/refine-search/refine-search.js'
import ccSearchResults from './components/search-results/search-results.js'
import ccItemDetail from './components/item-detail/item-detail.js'
import ccNotFound from './components/not-found/not-found.js'
import ccModalPickLists from './components/modal/pick-lists/pick-lists.js'
import ccModalCompareItems from './components/modal/compare-items/compare-items.js'
import ccModalZoomImage from './components/modal/zoom-image/zoom-image.js'
import SearchService from './services/SearchService.js'
import ModalService from './services/ModalService.js'


angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap',
    ccSearch.name, ccHeader.name, ccRefineSearch.name, ccSearchResults.name, ccItemDetail.name, ccNotFound.name,
    ccModalPickLists.name, ccModalCompareItems.name, ccModalZoomImage.name,
    SearchService.name, ModalService.name])

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