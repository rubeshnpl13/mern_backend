module.exports = (schema) => {
    return function(req, res, next){
        const { error, value } = schema.validate(req.body, {abortEarly:false});
        if (error) {
            return res.status(400).send(error);
        }
        console.log(value);
        next()
    }
}