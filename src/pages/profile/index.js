import React, {Component} from 'react';
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import './style.scss';
import {Avatar, Col, Icon, List, Menu, Modal, Row, Statistic, Timeline, Typography} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {Title, Paragraph, Text} = Typography;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        current: 'publish',
        action: '发表',
    };

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        switch (e.key) {
            case "update":
                this.props.loadActivity(this.props.match.params.id);
                this.setState({action: '点赞'});
                break;
            case "publish":
                this.props.loadUpdate(this.props.match.params.id);
                this.setState({action: '发表'});
                break;
            default:
                return;

        }
    };

    info(title) {
        const {followingList, followerList} = this.props;
        let content = {};
        switch (title) {
            case "Ta关注的用户":
                content = followerList.map((item) => {
                    return (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                title={<a href="https://ant.design">{item.username}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )
                });
                break;
            case "关注Ta的人":
                content = followingList.map((item) => {
                    return (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                title={<a href="https://ant.design">{item.username}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )
                });
                break;
            default:
                break;
        }
        Modal.info({
            title,
            content,
            onOk() {
            },
            width: 600,
            okText: '关闭'
        });
    }


    render() {
        const {timeline, username, following, wordCount, articleCount, avatarUrl, follower} = this.props;
        return (
            <div className={'profile-wrapper'}>
                <div className={'profile-header'}>
                    <div className={'profile-avatar'}>
                        <Avatar size={128} icon="user" src={avatarUrl}/>
                    </div>
                    <div className={'profile-userinfo'}>
                        <Title>@{username}</Title>
                        <Row className={'statistic-row'} justify={'space-around'} type={'flex'} gutter={8}>
                            <Col span={6} onClick={() => this.info("Ta关注的用户")}>
                                <Statistic title="关注" value={following}/>
                            </Col>
                            <Col span={6} onClick={() => this.info("关注Ta的人")}>
                                <Statistic title="粉丝" value={follower}/>
                            </Col>
                            <Col span={6}>
                                <Statistic title="文章" value={articleCount}/>
                            </Col>
                            <Col span={6}>
                                <Statistic title="字数" value={wordCount}/>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            className={'profile-menu'}
                        >
                            <Menu.Item key="publish">
                                <Icon type="mail"/>文章
                            </Menu.Item>
                            <Menu.Item key="update">
                                <Icon type="mail"/>动态
                            </Menu.Item>

                        </Menu>
                    </div>
                    <div className={'menu-timeline'}>
                        <Timeline>
                            {timeline.map((item, idx) => {
                                const time = new Date(parseInt(item.timestamp, 10));
                                return <Timeline.Item>
                                    <p>于{time.toString()}{this.state.action}了新文章《{item.title}》</p>
                                    <p>{item.content}</p>
                                </Timeline.Item>
                            })}
                        </Timeline>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const userID = this.props.match.params.id;
        this.props.loadProfile(userID);
        this.props.loadFollowingUser(userID);
        this.props.loadFollowerUser(userID);
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        username: state.getIn(['profile', 'username']),
        following: state.getIn(['profile', 'following']),
        wordCount: state.getIn(['profile', 'wordCount']),
        articleCount: state.getIn(['profile', 'articleCount']),
        avatarUrl: state.getIn(['profile', 'avatarUrl']),
        follower: state.getIn(['profile', 'follower']),
        timeline: state.getIn(['profile', 'timeline']),
        followingList: state.getIn(['profile', 'followingList']),
        followerList: state.getIn(['profile', 'followerList']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProfile(id) {
            dispatch(actionCreators.loadUserProfile(id))
        },
        loadActivity(id) {
            dispatch(actionCreators.loadUserActivity(id));
        },
        loadUpdate(id) {
            dispatch(actionCreators.loadPublishActivity(id));
        },
        loadFollowingUser(id) {
            dispatch(actionCreators.loadFollowingUser(id));
        },
        loadFollowerUser(id) {
            dispatch(actionCreators.loadFollowerUser(id));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);