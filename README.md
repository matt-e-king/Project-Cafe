Project-Cafe
============

Create Angular Forms Easily... at least that is the goal :)

Project-Cafe is definitely in pre-PRE-alpha. Okay, maybe just pre-alpha. I'm currently refining the main feature set, working out the kinks to make the application as adaptable as possible. 

Here is what Project-Cafe has to offer so far:

  - Fast, dynamic form building
  - Bootstrap 3 column formatting
  - Conditional fields
  - JSON output and JSON import
  - HTML rendered output

Features currently in the works:

  - Fixing bugs!!
  - Styled, automated and accessible validation
  - CSS Overrides
  - More field options
  - More conditional options
  - More intuitive sorting 
  - More intuitive column formatting
  - More intuitive conditional fields
  - Better documentation

How to use
----------

The application is fairly straitforward but here is a quick walkthrough on how to create and implement a form:

  1. Go to http://matt-e-king.github.io/Project-Cafe/#/
  2. Under the fields tab, click on desire fields to build form
  3. Left side is "Editing" and right side is "Published"
  4. Click into the field itself or pencil icon to edit field attributes
  5. ALL "id"s must be unique
  6. Certain features don't update on the right immediately, so click the **Refresh** button
  7. Click on **Form Settings** tab:
      1. **Form Id** is the for id attribute of the main form tag '<form id="form" name="form">' so you can customize this and check for vlaidation on submit like `if($scope.form.$valid) { ... }`
      2. **Field Model** is the namespace for all field values under the Angular $scope `$scope.formModel.<fieldName>`
  8. Click on the **Output** tab 
  9. Copy the JSON for later editing, because you can refresh the page, paste the JSON back in and BAM! Got your form back
  10. Copy the rendered HTML and insert into your website
  11. Remember you must already be loading in AngularJS and have your app and controllers all setup.

**I will eventually post a better step by step tutorial. Please post in the issues if you have any specific questions. I will also eventually post instructions on how to take this form builder and "make-it-your-own" on how to add new custom directive and form fields (groups)**

Thanks!


