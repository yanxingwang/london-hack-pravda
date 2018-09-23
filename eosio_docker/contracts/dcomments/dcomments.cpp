#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;

// Smart Contract Name: dcomments
// Table struct:
//   commentsstr: multi index table to store the comments
//     prim_key(uint64): primary key
//     user(account_name/uint64): account name for the user
//     comment(string): the comment message
//     timestamp(uint64): the store the last update block time
// Public method:
//   isnewuser => to check if the given account name has comment in table or not
// Public actions:
//   createcmt => put the comment into the multi-index table and sign by the given account

// Replace the contract class name when you start your own project
class dcomments : public eosio::contract {
  private:
    /// @abi table
    struct commentsstr {
      uint64_t      prim_key;    // primary key
      account_name  user;        // account name for the user
      uint64_t      atc_key;     // article key
      std::string   comment;     // the comment message
      std::string   nickname;    // user nickname
      std::string   avatar;      // user avatar
      uint64_t      reply_to;    // reply to
      uint64_t      upvotes;     // number of upvotes
      uint64_t      timestamp;   // the store the last update block time

      // primary key
      auto primary_key() const { return prim_key; }
      // article key
      uint64_t get_by_article() const { return atc_key; }
      // secondary key: user
      account_name get_by_user() const { return user; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index< N(commentsstr), commentsstr,
      indexed_by< N(getbyuser), const_mem_fun<commentsstr, account_name, &commentsstr::get_by_user> >,
      indexed_by< N(atc_key), const_mem_fun<commentsstr, uint64_t, &commentsstr::get_by_article> >
      > commenttable;

  public:
    using contract::contract;

    /// @abi action
    void createcmt(account_name _user, 
      std::string& _comment, uint64_t _artkey, std::string& _nickname,
      std::string& _avatar, uint64_t _reply_to) {
      
      // to sign the action with the given account
      require_auth( _user );

      commenttable obj(_self, _self); // code, scope

      // create new comment
      obj.emplace( _self, [&]( auto& address ) {
        address.prim_key    = obj.available_primary_key();
        address.user        = _user;
        address.comment     = _comment;
        address.atc_key     = _artkey;
        address.nickname    = _nickname;
        address.avatar      = _avatar;
        address.reply_to    = _reply_to;
        address.upvotes     = 0;
        address.timestamp   = now();
      });
    }

    //@abi action
    void likecmt(account_name _user, uint64_t _prim_key) {
      // to sign the action with the given account
      require_auth( _user );
      
      commenttable obj(_self, _self); // code, scope

      auto itr = obj.find(_prim_key);
      auto &comment = *itr;

      // update object
      obj.modify( comment, _self, [&]( auto& address ) {
        address.upvotes += 1;
      });
    }

    //@abi action
    void dislikecmt(account_name _user, uint64_t _prim_key) {
      // to sign the action with the given account
      require_auth( _user );
      
      commenttable obj(_self, _self); // code, scope

      auto itr = obj.find(_prim_key);
      auto &comment = *itr;

      // update object
      obj.modify( comment, _self, [&]( auto& address ) {
        address.upvotes -= 1;
      });
    }    
};

// specify the contract name, and export a public action: update
EOSIO_ABI( dcomments, (createcmt)(likecmt)(dislikecmt) )
