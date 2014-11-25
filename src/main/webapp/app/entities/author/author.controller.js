'use strict';

angular.module('hipster2App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('author', {
                parent: 'entity',
                url: '/author',
                data: {
                    roles: ['ROLE_USER']
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/author/authors.html',
                        controller: 'AuthorController',
                    }
                }
            });
    })
    .controller('AuthorController', function ($scope, Author, Book) {
        $scope.authors = Author.query();
        $scope.books = Book.query();

        $scope.create = function () {
            Author.save($scope.author,
                function () {
                    $scope.authors = Author.query();
                    $('#saveAuthorModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.author = Author.get({id: id});
            $('#saveAuthorModal').modal('show');
        };

        $scope.delete = function (id) {
            Author.delete({id: id},
                function () {
                    $scope.authors = Author.query();
                });
        };

        $scope.clear = function () {
            $scope.author = {name: null, birthday: null, id: null};
        };
    });
