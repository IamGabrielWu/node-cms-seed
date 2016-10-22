angular
    .module('red23-site').factory('httpService', ['$q', '$http', function ($q, $http) {

        function query(path) {
            var defer = $q.defer()
            $http.get(path)
                .success(function (data, status, headers, config) {
                    defer.resolve({
                        'data': data,
                        'status': status
                    })
                })
                .error(function (response, status, headers, config) {
                    defer.reject({
                        'response': response,
                        'status': status
                    }); // defer.reject(response) will directly send the error to front page
                })
            return defer.promise
        }


        function queryById(path, id) {
            var defer = $q.defer()
            console.log('query by id => '+path+id)
            $http.get(path + id)
                .success(function (data, status, headers, config) {
                    defer.resolve({
                        'data': data,
                        'status': status
                    })
                })
                .error(function (response, status, headers, config) {
                    defer.reject({
                        'response': response,
                        'status': status
                    });
                })
            return defer.promise
        }

        function update(path, info) {
            var defer = $q.defer()
            $http({
                    method: 'PUT',
                    url: path,
                    data: info
                })
                .success(function (data, status, headers, config) {
                    defer.resolve({
                        'data': data,
                        'status': status
                    });
                })
                .error(function (response, status, headers, config) {
                    defer.reject({
                        'response': response,
                        'status': status
                    });
                })
            return defer.promise
        }

        function save(path, info) {
            var defer = $q.defer()
            $http({
                    method: 'POST',
                    url: path,
                    data: info
                })
                .success(function (data, status, headers, config) {
                    defer.resolve({
                        'data': data,
                        'status': status
                    });
                })
                .error(function (response, status, headers, config) {
                    defer.reject({
                        'response': response,
                        'status': status
                    });
                })
            return defer.promise
        }

        function deleteById(path, id) {
            var defer = $q.defer()
            $http.delete(path + id)
                .success(function (data, status, headers, config) {
                    defer.reject({
                        'response': response,
                        'status': status
                    });
                })
                .error(function (response, status, headers, config) {
                    defer.reject({
                        'response': response,
                        'status': status
                    });
                })
            return defer.promise
        }

        return {
            query: query,
            queryById: queryById,
            update: update,
            save: save,
            deleteById: deleteById
        }
    }])