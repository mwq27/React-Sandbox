# Getting ReactJS working with AngularJS
===========

I created this project to try and see what is possible when I try to use ReactJS with an Angular app.  I've tried to answer the questions:
* How can I re-render a component when my $scope changes?
	* It's doable!
* How do I call functions declared inside my controllers from a React component?
	* Use David Chang's awesome ngReact component.  The scope is passed to the component as a property.
* Can I use angular directives on the elements inside the React Component
	* ...nope...
* Can we update the $scope FROM the React component?
	* Since the scope is passed in, we can modify it.  Just remember to call scope.$apply() after modifications.
