var app = angular.module("app", ['anguTreeView'])
.controller("DemoCtrl", function ($scope) {

    //Initialize
    $scope.treeNodes = [];
    $scope.Menus = [];

    
    //Initialize Menus and tree nodes
    $scope.treeNodes = $scope.treeNodes = 
    $scope.treeNodes = [{"Id":1,"Title":"System","ParentId":null,"IsSelected":false,"Nodes":[{"Id":101,"Title":"Users","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":102,"Title":"Functions","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":103,"Title":"Permissions","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":104,"Title":"Settings","ParentId":1,"IsSelected":false,"Nodes":[{"Id":10401,"Title":"Param A","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10402,"Title":"Param B","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10403,"Title":"Param C","ParentId":104,"IsSelected":false,"Nodes":[]}]}]},{"Id":2,"Title":"Functions","ParentId":null,"IsSelected":false,"Nodes":[{"Id":201,"Title":"Customer","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":202,"Title":"Company","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":203,"Title":"Factory","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":204,"Title":"Vehicles","ParentId":2,"IsSelected":false,"Nodes":[]}]}];

    $scope.showRtnMenus = function () {
        console.log($scope.Menus);
    }
})