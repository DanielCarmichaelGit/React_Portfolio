import axios from "axios";

export async function askGPT(prompt, key, url, max_tokens = 150) {
    const headers = {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    };

    const body = {
        prompt: prompt,
        max_tokens // You can adjust this or add more parameters as needed
    };

    try {
        const response = await axios.post(url, body, { headers: headers });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error calling OpenAI API:', error.response.data);
        throw error;
    }
}