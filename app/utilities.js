/* eslint-disable import/prefer-default-export */

export const apiFetch = function(path, opts) {
	const urlPrefix = 'https://underlay-api-v0.herokuapp.com';
	// const urlPrefix = 'http://localhost:9876';
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
