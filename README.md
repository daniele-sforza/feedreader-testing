# Feedreader Testing

In this project I was given a web-based application that reads RSS feeds.

I added a series of tests using [Jasmine](http://jasmine.github.io/) testing framework.



## What I learned

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Tests are also used to make sure future feature development doesn't break existing features.

I learned how to use **Jasmine** to write a number of tests against a pre-existing application.

I tested the underlying business logic of the application as well as the event handling and DOM manipulation.

Some of the tests:

- Ensure that some variables and objects are defined and not empty
- Test the menu default visibility status and his state change when clicked
- Check that a feed has at least one entry
- Test that the content actually changes when a new feed is loaded



## Requirements

All the required dependencies are included in the project.

Open `index.html` to run.

Results of the tests are at the end of the page.

Test suites source code is in `jasmine/spec/feedreader.js` 