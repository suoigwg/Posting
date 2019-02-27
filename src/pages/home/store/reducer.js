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
    ],
    articleList: [{
        id: 1,
        title: '断舍离，极简能否救得了你',
        brief: '昨日，为了寻找早先买来的外置光驱，翻箱倒柜。竟折腾半箱旧物什，犹犹豫豫舍弃了一部分，潜意识已经开始在作怪了，自认为平日已经很注意入的动作，仍然是...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 2,
        title: '断舍离，极简能否救得了你',
        brief: '昨日，为了寻找早先买来的外置光驱，翻箱倒柜。竟折腾半箱旧物什，犹犹豫豫舍弃了一部分，潜意识已经开始在作怪了，自认为平日已经很注意入的动作，仍然是...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 3,
        title: '断舍离，极简能否救得了你',
        brief: '昨日，为了寻找早先买来的外置光驱，翻箱倒柜。竟折腾半箱旧物什，犹犹豫豫舍弃了一部分，潜意识已经开始在作怪了，自认为平日已经很注意入的动作，仍然是...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 4,
        title: '断舍离，极简能否救得了你',
        brief: '昨日，为了寻找早先买来的外置光驱，翻箱倒柜。竟折腾半箱旧物什，犹犹豫豫舍弃了一部分，潜意识已经开始在作怪了，自认为平日已经很注意入的动作，仍然是...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 5,
        title: '断舍离，极简能否救得了你',
        brief: '昨日，为了寻找早先买来的外置光驱，翻箱倒柜。竟折腾半箱旧物什，犹犹豫豫舍弃了一部分，潜意识已经开始在作怪了，自认为平日已经很注意入的动作，仍然是...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    ],
    linkList: [{
        id: 1,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 1,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 1,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 1,
        imgUrl: 'https://upload-images.jianshu.io/upload_images/11374144-e139821c02b67b53.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}