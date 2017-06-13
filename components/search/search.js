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

function SearchController() {
    var self = this;
    self.um = {
        activeTab: 0
    };

    self.fm = {
        keywordInput: null,
        camsSelected: true,
        cosSelected: true,
        jdeSelected: true,
        currencyId: 0,
        clusters: [
            { clusterId: 0, clusterName: '20th and 21st Centuary Culture' },
            { clusterId: 1, clusterName: 'Asian' },
            { clusterId: 2, clusterName: 'Decorative Arts' },
            { clusterId: 3, clusterName: 'Historic' },
            { clusterId: 4, clusterName: 'Impressionist and Modern' },
            { clusterId: 5, clusterName: 'Luxury' },
            { clusterId: 6, clusterName: 'Old Masters 19th Centuary and Russian' },
            { clusterId: 7, clusterName: 'Post-War and Contemporary' },
            { clusterId: 8, clusterName: 'Science and Books' },
            { clusterId: 9, clusterName: 'World Art' }
        ],
        departments: [
            { departmentId: 0, departmentName: 'Asian' },
            { departmentId: 1, departmentName: 'Asian Contemporary Art' },
            { departmentId: 2, departmentName: 'Chinese Paintings' },
            { departmentId: 3, departmentName: 'Chinese Works of Art' },
            { departmentId: 4, departmentName: 'Japanese and Korean Art' }
        ],
        statuses: [
            { statusId: 0, statusName: 'Masterpiece' },
            { statusId: 1, statusName: 'Stolen' },
            { statusId: 2, statusName: 'Fake' },
            { statusId: 3, statusName: 'Looted' },
            { statusId: 4, statusName: 'Lost' },
            { statusId: 5, statusName: 'Condition Issues' },
        ],
        categories: [
            { categoryId: 0, categoryName: 'Painting' },
            { categoryId: 1, categoryName: 'Print' },
            { categoryId: 2, categoryName: 'Sculpture' },
            { categoryId: 3, categoryName: 'Other' },
            { categoryId: 4, categoryName: 'Installation' },
            { categoryId: 5, categoryName: 'Works on Paper' },
            { categoryId: 6, categoryName: 'Photograph' }
        ]
    };
}
