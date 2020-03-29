
module.exports.CustomError = class CustomError extends Error{
    constructor(response){
        super(response.message)
        this.code = response.code;
        this.message = response.message
        this.json = response
    }
}