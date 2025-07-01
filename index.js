import "dotenv/config";
import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { multiply } from "./tools/multiply.js";
import { weather } from "./tools/weather.js";

async function main() {
    const llm = new ChatOpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        modelName: "gpt-3.5-turbo",
        temperature: 0
    });
    const llmWithTools = llm.bindTools([multiply, weather]);

    console.log("=== Example 1: multiply ===");
    const resp = await llmWithTools.invoke([
        new HumanMessage("What is 15 multiplied by 23?")
    ]);

    // example 2: weather
    console.log("=== Example 2: weather ===");
    const resp2 = await llmWithTools.invoke([
        new HumanMessage("What’s the weather in San Francisco?")
    ]);
    
    console.log("Response:", resp.content);
    console.log("Tool calls:", resp.tool_calls);
    console.log("Response (weather):", resp2.content);
}

main();