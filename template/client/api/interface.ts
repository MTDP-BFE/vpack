import service from './../service/';

interface RequestParam {
    [propName: string]: any;
}

export function get (url: string, param: RequestParam) {
    let params: Array<string> = [];
    if (param) {
        Object.keys(param).forEach(function (key) {
            if (typeof param[key] !== 'undefined') {
                params.push(`${key}=${param[key]}`);
            }
        });
        url = url + '?' + params.join('&');
    }
    return service.get(url);
}

export function post (url: string, param: RequestParam) {
    if (param) {
        Object.keys(param).forEach(function (key) {
            if (typeof param[key] === 'undefined') {
                delete param[key];
            }
        });
    }
    return service.post(url, param);
}
