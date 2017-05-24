# Angular Focus On
Small AngularJS v1 directive to trigger the focus event on HTML elements after some $scope or $rootScope event.

[Click here for a demo.](https://github.com/JuanHB/angular-focus-on)

## Requirements
- AngularJS v1.x

## How to use
#### Install it...

Bower

    bower install angular-focus-on --save

NPM

    npm install angular-focus-on --save
    
...or [download](https://github.com/JuanHB/angular-focus-on/archive/master.zip) it.
    
#### Include the script

    <script src="assets/vendor/angular-focus-on.min.js"></script>

#### Inject the module

    angular.module("yourApp", ["angularFocusOn"]);

#### Use the directive in any HTML element

`<input type="text" name="inputText" angular-focus-on="someScopeEvent">`

`<textarea name="textareaBox" angular-focus-on="someScopeEvent"></textarea>`

#### Optional parameters

> select-after-focus

Limited to `<input type="text">` fields and `<textarea>` boxes.
When the field is focused, select its contents 

Usage: 

`<input type="text" angular-focus-on="someScopeEvent" select-after-focus="">`

> no-timeout

By default, the directive will wait the event loop to focus on the element, you can disable that by adding the `no-timeout` attribute.

Usage:

`<input type="text" angular-focus-on="someScopeEvent" no-timeout="">`

### Contributing

This is a simple directive I've been using for a while, if you think this solution can be improved, feel free to fork the repo and make your changes.