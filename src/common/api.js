import { CALL_API } from 'redux-api-middleware';
import * as APIHelper from './apiHelper';
import fetch from 'isomorphic-fetch';

import { GET, PUT, POST, DELETE } from '../constants/api';

//https://github.com/agraboso/redux-api-middleware#redux-standard-api-calling-actions

/**
 * Creates a GET request given the endpoint URL and the action types
 * @param {string} endpoint - endpoint URL for request
 * @param {string[]} types - action types for request, success, and failure -- in that order
 * @returns {symbol}
 */
export function createFetchRequest(endpoint, types) {
	return {
		[CALL_API]: APIHelper.getFetchOptions({
            method: GET,
            types, endpoint
        })
	};
}

/**
 * Create a POST request given the endpoint URL, action types, and payload
 * @param  {string} endpoint - endpoint URL for request
 * @param  {string[]} types - action types for request, success, and failure -- in that order
 * @param  {Object} body - payload to be sent with request
 * @returns {symbol}
 */
export function createPOSTRequest(endpoint, types, body) {
	return {
		[CALL_API]: APIHelper.getFetchOptions({
            method: POST,
            types, body, endpoint
        })
	};
}

/**
 * Create a PUT request given the endpoint URL, action types, and payload
 * @param  {string} endpoint - endpoint URL for request
 * @param  {string[]} types - action types for request, success, and failure -- in that order
 * @param  {Object} body - payload to be sent with request
 * @returns {symbol}
 */
export function createPUTRequest(endpoint, types, body) {
	return {
		[CALL_API]: APIHelper.getFetchOptions({
            method: 'PUT',
            types, body, endpoint
        })
	};
}

/**
 * Creates a DELETE request given the endpoint URL and action types
 * @param {string} endpoint - endpoint URL for request
 * @param {string[]} types - action types for request, success, and failure -- in that order
 * @returns {symbol}
 */
export function createDeleteRequest(endpoint, types) {
	return {
		[CALL_API]: APIHelper.getFetchOptions({
            method: DELETE,
            types, endpoint
        })
	};
}

export function createBasicFetch(endpoint) {
	return new Promise((resolve, reject) => {
		fetch(endpoint,
            APIHelper.getFetchOptions({
                method: GET
        }))
		.then(checkResponseStatus)
		.then(parsePayload)
		.then(payload => resolve(payload))
		.catch(error => error.response.json().then(e => reject(e)));
	});
}

export function createBasicPOST(endpoint, body) {
	return new Promise((resolve, reject) => {
		fetch(endpoint, APIHelper.getFetchOptions({
            body,
            method: POST
        }))
		.then(checkResponseStatus)
		.then(parsePayload)
		.then(payload => resolve(payload))
		.catch(error => error.response.json().then(e => reject(e)));
	});
}

export function checkResponseStatus(response) {
	if(response.status >= 200 && response.status < 300) {
		return response;
	}

	let error = new Error(response.statusText);
	error.response = response;

	throw error;
}

export function parsePayload(response) {
	// Fix when a "200 OK" is returned with an empty response
	return response.status === 200 ? {} : response.json();
}
