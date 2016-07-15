# AnguTreeView
A tree view directive for angular.

##Features
* Unlimited tree nodes
* Checkbox supported
* Support ngModel to get the list of nodes

##Demo
[Demo #1](http://karatejb.github.io/demo/angu-treeview/demo1)
[Demo #2](http://karatejb.github.io/demo/angu-treeview/demo2)

## Description of attributes
| Attribute        | Description           | Required  |
| :------------- |:-------------| :-----:|
| treeNodes | Tree nodes in json | Yes |
| ngModel | Full list of nodes and selected status | No |
| isEnableChecked | Set 'true' to enable(display) checkbox for every node | No |
| isInit | Set 'true' to overwrite ngModel when directive initialized  | No |

### Usage
```html
<angu-tree-view tree-nodes="treeNodes" ng-model="myMenus" is-enable-checked="true" is-init="true"></tree-view>
```

### treeNodes example
```html
$scope.treeNodes = [{"Id":1,"Title":"System","ParentId":null,"IsSelected":false,"Nodes":[{"Id":101,"Title":"Users","ParentId":1,"IsSelected":false,"Nodes":[]},{"Id":102,"Title":"Functions","ParentId":1,"IsSelected":false,"Nodes":[]}]}]
```



## License
The AnguTreeView project is covered by the [MIT License](http://opensource.org/licenses/MIT "MIT License").

The MIT License (MIT)

Copyright (c) 2016 KarateJB, and contributors to the AnguTreeView project.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

