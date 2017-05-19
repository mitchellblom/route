# NSS Route Routing Exercise

![Splashpage]()

<hr>

## Summary

Display JSON using **Angular routing, partials, and controllers**. Connection to external database was optional, but I went ahead anyway for good practice.

<hr>

## To Access Necessary Libaries:
 - Pull down project
 - cd into lib
 - Run command "bower install"
 - Run command "npm install"
 - Seed database/seed.json to firebase with read & write permissions
 - Run grunt

<hr>

## Requirements

For this exercise, you're going to create a basic application, with a two views. Each view will provide information about a famous American highway. Each will have a title show the name of the highway, and an element in which the description of the highway will be displayed.

Must include:

1. An Angular application module. Inject `ngRoute` into your applcation.
1. A `config` section for your application where you set up two routes.
    1. Famous highway #1
    2. Famous highway #2
1. Two controllers defined in your application.
1. Two partials - one bound to one of the controllers.
1. Each controller will have two scope variables.
    1. `$scope.highwayName`
    1. `$scope.highwayDescription`
1. You provide the name and description for each highway that you find via research.