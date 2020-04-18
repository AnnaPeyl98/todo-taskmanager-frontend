function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

export function buildRequest(requestMethod, body, token) {
    const headers = new Headers({
        "Accept":       "application/json",
        "Content-Type": "application/json"

    });
    if (token !== null) {
        headers.set("Authorization", `Bearer ${token}`);
    }

    return {
        method: requestMethod,
        headers: headers,
        body: body
    };
}

export function get(url, token) {
    return fetch(url, buildRequest('GET', null, token))
        .then(response => {
            return checkStatus(response)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}


export function post(url, body, token) {
    return fetch(url, buildRequest('POST', body, token))
        .then(response => {
            console.log(response)
            return checkStatus(response)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}


export function remove(url, token) {
    return fetch(url, buildRequest('DELETE', null, token))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            throw error
        });
}


export function patch(url, body, token) {
    return fetch(url, buildRequest('PATCH', body, token))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            throw error
        });
}
export function postUser(url, body, token) {
    return fetch(url, buildRequest('POST', body, token))
        .then(response => {
            console.log(response)
            return checkStatus(response)
        })
        .then(response => {
            return response
        })
        .catch(error => {
            throw error;
        });
}