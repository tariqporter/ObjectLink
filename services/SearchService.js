
export default angular.module('SearchService', [])
    .service('Search', SearchService);

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
