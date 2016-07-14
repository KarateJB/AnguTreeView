var app = angular.module("app", ['anguTreeView'])
.controller("DemoCtrl", function ($scope) {

    //Initialize
    $scope.treeNodes = [];
    $scope.Menus = [];

    
    //Initialize Menus and tree nodes
    $scope.treeNodes = [{"Id":1,"Title":"000系統作業設定","ParentId":null,"IsSelected":false,"Nodes":[{"Id":101,"Title":"010使用者設定","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":102,"Title":"020系統功能設定","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":103,"Title":"030使用權限設定","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":104,"Title":"040片語資料設定","ParentId":1,"IsSelected":false,"Nodes":[{"Id":10401,"Title":"運送種類","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10402,"Title":"作業類別","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10403,"Title":"帳務/調度中心","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10404,"Title":"報價地區","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10405,"Title":"收費車種","ParentId":104,"IsSelected":false,"Nodes":[]},{"Id":10406,"Title":"收費類別","ParentId":104,"IsSelected":false,"Nodes":[]}]}]},{"Id":2,"Title":"100基本資料管理","ParentId":null,"IsSelected":false,"Nodes":[{"Id":201,"Title":"010客戶基本資料","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":202,"Title":"020廠商基本資料","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":203,"Title":"030員工基本資料","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":204,"Title":"040車輛基本資料-母車","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":205,"Title":"050車輛基本資料-子車","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":206,"Title":"060化學品基本資料","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":207,"Title":"070部門資料設定","ParentId":2,"IsSelected":false,"Nodes":[]},{"Id":208,"Title":"080貨棧資料設定(海空)","ParentId":2,"IsSelected":false,"Nodes":[]}]}]; 

    $scope.showRtnMenus = function () {
        console.log($scope.Menus);
    }
})