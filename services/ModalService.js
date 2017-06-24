import ccModalSearchForm from '.././components/modal/modal-search-form/modal-search-form.js';
import ccModalPickLists from '.././components/modal/modal-pick-lists/modal-pick-lists.js';
import ccModalCompareItems from '.././components/modal/modal-compare-items/modal-compare-items.js';
import ccModalSelectColumns from '.././components/modal/modal-select-columns/modal-select-columns.js';

export default angular.module('ModalService', [ccModalSearchForm.name, ccModalPickLists.name, ccModalCompareItems.name, ccModalSelectColumns.name])
    .service('Modal', ModalService);

function ModalService($uibModal) {
    var self = this;

    self.openSearchForm = function (fm) {
        var modal = {
            animation: true,
            component: 'ccModalSearchForm',
            windowClass: 'modal-search-form',
            size: 'lg',
            resolve: {
                fm: {
                    fm: fm
                }
            }
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };

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

    self.openSelectColumns = function (searchResultsModel) {
        var modal = {
            animation: true,
            component: 'ccModalSelectColumns',
            windowClass: 'modal-select-columns',
            size: 'lg',
            resolve: {
                fm: {
                    searchResultsModel: searchResultsModel
                }
            }
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };

    self.openCompareItems = function (searchResultsModel, isGridView) {
        var modal = {
            animation: true,
            component: 'ccModalCompareItems',
            windowClass: 'modal-compare-items',
            size: 'lg',
            resolve: {
                fm: {
                    searchResultsModel: searchResultsModel,
                    isGridView: isGridView
                }
            }
        };
        var modalInstance = $uibModal.open(modal);
        return modalInstance;
    };
}