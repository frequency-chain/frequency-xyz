const providerUriList = ['https://0.rpc.frequency.xyz', 'https://1.rpc.frequency.xyz'];

function hexToBigEndian(input: string) {
  const work = input.replace('0x', '');
  const reversedString = [];
  for (let i = 0; i < work.length; i += 2) {
    reversedString.unshift(`${work[i]}${work[i + 1]}`);
  }
  return parseInt(reversedString.join(''), 16);
}

export async function getMsaCount() {
  const request = {
    jsonrpc: '2.0',
    method: 'state_getStorage',
    // This is the key for msa.currentMsaIdentifierMaximum
    params: ['0x9f76716a68a582c703dd9e44700429b921c5be4bcc880b0f4de118246738f8c7'],
    id: 1,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  };
  const response = await (await fetch(providerUriList[0], options)).json();
  return hexToBigEndian(response.result);
}

export async function getTotUsersCount() {
  const defaultValue = 11298183;

  try {
    const response = await fetch('https://portal.atproto.projectliberty.io/stats/totusers');
    if (!response.ok) throw '';
    const totusers = await response.json();
    const n = Number(totusers) || defaultValue;
    return n;
  } catch {
    return defaultValue;
  }
}
