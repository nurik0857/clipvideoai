import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // Note: In production, you should proxy requests through your backend
});

export const generateVideoEdit = async (prompt: string) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a professional video editor assistant."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            model: "gpt-4-turbo-preview",
        });

        return completion.choices[0]?.message?.content;
    } catch (error) {
        console.error('Error generating video edit:', error);
        throw error;
    }
};

export default openai; 