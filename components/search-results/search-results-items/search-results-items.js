import template from './search-results-items.html'

export default angular.module('cc.search-results-items', [])
	.controller('SearchResultsItemsController', SearchResultsItemsController)
	.directive('ccSearchResultsItems', SearchResultsItemsDirective);

function SearchResultsItemsDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {

		},
		controllerAs: '$ctrl',
		template: template,
		controller: SearchResultsItemsController
	};
}

function SearchResultsItemsController() {
    var self = this;

    self.items = [{
        id: 0,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img1.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '2000000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 1,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img7-slim.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'CAMS',
        currentOwner: 'Mr. Robert White',
        value: '1000000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: true
    }, {
        id: 2,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img2.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'JDE',
        currentOwner: 'Mr. Robert White',
        value: '1500000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img3.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img4.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img5.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img6.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img7.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img1.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img2.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img3.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img4.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }, {
        id: 3,
        title: 'Girl in Mirror',
        mainImageUrl: '/images/objects/plc-img5.png',
        executionDate: '1964',
        Artist: 'Lichtenstein, Roy (1923 - 1997)',
        dB: 'COS',
        currentOwner: 'Mr. Robert White',
        value: '900000',
        valueCurrency: '$',
        medium: 'Lorem ipsum',
        edition: '23/46',
        confidential: false
    }];
}