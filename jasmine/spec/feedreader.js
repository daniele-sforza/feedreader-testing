"use strict";
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All the tests are placed within the $() function,
 * since some of these tests may require DOM elements,
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This test suite is about the RSS
   * feeds definitions.
   */
  describe('RSS Feeds', function() {
    /* This test make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* This test loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('have URLs', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('have names', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });
  });


  /* This test suite is about the menu functionality */
  describe('The menu', function() {

    /* This test ensures the menu element is
     * hidden by default, checking the 'menu-hidden' class in the <body>.
     */
    it('is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* This test ensures the menu changes
     * visibility when the menu icon is clicked.
     * The first click shows the menu, the second hides it.
     */
    it('changes visibility when clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).not.toBe(true);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });


  /* This test suite is about initial entries in the feed container */
  describe('Initial Entries', function() {

    /* This test ensures that when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('have at least one element', function() {
      expect($('.feed .entry-link').length).not.toBe(0);
    });
  });


  /* This test suite is about new feed selection" */
  describe('New Feed Selection', function() {

    /* This test ensures that when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    let feedTitle,
        newFeedTitle;

    /* Call loadFeed. When finished save the feed title and make a second call
     * to loadfeed and save the new feed title.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        feedTitle = $('.header-title').html();
        loadFeed(1, function() {
          newFeedTitle = $('.header-title').html();
          done();
        });
      });
    });

    /* Ensures the feed titles are not equal, so the content changed */
    it('changes content', function() {
      expect(newFeedTitle).not.toBe(feedTitle);
    });
  });
}());
