const apiKey = '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';
const models = [
  'nvidia/nemotron-3-ultra-550b-a55b', 
  'nvidia/nemotron-3-ultra', 
  'meta/llama-3.3-70b-instruct', 
  'microsoft/phi-4', 
  'google/gemma-2-9b-it',
  'nvidia/nemotron-4-340b-instruct',
  'mistralai/mistral-7b-instruct-v0.3'
];

async function test() {
  for (const model of models) {
    try {
      const resp = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, messages: [{role: 'user', content: 'Return JSON: {"test":"ok"}'}], max_tokens: 50 })
      });
      const text = await resp.text();
      console.log(model, resp.status, text.substring(0, 200));
    } catch (e) {
      console.log(model, 'ERROR', e.message);
    }
  }
}
test();