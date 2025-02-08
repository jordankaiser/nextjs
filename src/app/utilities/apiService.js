// apiService.js
export const fetchAIResponse = async (message) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        "model": "gpt-4o-mini",
        "messages": [{"role": "user", "content": message}],
        "temperature": 0.7
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch AI response', response);
    }
    const data = await response.json();
    // Adjust this based on the API response structure
    return data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};