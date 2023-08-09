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
const get_gender_by_name_1 = __importDefault(require("./get-gender-by-name"));
const GENDER_JOHN = {
    name: 'john',
    gender: 'male',
    probability: 0.999,
    count: 1,
};
const GENDER_ANN = {
    name: 'ann',
    gender: 'female',
    probability: 0.79,
    count: 1,
};
describe('Get gender by name', () => {
    test('should return gender', () => __awaiter(void 0, void 0, void 0, function* () {
        // mock response from API
        jest.spyOn(axios_1.default, 'get').mockImplementation(() => Promise.resolve({ data: GENDER_JOHN }));
        const genderResponse = yield (0, get_gender_by_name_1.default)(GENDER_JOHN.name);
        // expect that getGenderByName() func returns what API returns
        expect(genderResponse).toEqual(GENDER_JOHN);
    }));
    test('should call API with proper arguments', () => __awaiter(void 0, void 0, void 0, function* () {
        // setup spy on axios.get() to check what args were passed to it
        const axiosGetSpy = jest.spyOn(axios_1.default, 'get').mockImplementation(() => Promise.resolve({ data: GENDER_JOHN }));
        yield (0, get_gender_by_name_1.default)(GENDER_JOHN.name);
        // expect that axios.get() is called with proper args
        expect(axiosGetSpy).toHaveBeenCalledWith(`https://api.genderize.io?name=${GENDER_JOHN.name}`);
    }));
    test('should throw error if name contains numbers', () => __awaiter(void 0, void 0, void 0, function* () {
        const name = 'qwerty1234';
        // expect that getGenderByName() returns rejected promise proper error
        yield expect((0, get_gender_by_name_1.default)(name)).rejects.toThrow(new Error('Invalid name, only EN letters are allowed'));
    }));
    test('should throw error if probability is less than 90%', () => __awaiter(void 0, void 0, void 0, function* () {
        // mock response with probability < 90%
        jest.spyOn(axios_1.default, 'get').mockImplementation(() => Promise.resolve({ data: GENDER_ANN }));
        // expect that getGenderByName() returns rejected promise with proper error
        yield expect((0, get_gender_by_name_1.default)(GENDER_ANN.name)).rejects.toThrow(new Error(`Probability is less than 90%, value received = ${GENDER_ANN.probability}`));
    }));
    afterEach(() => {
        // clear all mocks to make sure that they won't be passed to any tests out of this file
        jest.clearAllMocks();
    });
});
//# sourceMappingURL=get-gender-by-name.test.js.map