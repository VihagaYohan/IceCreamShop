"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const utils_1 = require("../helpers/utils");
class ProvideFeedbackCommand {
    constructor(feedback) {
        this.feedback = feedback;
    }
    execute() {
        (0, utils_1.printConsole)(`
        Providing feedback: ${this.feedback}`);
    }
}
exports.default = ProvideFeedbackCommand;
