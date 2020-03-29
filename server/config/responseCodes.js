class Response {
    constructor(code,message){
        this.code = code;
        this.message = message;
    }
}

module.exports.unknownError = new Response(500,'Internal Server Error');
module.exports.hashGenError = new Response(500,'Internal Server');
module.exports.userRegisterdSuccess = new Response(201,"User Registed Sucessfully");
module.exports.userAleradyExist = new Response(500,'User Already Exist!');
module.exports.userNotExist = new Response(404,'User Dose Not Exist!');
module.exports.passwordWrong = new Response(401,'Wrong Password!');
module.exports.loginSuccess = new Response(200,'Login Successful!');