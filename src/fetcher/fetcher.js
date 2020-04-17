localStorage.setItem('jwt','eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbm5hcGV5bEBnbWFpbC5jb20iLCJpYXQiOjE1ODcxMjQ0NTUsInN1YiI6ImFkbWluIiwiZXhwIjoxNTg3MTI2MjU1LCJhdXRob3JpdGllcyI6WyJBRE1JTiIsIlVTRVIiXX0.BIKxSeFSQTGBMQ598lClWI-AJiyufOarE0xaB58DcBA')
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}
function buildRequest(requestMethod, body) {
    const jwt = localStorage.getItem('jwt')
    return {
        method: requestMethod,
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${jwt}`
        }),
        body: body
    };
}
export function get(url) {
    return fetch(url,  buildRequest('GET',  null))
        .then(response =>
        {
            return checkStatus(response)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error;
        });
}
export function post(url, taskData) {
    return fetch(url, buildRequest('POST', JSON.stringify(taskData)))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            return error;
        });
}
export function remove(url) {
    return fetch(url, buildRequest('DELETE', null))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            return error
        });
}

export function patch(url, updatedTask) {
    return fetch(url, buildRequest('PATCH', JSON.stringify(updatedTask)))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            return error
        });
}