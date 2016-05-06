(function () {
    'use strict';

    angular
        .module('app')
        .factory('fontIconsList', fontIconsList);

    fontIconsList.$inject = ['$http'];

    function fontIconsList($http) {
        var service = {
            getSimpleLineIcons: getSimpleLineIcons
        };

        return service;

        function getSimpleLineIcons() {
            // don't forget to assign correct path to the data file below
            return $http.get('/content/data/simple-line-icons.json');
        }
    }
})();

// USAGE
//(function () {
//    'use strict';
//
//    angular
//        .module('app')
//        .controller('yourcontroller', yourcontroller);
//
//    yourcontroller.$inject = ['$scope', 'fontIconsList'];
//
//    function yourcontroller($scope, fontIconsList) {
//        var vm = this;
//        vm.icons = [];
//
//        // functions
//        function getFontIcons() {
//            fontIconsList.getSimpleLineIcons().then(function(icons) {
//                vm.categoryIcons = icons.data;
//                setTimeout(function () {
//                    $('#IconSelectionCombobox').selectpicker('refresh');
//                }, 0);
//            });
//        }
//        activate();
//
//        function activate() {
//            getFontIcons();
//        }
//    })();