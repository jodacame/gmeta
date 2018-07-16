# GMeta
A ridiculously lightweight metadata extractor for the given url

[![NPM](https://nodei.co/npm/gmeta.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gmeta/)


## Installation
````
npm install gmeta --save
````

## Usage
```` javascript
const gmeta = require('gmeta');

gmeta(url,function(err,data){
    console.log(data);
});
````

## Example

```` javascript
const gmeta = require('gmeta');

gmeta('https://github.com',function(err,data){
    console.log(data);
    /* output =>
    { description: 'GitHub brings together the world’s largest community of developers to discover, share, and build better software. From open source projects to private team repositories, we’re your all-in-one platform for collaborative development.',
    viewport: 'width=device-width',
    'google-site-verification': 'KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU',
    'theme-color': '#1e2327',
    'fb:app_id': '1401488693436528',
    'og:url': 'https://github.com',
    'og:title': 'Build software better, together',
    'og:description': 'GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.',
    'og:image': 'https://assets-cdn.github.com/images/modules/open_graph/github-logo.png',
    title: 'The world’s leading software development platform · GitHub',
    lang: 'en',
    icon: 'https://assets-cdn.github.com/favicon.ico',
    canonical: 'https://github.com/' }
    */
});
````

## API
Are you serious?, Ok ;) , here definition =>

### gmeta(url, function(err, obj) {...});
    
## Data Supported

* title
* description
* keywords
* lang
* canonical
* icon 
* copyright
* language
* robots
* generator
* viewport
* google-site-verification
* msvalidate.01
* twitter:card
* twitter:site
* twitter:creator
* twitter:title
* twitter:description
* twitter:image
* summary
* classification
* author
* designer
* owner
* url
* category
* distribution
* rating
* date
* apple-mobile-web-app-title
* apple-mobile-web-app-capable
* apple-touch-fullscreen
* apple-mobile-web-app-status-bar-style
* format-detection
* msapplication-starturl
* msapplication-window
* msapplication-navbutton-color
* application-name
* msapplication-tooltip
* msapplication-task
* application-name
* msapplication-TileColor
* msapplication-square70x70logo
* msapplication-square150x150logo
* msapplication-wide310x150logo
* msapplication-square310x310logo
* msapplication-notification
* dcterms.creator
* dc.language
* dcterms.title
* dcterms.description
* csrf-param
* csrf-token
* theme-color
* geo.region
* geo.position
* ICBM
* thumbnail
* fb:app_id
* og:url
* og:type
* og:title
* og:description
* og:image
* charset