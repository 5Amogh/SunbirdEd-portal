'use strict';

/**
 * @ngdoc function
 * @name playerApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the playerApp
 */
angular.module('playerApp')
        .controller('AppCtrl', function ($scope, $state, $stateParams, $rootScope, resourceBundle, $translate, userService) {
            $rootScope.language = $rootScope.userLanguage || 'ta';
            $rootScope.loadLabelBundle = function () {
                userService.resourceBundle($rootScope.language, 'label').then(function (res) {
                    if (res.responseCode == "OK" && res.result) {
                        if (resourceBundle($rootScope.language, res.result[$rootScope.language])) {
                            $translate.use($rootScope.language);
                        }
                    }
                });
            };
            $rootScope.loadLabelBundle();
            $('body').click(function (e) {
                if ($(e.target).closest('div.dropdown-menu-list').prop('id') == 'search-suggestions') {
                    return false;
                } else {
                    $('body').find('.dropdown-menu-list').removeClass('visible').addClass('hidden');
                }
            });

            // $scope.initilizwDropDown = function() {
            //     $('#dropdown-menu-list')
            //         .dropdown({
            //             action: 'combo'
            //         });
            // };
            // $('.small.modal')
            //     .modal('show')
            // ;
            $scope.$watch(function () {
                return $state.$current.name
            }, function (newState, oldState) {
                console.log(newState);
                if (newState.toLowerCase() == "course" || newState.toLowerCase() == "toc") {
                    $scope.courseId = $stateParams.courseId;
                    $rootScope.sideMenuData = [{
                            "icon": "",
                            "name": "COURSE SCHEDULE",
                            "children": [],
                            "link": "/toc/" + $scope.courseId + "/no"
                        },
                        {
                            "icon": "",
                            "name": "LECTURE VIEW",
                            "children": [],
                            "link": "/toc/" + $scope.courseId + "/yes"
                        },
                        {
                            "icon": "",
                            "name": "NOTES",
                            "children": [],
                            "link": "/note"
                        }
                    ];
                } else
                {
                    $rootScope.sideMenuData = [{
                            "icon": "large add circle icon",
                            "name": "Add Course",
                            "children": [],
                            "link": "#"
                        },
                        {
                            "icon": "large bookmark icon",
                            "name": "My Bookmarks",
                            "children": [],
                            "link": "#"
                        },
                        {
                            "icon": "large search icon",
                            "name": "Explore",
                            "children": [],
                            "link": "#"
                        }
                    ];

                }
            })

        });