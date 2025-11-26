// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export interface CreateScriptRequest {
    vision: string;
    proud_statement: string;
    meditation_prompt: string;
    feeling_input: string;
    length_minutes: number;
}

export interface CreateScriptResponse {
    script: string;
}

export interface GenerateAudioRequest {
    script: string;
    voice_id: string;
}

export interface GenerateAudioResponse {
    audio_url: string;
}

const MOCK_SCRIPT = `
Welcome to your meditation practice. 
Take a moment to settle into a comfortable position. Close your eyes gently, or soften your gaze downward.
Begin by bringing your awareness to your breath. Notice the natural rhythm of your breathing - the inhale, the pause, the exhale.
As you breathe in, imagine drawing in calm and peace. As you breathe out, release any tension or stress you may be holding.
Your vision for yourself is powerful and within reach. You have already accomplished so much, and you continue to grow every day.
Allow yourself to feel proud of your journey. Acknowledge your strength, your resilience, your unique gifts.
Rest in this moment of peace and self-compassion. You are exactly where you need to be.
When you're ready, gently bring your awareness back to the present moment. Take a deep breath, and slowly open your eyes.
`;

const MOCK_AUDIO_URL = "https://abc.xyz/meditation-audio.mp3";

export const createMeditationScript = async (
    data: CreateScriptRequest
): Promise<CreateScriptResponse> => {
    console.log(data)
    // TODO: Actual API call
    // const response = await fetch(`${API_BASE_URL}/meditations/script`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // });
    // 
    // if (!response.ok) {
    //     throw new Error('Err');
    // }
    // 
    // return await response.json();

    // Mock
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ script: MOCK_SCRIPT });
        }, 1000);
    });
};

export const generateMeditationAudio = async (
    data: GenerateAudioRequest
): Promise<GenerateAudioResponse> => {
    console.log(data)
    // TODO: Actual API call
    // const response = await fetch(`${API_BASE_URL}/meditations/audio`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // });
    // 
    // if (!response.ok) {
    //     throw new Error('Err');
    // }
    // 
    // return await response.json();

    // Mock
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ audio_url: MOCK_AUDIO_URL });
        }, 1500);
    });
};