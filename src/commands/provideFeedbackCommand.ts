import Command from "../interface/command";

export default class ProvideFeedbackCommand implements Command {
  private feedback: string;

  constructor(feedback: string) {
    this.feedback = feedback;
  }

  execute(): void {
    console.log("providing feedback");
  }
}
