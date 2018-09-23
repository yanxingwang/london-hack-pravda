import React from 'react';
import {connect} from 'dva';
import moment from 'moment';
import {Row, Col, Icon, Input, Modal} from 'antd';
import eosLogo from '../assets/eos_logo.png';
import eosGif from '../assets/eos_spinning_logo.gif';
import userAvatar from '../assets/avatar_user.jpg';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';
import likeImg from '../assets/like.png';
import dislikeImg from '../assets/dislike.png';
import styles from './CommentWidget.css';

const {TextArea} = Input;

const ACCOUNT = 'useraaaaaaab';
const PRIVATE_KEY = '5KLqT1UFxVnKRWkjvhFur4sECrPhciuUqsYRihc1p9rxhXQMZBg';

// Hard coded for demo, avatar should be a CDN link
const IMAGES_MAP = {
  'avatar_user.jpg': userAvatar,
  'avatar1.jpg': avatar1,
  'avatar2.jpg': avatar2,
  'avatar3.jpg': avatar3,
  'avatar4.jpg': avatar4,
};

@connect(({comments}) => ({
  comments
}))
class CommentWidget extends React.Component {
  state = {
    comment: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'comments/fetch',
      payload: {
        articleId: this.props.articleId,
      },
    });
  }

  render() {
    const {comments: {totalComments}} = this.props;
    const {comment} = this.state;

    return (
      <div>
        <Row>
          <div className={styles.commentPolicy}>
            <div className="content">
              <p><span>The Pravda Blog Comment Policy</span></p>
              <p>We welcome relevant, respectful comments. For questions about Pravda, please contact us <a
                href="#">here</a>.</p>
            </div>
          </div>
          <br/>
        </Row>

        <Row>
          <Col span={20}>
            <a className={styles.navText}>
              <span className="comment-count">
                {totalComments} comments
              </span>
            </a>
          </Col>
          <Col span={4}>
            <a className={styles.navTextRight}>
              <Icon type="message" theme="outlined" className={styles.navTextRightIcon}/>
              <span>BitMaster</span>
              <Icon type="caret-down" theme="outlined" className={styles.navTextRightArrow}/>
            </a>
          </Col>
        </Row>

        <Row>
          <div className={styles.navDivider}/>
        </Row>

        <Row>
          <Col span={20}>
            <a className={styles.navTextBelow}>
              <span>
                <img src={eosLogo} className={styles.navBlockchainIcon} />
              </span>
              <span>Powered by Pravda on EOS</span>
            </a>
          </Col>
          <Col span={4}>
            <a className={styles.navTextRight} style={{fontSize: 12}}>
              <span>Sort by Best</span>
              <Icon type="caret-down" theme="outlined" className={styles.navTextRightArrow}/>
            </a>
          </Col>
        </Row>

        <div className={styles.postBox}>
          <div className={styles.postEditorAvatar}>
            <a href="#" rel="noopener noreferrer" className="user">
              <img
                src={userAvatar}
                alt="Avatar"
              />
            </a>
          </div>

          <div className={styles.postEditorBox}>
            <Row>
              <TextArea
                rows={5}
                className={styles.postEditorTextArea}
                value={comment}
                onChange={e => this.onChange(e)}
                placeholder="Join the discussion..."
              />
            </Row>
            <Row>
              <div className={styles.postAction}>
                <ul>
                  <li>
                    <Icon type="camera" theme="outlined" className={styles.postActionPicture}/>
                  </li>
                </ul>
                <div style={{display: "block"}}>
                  <section>
                    <div style={{textAlign: "right"}}>
                      <button className={styles.postActionButton} onClick={() => this.onSubmitComment()}>
                        Post as <span>BitMaster</span>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </Row>
          </div>
        </div>

        <br/>

        <Row>
          {this.getComments()}
        </Row>

        <br/>
      </div>
    )
  }

  onUpVote(primaryKey) {
    this.props.dispatch({
      type: 'comments/like',
      payload: {
        params: {
          primaryKey,
          account: ACCOUNT,
          privateKey: PRIVATE_KEY,
        }
      },
    });
  }

  onDownVote(primaryKey) {
    this.props.dispatch({
      type: 'comments/dislike',
      payload: {
        params: {
          primaryKey,
          account: ACCOUNT,
          privateKey: PRIVATE_KEY,
        }
      },
    });
  }

  renderComment(comment) {
    const timeStamp = moment.unix(comment.timestamp);

    return (
      <div className={styles.postContent}>
        <div className={styles.postAvatar}>
          <a href="#" className={styles.postUser}>
            <img
              src={IMAGES_MAP[comment.avatar]}
              alt="Avatar"
            />
          </a>
        </div>

        <div className={styles.postBody}>
          <header className={styles.commentHeader}>
            <span className="post-byline">
              <span>
                <span className={styles.commentHeaderAuthor}>
                  <a href="#">{comment.nickname}</a>
                </span>
              </span>
            </span>
            <span className={styles.postMeta}>
              <span className={styles.commentBullet}>•</span>
              <a href="#" className={styles.commentTime}>
                {timeStamp.fromNow()}
              </a>
            </span>
          </header>

          <div className={styles.postMessageContainer}>
            <div className={styles.postMessage}>
              <p>{comment.comment}</p>
            </div>
          </div>

          <footer className={styles.commentFooter}>
            <div>
              <a className={styles.voteUp}>
                <span className={styles.updatableCount}>
                  {comment.upvotes}
                </span>
                <span className={styles.voteControl}>
                  <img
                    src={likeImg}
                    className={styles.voteIcon}
                    onClick={() => this.onUpVote(comment.id)}
                  />
                  {/*<Icon*/}
                    {/*type="caret-up"*/}
                    {/*theme="outlined"*/}
                    {/*className={styles.voteIcon}*/}
                    {/*onClick={() => this.onUpVote(comment.id)}*/}
                  {/*/>*/}
                </span>
              </a>
              <a className={styles.voteDown}>
                <span className={styles.voteControl}>
                  <img
                    src={dislikeImg}
                    className={styles.voteIcon}
                    onClick={() => this.onDownVote(comment.id)}
                  />
                  {/*<Icon*/}
                    {/*type="caret-down"*/}
                    {/*theme="outlined"*/}
                    {/*className={styles.voteIcon}*/}
                    {/*onClick={() => this.onDownVote(comment.id)}*/}
                  {/*/>*/}
                </span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  getComments() {
    const {comments: {comments}} = this.props;
    return comments.map(comment => (
      <ul className={styles.postList}>
        <li>
          {this.renderComment(comment)}
          <ul className={styles.postListChildren}>
            <li style={{marginLeft: 30}}>
              {comment.children.map(replied => (this.renderComment(replied)))}
            </li>
          </ul>
        </li>
      </ul>
    ));
  }

  onChange(e) {
    const {value} = e.target;
    this.setState({
      comment: value,
    });
  }

  onSendComment(comment) {
    this.props.dispatch({
      type: 'comments/submit',
      payload: {
        articleId: this.props.articleId,
        params: {
          comment,
          avatar: 'avatar_user.jpg', // should be stored in CDN
          account: ACCOUNT,
          privateKey: PRIVATE_KEY,
          nickname: 'BitMaster',
          replyTo: 1000,
        }
      },
    });
  }

  onSubmitComment() {
    const {comment} = this.state;
    if (!comment) {
      return;
    }

    Modal.confirm({
      title: 'Please Confirm',
      width: 600,
      content: (
        <div>
          <br/>
          <Row>
            <Col span={3}>
              <img src={eosGif} className={styles.eosGif} />
            </Col>

            <Col span={21}>
              <div>
                <p>
                  Are you sure? Your comment will be accessible <b>permanently</b>, and <b>cannot be deleted</b>.
                </p>
                <p>
                  <a href="#">Learn more about EOS blockchain.</a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      ),
      okText: 'Yes!',
      cancelText: 'Cancel',
      onOk: () => this.onSendComment(comment),
    });
  }
}

export default CommentWidget;
