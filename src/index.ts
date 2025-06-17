import { LlamaIndexServer } from "@llamaindex/server";
import "dotenv/config";
import { initSettings } from "./app/settings";
import { workflowFactory } from "./app/workflow";

initSettings();

new LlamaIndexServer({
  workflow: workflowFactory,
  uiConfig: {
    starterQuestions: ["Give me a summary of your document."],
    componentsDir: "components",
    devMode: true,
  },
}).start();
