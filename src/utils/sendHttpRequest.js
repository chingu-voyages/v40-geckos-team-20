const sendHttpRequest = async ({ method, body, headers, url }) => {
  const init = {
    method: method || 'GET',
    body: body ? JSON.stringify(body) : null,
    headers: headers || {},
  };

  const response = await fetch(url, init);
  if (!response.ok) throw await response.json();
  const data = await response.json();

  return data;
};

export default sendHttpRequest;
