const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function jwtSign(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);

    return signature;
}

const ans = jwtSign("navdeep@gmail.com", "15684300")
console.log(ans);


function decodejwt(token){
const decoded = jwt.decode(token);
if(decoded){
    return true;
} else {
    return false;
}
}

function jwtVerify(token) {
    const verifytoken = jwt.verify(token, jwtPassword);
    if(verifytoken) {
        return true;
    } else {
        return false;
        
    }
}