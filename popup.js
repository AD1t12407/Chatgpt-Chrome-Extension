document.getElementById('askButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const responseDiv = document.getElementById('response');
  
    responseDiv.textContent = 'Loading...';
  
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer OPENAI_API_KEY'
        },
        body: JSON.stringify({
          prompt: inputText,
          max_tokens: 150
        })
      });
  
      const data = await response.json();
      responseDiv.textContent = data.choices[0].text.trim();
    } catch (error) {
      responseDiv.textContent = 'Error: ' + error.message;
    }
  });
  
  