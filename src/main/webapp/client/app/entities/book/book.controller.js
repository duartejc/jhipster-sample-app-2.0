'use strict';

angular.module('hipster2App')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/book', {
                templateUrl: 'client/app/entities/book/books.html',
                controller: 'BookController',
                authenticate: true
            })
    })
    .controller('BookController', function ($scope, Book, Author) {
        $scope.books = Book.query();
        $scope.authors = Author.query();

        $scope.create = function () {
            Book.save($scope.book,
                function () {
                    $scope.books = Book.query();
                    $('#saveBookModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.book = Book.get({id: id});
            $('#saveBookModal').modal('show');
        };

        $scope.delete = function (id) {
            Book.delete({id: id},
                function () {
                    $scope.books = Book.query();
                });
        };

        $scope.clear = function () {
            $scope.book = {title: null, price: null, id: null};
        };
    });
