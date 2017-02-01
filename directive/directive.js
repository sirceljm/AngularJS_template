var app = angular.module('directiveApp', []);

// 1,2
app.directive('simpleDirective', [function(){
	return {
		template: "<div>Simple directive</div>"
	}
}])

// 3,4
app.directive('onlyElementDirective', [function(){
	return {
		restrict: "E",
		template: "<div>Only element directive</div>"
	}
}])

// 5
app.directive('classDirective', [function(){
	return {
		restrict: "C",
		link: function(scope, element, attrs){
			console.log("classDirective");
			console.log(scope, element, attrs);
			element.css("color", "red");
		}
	}
}])

// 6
app.directive('dependencyInjectionDirective', ["$interval", function($interval){
	return {
		restrict: "E",
		template: "<div>Counter: {{counter}}</div>",
		link: function(scope, element, attrs){
			console.log("dependencyInjectionDirective");
			scope.counter = 0;
			$interval(function(){
				scope.counter++;
			}, 1000)
		}
	}
}])

// 7 
app.directive('passAttributeDirective', [function(){
	return {
		restrict: "E",
		template: "<div>Value is: {{value}}</div>",
		scope: {
			value: "@" 
		}
	}
}])

// 8
app.controller('controller1',function($scope){
	$scope.model = {name: "sdfdffds"};
})
app.directive('passModelDirective', [function(){
	return {
		restrict: "E",
		template: "Pass model to directive: <input type='text' ng-model='modelVar.name'></input>",
		scope: {
			modelVar: "=" 
		},
		link: function($scope, $element, $attr, $ctrl){
			console.debug($scope);
		}
	}
}])

// 9
app.controller('controller2',function($scope){
	$scope.name= "Matej";
})
app.directive('createNewScopeDirective', [function(){
	return {
		restrict: "E",
		template: "Scope: true: <input type='text' ng-model='name'></input>",
		scope: true,
		link: function($scope, $element, $attr, $ctrl){
			console.debug($scope);
		}
	}
}])