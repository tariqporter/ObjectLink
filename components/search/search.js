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
        valueFromDate: null,
        clusters: [
            { id: 0, name: '20th and 21st Centuary Culture' },
            { id: 1, name: 'Asian' },
            { id: 2, name: 'Decorative Arts' },
            { id: 3, name: 'Historic' },
            { id: 4, name: 'Impressionist and Modern' },
            { id: 5, name: 'Luxury' },
            { id: 6, name: 'Old Masters 19th Centuary and Russian' },
            { id: 7, name: 'Post-War and Contemporary' },
            { id: 8, name: 'Science and Books' },
            { id: 9, name: 'World Art' }
        ],
        departments: [
            { id: 0, name: 'Asian' },
            { id: 1, name: 'Asian Contemporary Art' },
            { id: 2, name: 'Chinese Paintings' },
            { id: 3, name: 'Chinese Works of Art' },
            { id: 4, name: 'Japanese and Korean Art' }
        ],
        statuses: [
            { id: 0, name: 'Masterpiece' },
            { id: 1, name: 'Stolen' },
            { id: 2, name: 'Fake' },
            { id: 3, name: 'Looted' },
            { id: 4, name: 'Lost' },
            { id: 5, name: 'Condition Issues' },
        ],
        categories: [
            { id: 0, name: 'Painting' },
            { id: 1, name: 'Print' },
            { id: 2, name: 'Sculpture' },
            { id: 3, name: 'Other' },
            { id: 4, name: 'Installation' },
            { id: 5, name: 'Works on Paper' },
            { id: 6, name: 'Photograph' }
        ],
        valuationTypes: [
            { id: 0, name: 'Valuation Type 1' },
            { id: 1, name: 'Valuation Type 2' }
        ],
        valuationTypeSelected: null,
        officeOfEntry: [
            { id: 0, name: 'Office of Entry 1' },
            { id: 0, name: 'Office of Entry 2' }
        ],
        officeOfEntrySelected: null,
        auctionHouses: [
            { id: 0, name: 'Sotheby\'s' },
            { id: 1, name: 'Christie\'s' },
        ],
        auctionHouseSelected: null,
    };
}
