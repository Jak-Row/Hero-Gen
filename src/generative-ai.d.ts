declare module '@google/generative-ai' {
    export class GoogleGenerativeAI {
      constructor(options: any);
      generateText(input: string): Promise<string>;
      // Add other method declarations as needed
    }
  }

  