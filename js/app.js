angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('about',{
                url:'/',
                templateUrl: "../views/about.html",
                controller: 'aboutCtrl'
            })

            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            })

            .state('packages',{
                url:'/packages/:country',
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl'
            })

            .state('contact',{
                url:'/contact',
                templateUrl: "../views/contact.html",
                controller: 'contactCtrl'
            })

            .state('aboutAdventurers',{
                url:'/aboutAdventurers',
                templateUrl: "../views/about-adventurers.html",
                controller: 'aboutAdvCtrl'
            })

            .state('booked',{
                url:'/booked',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })



        $urlRouterProvider
            .otherwise('/');
    });
