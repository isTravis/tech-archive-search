/* eslint-disable import/prefer-default-export */

export const apiFetch = function(path, opts) {
	const urlPrefix = location.origin.indexOf('localhost') > -1
		? 'http://localhost:9876'
		: 'https://underlay-api-v0.herokuapp.com';
	const finalRoute = `${urlPrefix}/${path}`;

	return fetch(finalRoute, {
		...opts,
		// credentials: 'include',
	})
	.then((response)=> {
		if (!response.ok) {
			return response.json().then((err)=> { throw err; });
		}
		return response.json();
	});
};
