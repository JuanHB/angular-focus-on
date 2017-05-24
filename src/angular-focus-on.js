(function () {
    "use strict";

    function AngularFocusOnDirective(){

        function AngularFocusOnLink(scope, elem, attrs){

            scope.$on(attrs.focusOn, function(){
                $timeout(function(){
                    elem[0].focus();
                    if(attr.select) {
                        elem[0].select();
                    }
                    scope.$apply();
                });
            });

        }

        return {
            strict : "A",
            link : AngularFocusOnLink
        };

    }

    angular
        .module('angularFocusOn', [])
        .directive('angularFocusOn', AngularFocusOnDirective)

})();