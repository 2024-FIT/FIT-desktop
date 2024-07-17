import { useState, useEffect } from 'react';
import Router from "@/router";

function App() {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchGPT = async () => {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY; 
      //환경 변수에서 API 키
      const prompt = "안녕 지피티! 넌 영양사아. 지금부터 BMI 지수에 맞는 식단을 짜줘!"; 

      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }]
        })
      });

      const data = await res.json();
      setResponse(data.choices[0].message.content);
    };

    fetchGPT();
  }, []);

  return (
    <div>
      <Router />
      {/* <h1>Response from GPT:</h1> */}
      <p>{response}</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default App;