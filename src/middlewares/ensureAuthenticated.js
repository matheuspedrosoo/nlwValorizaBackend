"use strict";
exports.__esModule = true;
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    // Receber o token
    var authToken = request.headers.authorization;
    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }
    var _a = authToken.split(' '), token = _a[1];
    // Validar se token é válido
    try {
        var sub = jsonwebtoken_1.verify(token, '42a0e91c68a8a59a19a6530d9e15c812').sub;
        // Recuperar informações do usuário
        request.user_id = sub;
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
