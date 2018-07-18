module.exports = [
    {
        pattern: '<{{KEY}}>(.*?)</{{KEY}}>',
        KEYS: ['title']
    },
    {
        pattern: '<{{KEY}}.*?>(.*?)</{{KEY}}>',
        KEYS: ['title']
    },
    {
        pattern:'<meta.*?name="{{KEY}}".*?content="(.*?)".*?>|<meta.*?content="(.*?)".*?name="{{KEY}}".*?>',
        KEYS: [
            'description', 
            'keywords', 
            'copyright', 
            'language', 
            'robots', 
            'generator', 
            'viewport', 
            'google-site-verification', 
            'msvalidate.01', 
            'twitter:card',
            'twitter:site',
            'twitter:creator',
            'twitter:title',
            'twitter:description',
            'twitter:image',
            'summary',
            'classification',
            'author',
            'designer',
            'owner',
            'url',
            'category',
            'distribution',
            'rating',
            'date',
            'apple-mobile-web-app-title',
            'apple-mobile-web-app-capable',
            'apple-touch-fullscreen',
            'apple-mobile-web-app-status-bar-style',
            'format-detection',
            'msapplication-starturl',
            'msapplication-window',
            'msapplication-navbutton-color',
            'application-name',
            'msapplication-tooltip',
            'msapplication-task',
            'application-name',
            'msapplication-TileColor',
            'msapplication-square70x70logo',
            'msapplication-square150x150logo',
            'msapplication-wide310x150logo',
            'msapplication-square310x310logo',
            'msapplication-notification',
            'dcterms.creator',
            'dc.language',
            'dcterms.title',
            'dcterms.description',
            'csrf-param',
            'csrf-token',
            'theme-color',
            'geo.region',
            'geo.position',
            'icbm',
            'thumbnail',
            'google-analytics',
            'hostname'
        ]
    },
    {
        pattern: '<meta.*?property="{{KEY}}".*?content="(.*?)".*?>|<meta.*?content="(.*?)".*?property="{{KEY}}".*?>',
        KEYS:[
            'fb:app_id',
            'og:url',
            'og:type',
            'og:title',
            'og:description',
            'og:image'
        ]
    },
    {
        pattern: '<meta.*?{{KEY}}="(.*?)".*?>',
        KEYS:['charset']
    },
    {
        pattern: '<html.*?{{KEY}}="(.*?)".*?>',
        KEYS:['lang']
    },
    {
        pattern: '<link.*?rel="{{KEY}}".*?href="(.*?)".*?>|<link.*?href="(.*?)".*?rel="{{KEY}}".*?>',
        KEYS:[
            'icon',
            'canonical',
            'manifest',
            'fluid-icon'
        ]
    }
]