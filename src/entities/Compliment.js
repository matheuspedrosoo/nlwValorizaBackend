"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Compliment = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Tag_1 = require("./Tag");
var User_1 = require("./User");
var Compliment = /** @class */ (function () {
    function Compliment() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn()
    ], Compliment.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Compliment.prototype, "user_sender");
    __decorate([
        typeorm_1.JoinColumn({ name: 'user_sender' }),
        typeorm_1.ManyToOne(function () { return User_1.User; })
    ], Compliment.prototype, "userSender");
    __decorate([
        typeorm_1.Column()
    ], Compliment.prototype, "user_receiver");
    __decorate([
        typeorm_1.JoinColumn({ name: 'user_receiver' }),
        typeorm_1.ManyToOne(function () { return User_1.User; })
    ], Compliment.prototype, "userReceiver");
    __decorate([
        typeorm_1.Column()
    ], Compliment.prototype, "tag_id");
    __decorate([
        typeorm_1.JoinColumn({ name: 'tag_id' }),
        typeorm_1.ManyToOne(function () { return Tag_1.Tag; })
    ], Compliment.prototype, "tag");
    __decorate([
        typeorm_1.Column()
    ], Compliment.prototype, "message");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Compliment.prototype, "created_at");
    Compliment = __decorate([
        typeorm_1.Entity('compliments')
    ], Compliment);
    return Compliment;
}());
exports.Compliment = Compliment;
