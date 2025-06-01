import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export const saveVideoEdit = async (userId: string, videoUrl: string, editPrompt: string, result: string) => {
    try {
        const { data, error } = await supabase
            .from('video_edits')
            .insert([
                {
                    user_id: userId,
                    video_url: videoUrl,
                    edit_prompt: editPrompt,
                    result: result,
                    created_at: new Date().toISOString()
                }
            ]);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error saving video edit:', error);
        throw error;
    }
};

export const getUserEdits = async (userId: string) => {
    try {
        const { data, error } = await supabase
            .from('video_edits')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching user edits:', error);
        throw error;
    }
};

export default supabase; 