import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function subscribeHandler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = request.body;

  if (!email) {
    return response.status(400).json({ message: 'Email is required' });
  }

  try {
    const API_KEY = process.env.LOOPS_API_KEY;
    
    if (!API_KEY) {
      console.error('Missing LOOPS_API_KEY');
      return response.status(500).json({ message: 'Configuration error' });
    }

    const loopsResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });

    const data = await loopsResponse.json();

    if (loopsResponse.ok) {
      return response.status(200).json({ success: true });
    } else {
      return response.status(loopsResponse.status).json({ message: data.message });
    }
  } catch (error) {
    return response.status(500).json({ message: 'Server error' });
  }
}
