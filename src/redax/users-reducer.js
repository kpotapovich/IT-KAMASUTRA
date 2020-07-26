import {UsersAPI as usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objiect-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState =  {
    users: [ ],
    pageSize: 60,
    totalUsersCount:1,
    currentPage:1,
    isFetching: true,
    followingInProgress: [],
    fake: 10

};

const usersReducer = (state = initialState  , action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users, action.userId,
                    "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users:updateObjectInArray(
                    state.users,action.userId,
                    "id",{ followed: false})
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state,
                followingInProgress : action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        }

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW , userId})
export const setUsers = (users) => ({ type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING,  isFetching})
export const setFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS,  isFetching, userId})


 export const requestUsers  = (page, pageSize) => {
     return async (dispatch) => {
         dispatch(toggleIsFetching(true));
         dispatch(setCurrentPage(page));

         let data = await usersAPI.getUsers(page, pageSize);

         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
     }
 }


const  followUnFollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(setFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollowSuccess);
    }
}

export default  usersReducer;