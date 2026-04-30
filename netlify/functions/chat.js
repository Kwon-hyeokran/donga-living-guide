const Anthropic = require("@anthropic-ai/sdk");

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const body = JSON.parse(event.body);

    // Netlify AI Gateway가 자동으로 API 키를 주입 — 별도 설정 불필요!
    const client = new Anthropic();

    const response = await client.messages.create({
      model: body.model || 'claude-sonnet-4-20250514',
      max_tokens: body.max_tokens || 1000,
      system: body.system,
      messages: body.messages
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };
  } catch (err) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || '서버 오류가 발생했습니다.' })
    };
  }
};
