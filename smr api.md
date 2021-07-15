**Endpoint**: https://summarizer.co/api@0.1

**Image files' endpoint**: https://summarizer.co/static

**GET** /article
Headers: 
- slug: article's slug, as display the URL bar when visiting summarizer.co, e.g,  *california-will-compensate-survivors-of-its-forced-sterilization-program*


**GET** /category
Get articles from a category, sorted by published date, starting from the latest.
Headers:

- category: category slug, e.g, *world*

List of all categories: ["top-stories", "cryptocurrency", "world", "africa", "americas", "asia", "europe", "middle-east", "u-s", "money", "technology", "science-space", "entertainment", "world-sport"]

- page: use for pagination, starting at 1 (page 1 of that category), max: 30

**GET** /latest
Return array of the latest news in the last 3 days, sorted by published date. The most recent ones come first.

**GET** /editor-picks
Return array of editor-picked articles. 
*Actually they are just random articles*

**GET** /search
Headers:

- query: search phrase
- page: use for pagination, starting at 1 (not 0).




