import { openai } from "@llamaindex/openai";
import { agent } from "@llamaindex/workflow";
import { tool } from "llamaindex";
import { z } from "zod";

const sumNumbers = tool({
  name: "sumNumbers",
  description: "Use this function to sum two numbers",
  parameters: z.object({
    a: z.number().describe("The vourth number"),
    b: z.number().describe("The fith number"),
  }),
  execute: ({ a, b }: { a: number; b: number }) => `${a + b}`,
});


  const response = await mathAgent.run("How much is 5 + 5? then divide by 2");
  console.log(response.data);
}

void main().then(() => {
  console.log("Done");
});