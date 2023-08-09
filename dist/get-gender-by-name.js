"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://api.genderize.io';
const NAME_REGEX = /^[A-Za-z]+$/;
const getGenderByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    if (!NAME_REGEX.test(name)) {
        throw new Error('Invalid name, only EN letters are allowed');
    }
    const { data: gender } = yield axios_1.default.get(`${API_URL}?name=${name}`);
    if (gender.probability < 0.9) {
        throw new Error(`Probability is less than 90%, value received = ${gender.probability}`);
    }
    return gender;
});
exports.default = getGenderByName;
//# sourceMappingURL=get-gender-by-name.js.map