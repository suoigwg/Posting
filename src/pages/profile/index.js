import React, {Component} from 'react';
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import './style.scss';
import {Avatar, Col, Icon, Menu, Row, Statistic, Timeline, Typography} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {Title, Paragraph, Text} = Typography;

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        current: 'mail',
    };

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        const {timeline, username, following, wordCount, articleCount, avatarUrl, follower} = this.props;
        return (
            <div className={'profile-wrapper'}>
                <div className={'profile-header'}>
                    <div className={'profile-avatar'}>
                        <Avatar size={128} icon="user" src={avatarUrl}/>
                    </div>
                    <div className={'profile-userinfo'}>
                        <Title>Username</Title>
                        <Row className={'statistic-row'} justify={'space-around'} type={'flex'} gutter={8}>
                            <Col span={6}>
                                <Statistic title="关注" value={following}/>
                            </Col>
                            <Col span={6}>
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
                            <Menu.Item key="mail">
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
                                return <Timeline.Item>
                                    <p>于{item.timestamp}发表了新闻文章{item.title}</p>
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
        this.props.loadProfile();
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProfile() {
            dispatch(actionCreators.loadUserProfile(1))
        },

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);