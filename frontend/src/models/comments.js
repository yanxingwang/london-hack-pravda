import collection from 'lodash/collection';
import array from 'lodash/array';
import {queryComments, submitComment, likeComment, dislikeComment} from "../services/comments";

function normalizeComments(rows) {
  const comments = {};
  for (const row of rows) {
    comments[row.prim_key] = {
      id: row.prim_key,
      avatar: row.avatar,
      nickname: row.nickname,
      comment: row.comment,
      upvotes: row.upvotes,
      timestamp: row.timestamp,
      children: [],
    };
  }

  const commentList = [];
  for (const row of rows) {
    if (row.reply_to in comments) {
      comments[row.reply_to].children.push(comments[row.prim_key]);
    } else {
      commentList.push(comments[row.prim_key]);
    }
  }

  return array.reverse(collection.sortBy(commentList, ['timestamp']));
}

export default {
  namespace: 'comments',
  state: {
    comments: [],
    totalComments: 0,
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      const response = yield queryComments(payload.articleId);
      const {rows} = response;
      const commentList = normalizeComments(rows);
      const count = rows.length;

      yield put({
        type: 'save',
        payload: {
          commentList,
          count,
        },
      });
    },

    * like({payload}, {call, put}) {  // eslint-disable-line
      yield likeComment(payload.params);

      const response = yield queryComments(payload.articleId);
      const {rows} = response;
      const commentList = normalizeComments(rows);
      const count = rows.length;

      yield put({
        type: 'save',
        payload: {
          commentList,
          count,
        },
      });
    },

    * dislike({payload}, {call, put}) {  // eslint-disable-line
      yield dislikeComment(payload.params);

      const response = yield queryComments(payload.articleId);
      const {rows} = response;
      const commentList = normalizeComments(rows);
      const count = rows.length;

      yield put({
        type: 'save',
        payload: {
          commentList,
          count,
        },
      });
    },

    * submit({payload}, {call, put}) {
      yield submitComment(payload.articleId, payload.params);

      const response = yield queryComments(payload.articleId);
      const {rows} = response;
      const commentList = normalizeComments(rows);
      const count = rows.length;

      yield put({
        type: 'save',
        payload: {
          commentList,
          count,
        },
      });
    },
  },

  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        comments: payload.commentList,
        totalComments: payload.count,
      };
    },
  },
};
