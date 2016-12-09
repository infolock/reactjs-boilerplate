import 'babel-polyfill';

const defaults = {
	headers: {
		'X-CSRF-Token': typeof window !== 'undefined' ? window.App.csrfToken : '',
		'Content-Type': 'application/json'
	},
	credentials: 'include'
};

export const getQueryString = (options) => {
    return Object.keys(options || {}).map(
        key => `${ key }=${ encodeURIComponent(options[key]) }`
    ).join('&');
}

export const getFetchOptions = (options) => {
    options = { ...defaults, ...options };

    if(options.body && typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
    }

    if(typeof window !== 'undefined' && !window.App.isNode) {
        return options;
    }

    if(/(http|https)\:\/\/.+/.test(options.endpoint)) {
        return options;
    }

    const prefix = /^\//.test(options.endpoint) ? '' : '/';

    options.endpoint = `https://localhost${ prefix }${ options.endpoint }`;

    return options;
};
