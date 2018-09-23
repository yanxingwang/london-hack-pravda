import Eos from 'eosjs';

const ACCOUNT_NAME = 'dcommentsacc';
const TABLE_NAME = 'commentsstr';

export async function queryComments(articleId) {
  const eos = Eos();
  return eos.getTableRows({
    'json': true,
    'code': ACCOUNT_NAME,   // contract who owns the table
    'scope': ACCOUNT_NAME,  // scope of the table
    'table': TABLE_NAME,    // name of the table as specified by the contract abi
    'lower_bound': articleId,
    'upper_bound': articleId + 1,
    'key_type': 'i64',
    'index_position': 3,
    'limit': 100
  });
}

export async function submitComment(articleId, params) {
  const data = {
    'actor': params.account,
    'privateKey': params.privateKey,
    'data': {
      '_user': params.account,
      '_comment': params.comment,
      '_nickname': params.nickname,
      '_avatar': params.avatar,
      '_reply_to': params.replyTo,
      '_upvotes': 0,
      '_artkey': articleId,
    }
  };

  const eos = Eos({keyProvider: data.privateKey});
  const transaction = {
    actions: [{
      account: ACCOUNT_NAME,
      name: 'createcmt',
      authorization: [{
        actor: data.actor,
        permission: 'active',
      }],
      data: data.data,
    }],
  };
  await eos.transaction(transaction);
}

export async function likeComment(params) {
  console.log(params);
  const data = {
    'actor': params.account,
    'privateKey': params.privateKey,
    'data': {
      '_user': params.account,
      '_prim_key': params.primaryKey,
    }
  };

  const eos = Eos({keyProvider: data.privateKey});
  const transaction = {
    actions: [{
      account: ACCOUNT_NAME,
      name: 'likecmt',
      authorization: [{
        actor: data.actor,
        permission: 'active',
      }],
      data: data.data,
    }],
  };
  await eos.transaction(transaction);
}

export async function dislikeComment(params) {
  console.log(params);
  const data = {
    'actor': params.account,
    'privateKey': params.privateKey,
    'data': {
      '_user': params.account,
      '_prim_key': params.primaryKey,
    }
  };

  const eos = Eos({keyProvider: data.privateKey});
  const transaction = {
    actions: [{
      account: ACCOUNT_NAME,
      name: 'dislikecmt',
      authorization: [{
        actor: data.actor,
        permission: 'active',
      }],
      data: data.data,
    }],
  };
  await eos.transaction(transaction);
}
