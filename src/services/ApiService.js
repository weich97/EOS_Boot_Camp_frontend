import {Api, JsonRpc} from 'eosjs';
import {JsSignatureProvider} from 'eosjs/dist/eosjs-jssig.js';

async function takeAction(action, dataValue) {
    const defaultPrivateKey = "5JUYgN9C3jfvXSYW1LnVo1UehbKav6QaBBT8Yr4Yfkr9Dsx3ZF3";
    const privateKey = localStorage.getItem("cardgame_key");
    console.log(privateKey)
    const rpc = new JsonRpc("https://3000-f820d80e-146d-4098-912a-a29c25d31c8a.ws-us02.gitpod.io/");
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider,
        textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

    try {
        const resultWithConfig = await api.transact({
            actions: [{
                account: process.env.REACT_APP_EOS_CONTRACT_NAME,
                name: action,
                authorization: [{
                    actor: localStorage.getItem("cardgame_account"),
                    permission: 'active',
                }],
                data: dataValue,
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        });
        console.dir(resultWithConfig);
    } catch (err) {
        throw(err)
    }
}

class ApiService{

    static login({ username, key }) {
        return new Promise((resolve, reject) => {
          localStorage.setItem("cardgame_account", username);
          localStorage.setItem("cardgame_key", key);
          localStorage.setItem('user_id', username);
          takeAction("login", { username: username })
            .then(() => {
              resolve();
              {console.log("hurray")}
            })
            .catch(err => {
              localStorage.removeItem("cardgame_account");
              localStorage.removeItem("cardgame_key");
              reject(err);
              {console.log(err)}
            });
        });
      }

      static async getUserByName(username){

          try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": "cardgame",
                "scope": "cardgame",
                "table": "users",
                "limit": 1,
                "lower_bound": username,
            });
            return result.rows[0];

          } catch(err){
              console.error(err);
          }
      }

      static async getAllRecord(){

        try{
          const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
          const result = await rpc.get_table_rows({
              "json": true,
              "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
              "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
              "table": "users",
          });
          return result.rows;

        } catch(err){
            console.error(err);
        }
    }

}

export default ApiService;