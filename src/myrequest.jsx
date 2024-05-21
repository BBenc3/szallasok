export async function myrequest(URL, method, body = null) {
    let response = await fetch(URL, {
        method:method,
        body: body ? JSON.stringify(body) : null,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
};
