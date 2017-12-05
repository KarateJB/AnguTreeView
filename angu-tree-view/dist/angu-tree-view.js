/** 
 * @license AnguTreeView v0.2.3
 * 2016-2017 KareJB https://github.com/KarateJB/AnguTreeView
 * License: MIT
 */
angular.module('anguTreeView', [])
.directive('anguTreeView', function ($http, $q, $compile, $timeout, $filter) {

    var templateHtml =
        '<script type="text/ng-template" id="nodes.html">' +
        '<input type="checkbox" ng-checked="menus[node.Id].IsSelected" ng-show="isEnableChecked" ng-click="SetChecked(node)">' +
        '<button type="button" ng-show="menus[node.Id].IsShowExt" ng-click="ShowSubnodes(node)">' +
        '<i ng-class="plusCss"></i>' +
        '</button>' +
        '<button type="button" ng-show="menus[node.Id].IsShowColp" ng-click="HideSubnodes(node)">' +
        '<i ng-class="minusCss"></i>' +
        '</button>' +
        '<input type="button"  class="btn btn-link" value="{{node.Title}}"  ng-click="SetChecked(node)" />' +
        '<div class="list-group-item treeView" ng-show="menus[node.Id].IsShow"  ng-repeat="node in node.Nodes" ng-include="\'nodes.html\'" >' +
        '</div>' +
        '</script>' +
        '<div class="list-group borderless">' +
        '<div class="list-group-item treeView" ng-repeat="node in treeNodes" ng-include="\'nodes.html\'">' +
        '</div>' +
        '</div>';

    return {
        //restrict: "AE",
        scope: {
            RtnMenus: "=ngModel", //Return Menus for parent scope use
            treeNodes: "=", //Tree Nodes 
            isEnableChecked: "@", //Enable checkbox
            plusCss: "@", //Plus CSS class
            minusCss: "@", //Minus CSS class
            isInit: "@" //Clean and recreate ngModel
        },
        template: templateHtml,
        link: function ($scope, $element, $attrs) {

            //Initialize
            $scope.menus = [];

            if (!$scope.plusCss)
                $scope.plusCss = "plus";
            if (!$scope.minusCss)
                $scope.minusCss = "minus";

            initIsEnableChecked();
            initMenus($scope.treeNodes);

            initNodeStyle();

            /*
             * 是否顯示或隱藏Checkbox
             */
            function initIsEnableChecked() {
                if ($scope.isEnableChecked == "true") {
                    $scope.isEnableChecked = true;
                } else {
                    $scope.isEnableChecked = null;
                }
            }


            /*
             * 初始化$scope.Menus
             */
            function initMenus(nodes) {
                angular.forEach(nodes, function (node) {

                    //是否為第一層
                    var isFirstLvl = false;
                    if (node.ParentId == null) {
                        isFirstLvl = true;
                    }

                    //是否有子層
                    var hasSubnodes = false;
                    if (node.Nodes != null && node.Nodes.length > 0) {
                        hasSubnodes = true;
                    }

                    $scope.menus[node.Id] = {
                        'Id': node.Id,
                        'IsFirstLvl': isFirstLvl,
                        'HasSubnodes': hasSubnodes,
                        'IsSelected': node.IsSelected
                    };

                    if (node.Nodes != null) {
                        initMenus(node.Nodes);
                    }

                })

            }

            /*
             * 功能有子項時，改變其CSS
             */
            function initNodeStyle() {
                angular.forEach($scope.menus, function (menu) {

                    if (menu.HasSubnodes) {
                        menu.IsShowExt = true;
                        menu.IsShowEColp = false;
                        menu.IsShow = false;
                    } else if (menu.IsFirstLvl) { //沒有子層，但為第一層
                        menu.IsShowExt = false;
                        menu.IsShowEColp = false;
                        menu.IsShow = true;
                    } else { //非第一層且無子層
                        menu.IsShowExt = false;
                        menu.IsShowEColp = false;
                        menu.IsShow = false;
                    }

                })
            }



            /*
             * 點選功能時，勾選(或反勾選)Checkbox
             */
            $scope.SetChecked = function (node) {


                //Set the IsSelected in menus
                var isStop = false;
                angular.forEach($scope.menus, function (item) {
                    if (!isStop) {
                        if (item.Id == node.Id) {
                            item.IsSelected = !item.IsSelected;
                            isStop = true;
                        }
                    }
                })

                //Set the IsSelected in RtnMenus
                if ($scope.isInit != "true" || $scope.isInit == null) {
                    angular.forEach($scope.RtnMenus, function (rtnItem) {
                        if (rtnItem.Id == node.Id) {
                            rtnItem.IsSelected = !rtnItem.IsSelected;
                        } else if (!rtnItem.IsSelected) { //Set default IsSelected=false if it had never been set.
                            rtnItem.IsSelected = false;
                        }
                    });
                }


            }

            /*
             * 顯示Sub-nodes
             */
            function show1stSubNodes(nodes, index) {
                angular.forEach(nodes, function (node) {
                    if (index == 1) {
                        $scope.menus[node.Id].IsShow = true;
                    } else {
                        $scope.menus[node.Id].IsShow = false;
                    }

                    if (node.Nodes.length > 0) {
                        show1stSubNodes(node.Nodes, index + 1);
                    }
                })
            }

            $scope.ShowSubnodes = function (parent) {
                var id = parent.Id;
                $scope.menus[id].IsShowExt = false;
                $scope.menus[id].IsShowColp = true;

                show1stSubNodes(parent.Nodes, 1);

            }

            /*
             * 隱藏Sub-nodes
             */
            $scope.HideSubnodes = function (parent) {
                var id = parent.Id;
                $scope.menus[id].IsShowExt = true;
                $scope.menus[id].IsShowColp = false;

                angular.forEach(parent.Nodes, function (subnode) {
                    $scope.menus[subnode.Id].IsShow = false;
                })

            }

            /*
             * Watch Menus : this will be triggered only on this directive first initialized!
             */
            $scope.$watch($scope.menus, function (newValue, oldValue) {


                if ($scope.isInit == true || $scope.isInit == "true") {
                    if ($scope.menus) {
                        $scope.RtnMenus = []; //Clear

                        angular.forEach($scope.menus, function (node) {
                            if (node != null && node.Id != null) {
                                $scope.RtnMenus.push(node);
                            }
                        })
                    }
                }

            })


        },
        controller: function ($scope, $element) {

        }
    }
});