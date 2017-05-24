# Angular Focus On
Small AngularJS v1 directive to trigger the focus event on HTML elements after some $scope or $rootScope event.

Click here for a demo.

## How to use
#### Install it...

Bower

    bower install angular-focus-on --save

NPM

    npm install angular-focus-on --save
    
...or download it.
    
#### Include the script

    <script src="assets/vendor/angular-focus-on.min.js"></script>

#### Inject the module

`angular.module("yourApp", ["angularFocusOn"]);`

Use the directive in any HTML element

`<input type="text" name="inputText" angular-focus-on="someScopeEvent" \>`

Optional parameters

select-after-focus

    Limited to `<input type="text">` fields and `<textarea>` boxes.

###Contributing

This is a simple directive I've been using for a while, if you think this solution can be improved, feel free to fork the repo and make your changes.