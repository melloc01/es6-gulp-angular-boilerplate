angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("src/partials/header.tpl.html","<header>\n	Header \n</header>");
$templateCache.put("src/signin/signin.tpl.html","<pre>{{ ctrl | json}}</pre>\n\n<button ng-click=\"ctrl.add()\">add biscoito</button>");}]);
//# sourceMappingURL=templates.js.map
