// apiService.js
export const fetchAIResponse = async (message) => {
  console.log('apikey', process.env.NEXT_PUBLIC_OPENAI_API_KEY);
  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: message,
        max_tokens: 150,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch AI response', response);
    }
    const data = await response.json();
    // Adjust this based on the API response structure
    console.log('data', data);
    return data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    throw error;
  }
};