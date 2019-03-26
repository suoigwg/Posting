import * as constants from './constants'

export const changeContent = (content) => {
    return {
        type: constants.CHANGE_CONTENT,
        content
    }
};

export const changeTitle = (title) => {
    return {
        type: constants.CHANGE_TITLE,
        title
    }
};