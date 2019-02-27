import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://www.baidu.com/img/bd_logo1.png?where=super',
        },
        {
            id: 2,
            title: '教育',
            imgUrl: 'https://www.baidu.com/img/bd_logo1.png?where=super',
        },
        {
            id: 3,
            title: '文化',
            imgUrl: 'https://www.baidu.com/img/bd_logo1.png?where=super',
        },
        {
            id: 4,
            title: '政治',
            imgUrl: 'https://www.baidu.com/img/bd_logo1.png?where=super',
        },
        {
            id: 5,
            title: '经济',
            imgUrl: 'https://www.baidu.com/img/bd_logo1.png?where=super',
        },
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}