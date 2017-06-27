export default angular.module('SearchService', [])
    .service('Search', SearchService);

function SearchService($http, $timeout, $q, $location, apiPath) {
    var self = this;
    self.fm = {
        defaultModel: null
    };

    self.getDifference = function (fm) {
        var diff = {};
        for (var k in fm) {
            if (angular.isArray(fm[k])) {
                var arr = [];
                for (var i = 0; i < fm[k].length; ++i) {
                    if (fm[k][i].selected) {
                        arr.push(fm[k][i].id);
                    }
                }
                if (arr.length) {
                    diff[k] = arr;
                }
            } else if (angular.isObject(fm[k])) {
                if (k.substr(k.length - "Selected".length) === "Selected" && typeof fm[k].id !== 'undefined') {
                    diff[k] = fm[k].id;
                }
            } else if (fm[k] !== self.fm.defaultModel[k]) {
                diff[k] = fm[k];
            }
        }
        return diff;
    };

    self.buildFormModel = function (fmStr) {
        var deferred = $q.defer();
        self.getFormModel().then(function (x) {
            var fm = JSON.parse('{"' + decodeURI(fmStr).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            var merge = angular.merge({}, self.fm.defaultModel);
            for (var k in fm) {
                if (angular.isArray(merge[k])) {
                    var split = fm[k].split(',').map(x => parseInt(x, 10));
                    for (var i = 0; i < merge[k].length; ++i) {
                        for (var j = 0; j < split.length; ++j) {
                            if (merge[k][i].id === split[j]) {
                                merge[k][i].selected = true;
                            }
                        }
                    }
                } else if (angular.isDefined(merge[k])) {
                    var k2 = k.substr(0, k.length - "Selected".length);
                    var k2End = k.substr(k.length - "Selected".length);
                    if (k2End === "Selected" && angular.isDefined(merge[k2])) {
                        for (var i = 0; i < merge[k2].length; ++i) {
                            if (merge[k2][i].id === parseInt(fm[k], 10)) {
                                merge[k] = merge[k2][i];
                            }
                        }
                    } else {
                        var kv = fm[k].toLowerCase();
                        var v = (kv === 'true') ? true : (kv === 'false') ? false : !isNaN(parseInt(kv, 10)) ? parseInt(kv, 10) : kv;
                        merge[k] = v;
                    }
                } else {
                    var kv = fm[k].toLowerCase();
                    var v = (kv === 'true') ? true : (kv === 'false') ? false : !isNaN(parseInt(kv, 10)) ? parseInt(kv, 10) : kv;
                    merge[k] = v;
                }
            }
            deferred.resolve(merge);
        });
        return deferred.promise;
    };

    self.getFormModel = function () {
        var deferred = $q.defer();
        deferred.resolve({
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
            valuationType: [
                { id: 0, name: 'Valuation Type 1' },
                { id: 1, name: 'Valuation Type 2' }
            ],
            valuationTypeSelected: null,
            officeOfEntry: [
                { id: 0, name: 'Office of Entry 1' },
                { id: 0, name: 'Office of Entry 2' }
            ],
            officeOfEntrySelected: null,
            auctionHouse: [
                { id: 0, name: "Sotheby's" },
                { id: 1, name: "Christie's" },
            ],
            auctionHouseSelected: null,
        });
        deferred.promise.then(function (fm) { self.fm.defaultModel = angular.merge({}, fm); });
        return deferred.promise;
    };

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

    self.search = function (model, page, pageSize) {
        var defaults = { page: 1, pageSize: 12 };
        var mapping = { page: 'p', pageSize: 'ps' };
        page = (page === null) ? defaults.page : page;
        pageSize = (pageSize === null) ? defaults.pageSize : pageSize;

        var columns = {
            //'Image': 'mainImageUrl',
            //'Title': { title: 'title', active: true },
            'Execution Date': { title: 'executionDate', active: true },
            'Artist': { title: 'artist', active: true },
            'DB': { title: 'dB', active: true },
            'Current Owner': { title: 'currentOwner', active: true },
            'Value': { title: ['valueCurrency', 'value'], active: true },
            'Medium': { title: 'medium', active: true },
            'Edition': { title: 'edition', active: true },
        };

        var searchResults = [{
            id: 0,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img1.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '2000000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: true
        }, {
            id: 1,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img7-slim.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'CAMS',
            currentOwner: 'Mr. Robert White',
            value: '1000000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: true,
            selected: false
        }, {
            id: 2,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img2.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'JDE',
            currentOwner: 'Mr. Robert White',
            value: '1500000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 3,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img3.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 4,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img4.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 5,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img5.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 6,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img6.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 7,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img7.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 8,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img1.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 9,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img2.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 10,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img3.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 11,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img4.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }, {
            id: 12,
            title: 'Girl in Mirror',
            mainImageUrl: '/images/objects/plc-img5.png',
            executionDate: '1964',
            artist: 'Lichtenstein, Roy (1923 - 1997)',
            dB: 'COS',
            currentOwner: 'Mr. Robert White',
            value: '900000',
            valueCurrency: '$',
            medium: 'Lorem ipsum',
            edition: '23/46',
            confidential: false,
            selected: false
        }];
        var start = 12;
        for (var i = 0; i < 300; ++i) {
            var curr = start + i;
            var copy = searchResults[i]
            searchResults.push({
                id: curr + 1,
                title: copy.title,
                mainImageUrl: copy.mainImageUrl,
                executionDate: copy.executionDate,
                artist: copy.artist,
                dB: copy.dB,
                currentOwner: copy.currentOwner,
                value: copy.value,
                valueCurrency: copy.valueCurrency,
                medium: copy.medium,
                edition: copy.edition,
                confidential: copy.confidential,
                selected: false
            });
        }
        var subSearchResults = searchResults.slice((page - 1) * pageSize, ((page - 1) * pageSize) + pageSize);

        var searchResultsModel = {
            page: page,
            pageSize: pageSize,
            resultsLength: subSearchResults.length,
            totalResultsLength: searchResults.length,
            totalPagesLength: Math.ceil(searchResults.length / pageSize),
            searchResults: subSearchResults,
            columns: columns
        };

        searchResultsModel.pages = [];
        var j = (searchResultsModel.page < searchResultsModel.totalPagesLength - 2) ? searchResultsModel.page - 2 : searchResultsModel.totalPagesLength - 4;
        while (searchResultsModel.pages.length <= 4 && j <= searchResultsModel.totalPagesLength) {
            if (j >= 1) {
                searchResultsModel.pages.push(j);
            }
            j++;
        }

        for (var key in defaults) {
            $location.search(mapping[key], (defaults[key] === searchResultsModel[key]) ? null : searchResultsModel[key]);
        }

        var deferred = $q.defer();
        deferred.resolve(searchResultsModel);
        return deferred.promise;

        //var promise = $http.get(apiPath + '/search?page=' + page + '&pageSize=' + pageSize).then(function (x) {
        //    var data = x.data;
        //    return data;
        //}, function (x) {
        //    console.log(x);
        //});
        //return promise;
    };
}
