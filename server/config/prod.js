module.exports = {
    db:
    {
        uri: process.env.MONGO_URI,
        secretOrKey: process.env.SECRETOR_KEY
    }
};
//for Heroku branch only, the values of these keys are on Heroku