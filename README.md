# font-icons-list
List of popular font icons ( will be updated one by one )

## simple-line-icons
List of 162 icons (dist/simple-line-icons.json)

#### Usage - Angular
> HTML

```
<div class="form-group">
    <label for="IconSelectionCombobox">Icon</label>
    <select id="IconSelectionCombobox" class="form-control bs-select" ng-model="vm.selectedIcon" ui-jq="selectpicker" ui-options='{ iconBase: " ", tickIcon: "fa fa-check" }' data-live-search="true">
        <option ng-repeat="icon in vm.icons" data-icon="{{icon.icon}}" value="{{icon.icon}}"><i class="{{icon.icon}}"></i>{{icon.icon}}</option>
    </select>
</div>
```

> Factory (extensions/angular/fontIconsList.js)

```
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
```

> Controller

```
(function () {
    'use strict';

    angular
        .module('app')
        .controller('yourcontroller', yourcontroller);

    yourcontroller.$inject = ['$scope', 'fontIconsList'];

    function yourcontroller($scope, fontIconsList) {
        var vm = this;
        vm.icons = [];

        // functions
        function getFontIcons() {
            fontIconsList.getSimpleLineIcons().then(function(icons) {
                vm.categoryIcons = icons.data;
                setTimeout(function () {
                            $('#IconSelectionCombobox').selectpicker('refresh');
                        }, 0);
            });
        }
        activate();

        function activate() {
            getFontIcons();            
    }
})();
```
