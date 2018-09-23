import React from 'react';
import DocumentTitle from 'react-document-title';
import {connect} from 'dva';
import {Col, Row} from 'antd';
import styles from './BlogPage.css';
import blogImage from '../assets/blog_image.jpg'
import CommentWidget from "../components/CommentWidget";

@connect(({comments}) => ({
  comments
}))
class BlogPage extends React.Component {

  render() {
    return (
      <DocumentTitle title="Blog">
        <div className={styles.bodyContainer}>
          <Row>
            <br/>
          </Row>
          <Row>
            <Col span={4}/>
            <Col span={16}>
              <div className={styles.postHeader}>
                <a href="#">« Back to all blogs</a>
              </div>

              <h1 className={styles.postTitle}>
                <span>
                  Climate change is real. Welcome to the new normal.
                </span>
              </h1>

              <p className={styles.postAuthor}>
                <span className="hs-author-label">Posted by </span>
                <a className="author-link" href="#">Eugene Robinson</a> on Sept 17, 2018<a href="#">
                </a>
              </p>

              <div className={styles.sharesContainer}>
                <div className={styles.stTotal}>
                  <span className="st-label">26</span>
                  <span className={styles.stTotalShares}>
                    Shares
                  </span>
                </div>
                <div className={styles.stBtn} data-network="twitter" style={{display: "inline-block"}}>
                  <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                    <g>
                      <path
                        d="m31.5 11.7c1.3-0.8 2.2-2 2.7-3.4-1.4 0.7-2.7 1.2-4 1.4-1.1-1.2-2.6-1.9-4.4-1.9-1.7 0-3.2 0.6-4.4 1.8-1.2 1.2-1.8 2.7-1.8 4.4 0 0.5 0.1 0.9 0.2 1.3-5.1-0.1-9.4-2.3-12.7-6.4-0.6 1-0.9 2.1-0.9 3.1 0 2.2 1 3.9 2.8 5.2-1.1-0.1-2-0.4-2.8-0.8 0 1.5 0.5 2.8 1.4 4 0.9 1.1 2.1 1.8 3.5 2.1-0.5 0.1-1 0.2-1.6 0.2-0.5 0-0.9 0-1.1-0.1 0.4 1.2 1.1 2.3 2.1 3 1.1 0.8 2.3 1.2 3.6 1.3-2.2 1.7-4.7 2.6-7.6 2.6-0.7 0-1.2 0-1.5-0.1 2.8 1.9 6 2.8 9.5 2.8 3.5 0 6.7-0.9 9.4-2.7 2.8-1.8 4.8-4.1 6.1-6.7 1.3-2.6 1.9-5.3 1.9-8.1v-0.8c1.3-0.9 2.3-2 3.1-3.2-1.1 0.5-2.3 0.8-3.5 1z"/>
                    </g>
                  </svg>
                  <span className="st-label">Tweet</span>
                </div>
                <div className={styles.stBtn} data-network="facebook" style={{display: "inline-block"}}>
                  <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                    <g>
                      <path
                        d="m21.7 16.7h5v5h-5v11.6h-5v-11.6h-5v-5h5v-2.1c0-2 0.6-4.5 1.8-5.9 1.3-1.3 2.8-2 4.7-2h3.5v5h-3.5c-0.9 0-1.5 0.6-1.5 1.5v3.5z"/>
                    </g>
                  </svg>
                  <span className="st-label">Share</span>
                </div>
                <div className={styles.stBtn} data-network="linkedin" style={{display: "inline-block"}}>
                  <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                    <g>
                      <path
                        d="m13.3 31.7h-5v-16.7h5v16.7z m18.4 0h-5v-8.9c0-2.4-0.9-3.5-2.5-3.5-1.3 0-2.1 0.6-2.5 1.9v10.5h-5s0-15 0-16.7h3.9l0.3 3.3h0.1c1-1.6 2.7-2.8 4.9-2.8 1.7 0 3.1 0.5 4.2 1.7 1 1.2 1.6 2.8 1.6 5.1v9.4z m-18.3-20.9c0 1.4-1.1 2.5-2.6 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.6 1.2 2.6 2.5z"/>
                    </g>
                  </svg>
                  <span className="st-label">Share</span>
                </div>
                <div className={styles.stBtn} data-network="googleplus" style={{display: "inline-block"}}>
                  <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                    <g>
                      <path
                        d="m25.2 20.3q0 3.6-1.6 6.5t-4.3 4.4-6.5 1.6q-2.6 0-5-1t-4.1-2.7-2.7-4.1-1-5 1-5 2.7-4.1 4.1-2.7 5-1q5 0 8.6 3.3l-3.5 3.4q-2-2-5.1-2-2.1 0-4 1.1t-2.8 2.9-1.1 4.1 1.1 4.1 2.8 2.9 4 1.1q1.5 0 2.7-0.4t2-1 1.4-1.4 0.8-1.4 0.4-1.3h-7.3v-4.4h12.1q0.3 1.1 0.3 2.1z m15.1-2.1v3.6h-3.6v3.7h-3.7v-3.7h-3.7v-3.6h3.7v-3.7h3.7v3.7h3.6z"/>
                    </g>
                  </svg>
                  <span className="st-label">Share</span>
                </div>
                <div className={styles.stBtn} data-network="sharethis" style={{display: "inline-block"}}>
                  <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                    <g>
                      <path
                        d="m30 26.8c2.7 0 4.8 2.2 4.8 4.8s-2.1 5-4.8 5-4.8-2.3-4.8-5c0-0.3 0-0.7 0-1.1l-11.8-6.8c-0.9 0.8-2.1 1.3-3.4 1.3-2.7 0-5-2.3-5-5s2.3-5 5-5c1.3 0 2.5 0.5 3.4 1.3l11.8-6.8c-0.1-0.4-0.2-0.8-0.2-1.1 0-2.8 2.3-5 5-5s5 2.2 5 5-2.3 5-5 5c-1.3 0-2.5-0.6-3.4-1.4l-11.8 6.8c0.1 0.4 0.2 0.8 0.2 1.2s-0.1 0.8-0.2 1.2l11.9 6.8c0.9-0.7 2.1-1.2 3.3-1.2z"/>
                    </g>
                  </svg>
                  <span className="st-label">Share</span>
                </div>
              </div>

              <Row>
                <div className={styles.postBody}>
                  <br/>
                  <p>
                    Hurricane Florence has drenched eastern North Carolina with more than 30 inches of rain, an all-time
                    record for the state. Last year, Hurricane Harvey stalled over Houston and dumped more than 60
                    inches of rain, an all-time record for the whole country. Also last year, Hurricane Maria ravaged the
                    island of Puerto Rico and caused, according to an independent study, nearly 3,000 deaths.
                  </p>
                  <p>
                    <img
                      className={styles.postImg}
                      src={blogImage}
                    />
                  </p>
                  <p>
                    Welcome to the new normal.
                  </p>
                  <p>
                    Tropical cyclones are nothing new, of course. But climate scientists say that global warming should
                    make such storms wetter, slower and more intense — which is exactly what seems to be happening. And
                    if we fail to act, these kinds of devastating weather events will likely become even more frequent and
                    more severe.
                  </p>
                  <p>
                    Climate change is a global phenomenon. Authorities in the Philippines are still trying to assess the
                    damage and death toll from Typhoon Mangkhut, a rare Category 5-equivalent storm that struck the
                    archipelago Saturday with sustained winds of 165 mph. Mangkhut went on to batter Hong Kong and now,
                    as it weakens, is plowing across southern China.
                  </p>
                  <p>
                    Every human being on the planet has a stake in what governments do to limit and adapt to climate
                    change, including leaders who, like President Trump, prefer to believe global warming is some kind
                    of hoax. I doubt the citizens of Wilmington, N.C. — a lovely resort town that was turned into an island
                    by widespread flooding from Florence — feel there is anything illusory about the hardship they’re
                    going through.
                  </p>
                  <p>
                    As I noted last month, scientists are now cautiously making the first serious attempts to gauge the
                    impact of climate change on specific weather events such as storms, monsoons, droughts and heat
                    waves.
                  </p>
                  <p>
                    The most ambitious attempt to quantify the link between climate and weather — a blue-chip
                    international consortium called World Weather Attribution — has not yet made an attempt to estimate
                    any possible effect that global warming may have had on Florence or Mangkhut. But another group of
                    researchers, the Climate Extremes Modeling Group at the Stony Brook University School of Marine and
                    Atmospheric Sciences, estimated Sept. 12 that Florence would produce 50 percent more rainfall than
                    if human-induced global warming had not occurred.
                  </p>
                  <p>
                    You don’t have to be a scientist to understand why that makes sense. We know from direct measurement
                    that the concentration of carbon dioxide in the atmosphere has increased by more than 40 percent
                    since the beginning of the Industrial Revolution, when humans started burning fossil fuels on a large
                    scale.
                    We know from direct observation that carbon dioxide traps heat. We know from direct measurement that
                    both atmospheric and ocean temperatures have been rising sharply. We know from direct measurement that
                    warmer water takes up more space than cooler water, which is the main reason ocean levels are rising.
                  </p>
                  <p>
                    Climate change is no longer theoretical. It is real, it is all around us, and it is going to get
                    much worse.
                  </p>
                </div>
              </Row>

              <CommentWidget
                appId={983}
                articleId={12478}
              />

              <br/>
            </Col>
            <Col span={4}/>
          </Row>
        </div>
      </DocumentTitle>
    );
  }
}

export default BlogPage;
