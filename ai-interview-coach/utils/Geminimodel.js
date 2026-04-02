export const chatSession = {
  sendMessage: async (message) => {
    // ✅ REAL - uncomment when quota is available
    // const response = await ai.models.generateContent({...});
    // return { response: { text: () => response.text } };

    // 🧪 MOCK
    let mockResponse;

    if (message.includes("interview question")) {
      // Called from AddNewInterview - generate questions
      mockResponse = JSON.stringify([
        {
          question: "Tell me about yourself",
          answer: "Discuss your background and experience",
        },
        {
          question: "What are your strengths?",
          answer: "Focus on relevant technical skills",
        },
        {
          question: "Describe a challenge you faced as a Software Develpoer?",
          answer: "Use the STAR method",
        },
        {
          question: "Why do you want this role?",
          answer: "Connect your goals to the company",
        },
        {
          question: "Where do you see yourself in 5 years?",
          answer: "Show ambition and commitment",
        },
      ]);
    } 

    return {
      response: {
        text: () => mockResponse,
      },
    };
  },
};
