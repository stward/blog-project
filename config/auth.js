module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FB_ID,
        'clientSecret'  : process.env.FB_SEC,
        'callbackURL'   : 'http://localhost:3001/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : process.env.CUS_KEY,
        'consumerSecret'    : process.env.CUS_SEC,
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
