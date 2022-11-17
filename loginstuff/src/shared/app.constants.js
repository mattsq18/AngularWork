"use strict";
exports.__esModule = true;
exports.Constants = void 0;
var GlobalConstants = /** @class */ (function () {
    function GlobalConstants() {
        this.err = "Whoops... Somethings not right";
        this.existErr = "This already exists...";
        this.added = "successfully added.";
        this.userRegex = "[a-zA-Z0-9]*";
        this.emailRegex = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
        this.pwdRegex = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";
        this.phoneRegex = "^[e0-9]{10,10}";
    }
    return GlobalConstants;
}());
exports.GlobalConstants = GlobalConstants;
