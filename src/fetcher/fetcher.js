function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

function buildRequest(requestMethod, body) {
    return {
        method: requestMethod,
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: body
    };
}

export function get(url) {
    return fetch(url, buildRequest('GET', null))
        .then(response => checkStatus(response))
        .then(response => response.json())
        .catch(error => {
            return error;
        });
}