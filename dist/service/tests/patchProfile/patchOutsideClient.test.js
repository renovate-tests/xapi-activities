"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var stringToStream = require("string-to-stream");
var assertProfile_1 = require("../../../utils/assertProfile");
var testValues_1 = require("../../../utils/testValues");
var setup_1 = require("../utils/setup");
var patchContent_1 = require("./utils/patchContent");
describe('patchProfile when outside client', function () {
    var service = setup_1.default();
    var patchOutsideProfile = function (client) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.patchProfile({
                        activityId: testValues_1.TEST_ACTIVITY_ID,
                        client: client,
                        content: stringToStream('{"bar":2}'),
                        contentType: testValues_1.JSON_CONTENT_TYPE,
                        profileId: testValues_1.TEST_PROFILE_ID,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    it('should not overwrite existing model when using a different organisation', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, patchContent_1.default(testValues_1.TEST_OBJECT_CONTENT, testValues_1.JSON_CONTENT_TYPE)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, patchOutsideProfile(testValues_1.TEST_CLIENT_OUTSIDE_ORG)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertProfile_1.default(testValues_1.TEST_OBJECT_CONTENT)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not overwrite existing model when using a different store', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, patchContent_1.default(testValues_1.TEST_OBJECT_CONTENT, testValues_1.JSON_CONTENT_TYPE)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, patchOutsideProfile(testValues_1.TEST_CLIENT_OUTSIDE_STORE)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertProfile_1.default(testValues_1.TEST_OBJECT_CONTENT)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=patchOutsideClient.test.js.map