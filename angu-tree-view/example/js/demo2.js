var app = angular.module("app", ['anguTreeView'])
.controller("DemoCtrl", function ($scope) {

    //Initialize
    $scope.treeNodes = [];
    $scope.Menus = [];
    $scope.RtnMenus = [];

    
    //Initialize treeNodes
       $scope.treeNodes = [{"Id":1,"Title":"System","ParentId":null,"IsSelected":false,"Nodes":[{"Id":101,"Title":"Users","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":102,"Title":"Functions","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":103,"Title":"Permissions","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":104,"Title":"Settings","ParentId":1,"IsSelected":false,"Nodes":[{"Id":10401,"Title":"Param A","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10402,"Title":"Param B","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10403,"Title":"Param C","ParentId":104,"IsSelected":false,"Nodes":[]}]}]},{"Id":2,"Title":"Functions","ParentId":null,"IsSelected":false,"Nodes":[{"Id":201,"Title":"Customer","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":202,"Title":"Company","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":203,"Title":"Factory","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":204,"Title":"Vehicles","ParentId":2,"IsSelected":false,"Nodes":[]}]}];

    //Initialize customized return model
    $scope.Menus = [{"Id":1,"Title":"System","Description":"System settings"},{"Id":2,"Title":"Functions","Description":"Functions overview"},{"Id":101,"Title":"Users","Description":"User information"},{"Id":102,"Title":"Functions","Description":"Functions management"},{"Id":103,"Title":"Permissions","Description":"Permission settings"},{"Id":104,"Title":"Settings","Description":"Other settings"},{"Id":10401,"Title":"Param A","Description":"A"},{"Id":10402,"Title":"Param B","Description":"B"},{"Id":10403,"Title":"Param C","Description":"C"},{"Id":201,"Title":"Customer","Description":"Customer settings"},{"Id":202,"Title":"Company","Description":"Company settings"},{"Id":203,"Title":"Factory","Description":"Factory settings"},{"Id":204,"Title":"Vehicles","Description":"Vehicle classifications"}];

    $scope.showRtnMenus = function () {
        console.log($scope.Menus);
    }

})