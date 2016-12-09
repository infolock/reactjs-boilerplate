import { createFetchRequest } from '../common/api';
import { HOME_FETCH_REQUEST, HOME_FETCH_SUCCESS, HOME_FETCH_FAILURE } from '../constants/home';

const BASE_URL = '/path/to/some/resource';

export function fetchHomeData() {
    let actions = [
        HOME_FETCH_REQUEST,
        {
            type: HOME_FETCH_SUCCESS,
            payload: (action, state, response) => response.json().then(data => data)
        },
        HOME_FETCH_FAILURE
    ];

    return createFetchRequest(BASE_URL, actions);
}
