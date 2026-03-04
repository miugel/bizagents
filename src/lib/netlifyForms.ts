export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string | undefined>,
) {
  const body = new URLSearchParams();
  body.append('form-name', formName);

  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === 'string') {
      body.append(key, value);
    }
  }

  const isHttps = window.location.protocol === 'https:';
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  } as const;

  // If someone opens the site over HTTP, avoid CORS failures during protocol redirect.
  if (!isHttps) {
    await fetch(`https://${window.location.host}/`, {
      ...request,
      mode: 'no-cors',
    });
    return;
  }

  const response = await fetch('/', request);

  if (!response.ok) {
    throw new Error(`Netlify form submission failed with status ${response.status}`);
  }
}
