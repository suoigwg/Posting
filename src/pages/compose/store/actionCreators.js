import * as constants from './constants'


export const toggleDirectoryAction = (show) => {
    return {
        type: constants.TOGGLE_DIRECTORY,
        show
    }
};


export const createArticleAction = (title, content) => {
    return {
        type: constants.NEW_ARTICLE,
        title,
        content,
    }
};

export const changeTitleAction = (activeIndex, title) => {
    return {
        type: constants.CHANGE_TITLE,
        title,
        activeIndex: activeIndex,
    }
};

export const createDirAction = (newDirName) => {
    return {
        type: constants.CREATE_DIR,
        newDirName
    }
};

export const toggleHeader = (visibility) => {
    return {
        type: constants.TOGGLE_HEADER,
        visibility
    }
};


