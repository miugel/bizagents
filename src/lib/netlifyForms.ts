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

  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Netlify form submission failed with status ${response.status}`);
  }
}
