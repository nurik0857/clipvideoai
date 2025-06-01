export const config = {
    openai: {
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    },
    supabase: {
        url: process.env.REACT_APP_SUPABASE_URL,
        apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
    }
} as const;

// Validate required environment variables
const requiredEnvVars = [
    'REACT_APP_OPENAI_API_KEY',
    'REACT_APP_SUPABASE_API_KEY',
    'REACT_APP_SUPABASE_URL'
] as const;

requiredEnvVars.forEach(envVar => {
    if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
}); 