"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProvideFeedbackCommand {
    constructor(feedback) {
        this.feedback = feedback;
    }
    execute() {
        console.log("providing feedback");
    }
}
exports.default = ProvideFeedbackCommand;
