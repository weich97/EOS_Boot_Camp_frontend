import {Api, JsonRpc} from 'eosjs';
import {JsSignatureProvider} from 'eosjs/dist/eosjs-jssig.js';

async function takeAction(action, dataValue) {
    const privateKey = localStorage.getItem("cardgame_key");
    const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
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

      static placebid({ bid_price }) {
          console.log(bid_price)
        return new Promise((resolve, reject) => {
          takeAction("placebid", { user: localStorage.getItem("cardgame_account"), user_id: 10, bid_price: bid_price})
            .then(() => {
              resolve();
              {console.log("hurray")}
            })
            .catch(err => {
              reject(err);
              {console.log(err)}
            });
        });
      }

      static posttrip({ post_title, loc_desc, loc_param, cost_jorn, car_space }) {
        return new Promise((resolve, reject) => {
          takeAction("addpost", { user_name: localStorage.getItem("cardgame_account"),post_title: post_title, loc_desc: loc_desc, loc_param:loc_param, car_size: car_space, cost_trip:cost_jorn})
            .then(() => {
              resolve();
              {console.log("post successful")}
            })
            .catch(err => {
                {console.log(err)}
              reject(err);
            });
        });
    }

      static edittrip({ post_title, loc_desc, loc_param, cost_jorn, car_space, carpoolid }) {
        console.log(carpoolid)
        return new Promise((resolve, reject) => {
          takeAction("editpost", { username: localStorage.getItem("cardgame_account"),post_title: post_title, carpoolid:carpoolid, loc_desc: loc_desc, loc_param:loc_param, car_size: car_space, cost_trip:cost_jorn})
            .then(() => {
              resolve();
              {console.log("Edited Post successful")}
            })
            .catch(err => {
                {console.log(err)}
              reject(err);
            });
        });
    }

    static hopride({ carpoolid,space_req }) {
      console.log(carpoolid)
      return new Promise((resolve, reject) => {
        takeAction("hopride", { username: localStorage.getItem("cardgame_account"),carpoolid:carpoolid, space_req: space_req})
          .then(() => {
            resolve();
            {console.log("Signup for Trip Successfully")}
          })
          .catch(err => {
              {console.log(err)}
            reject(err);
          });
      });
    }

      static async getUserByName(username){

          try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "table": "users",
                "limit": 1,
                "upper_bound": username,
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
              "table": "carpool",
          });
          return result.rows;

        } catch(err){
            console.error(err);
        }
    }

    static async getUserPostTrips(){

        try{
          const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
          const result = await rpc.get_table_rows({
              "json": true,
              "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
              "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
              "table": "carpool",
              "upper_bound": localStorage.getItem("cardgame_account")
          });
          if(result.rows){
            //console.log(result.rows)
            return result.rows;
          }
          else{
            return [];
          }

        } catch(err){
            console.error(err);
        }
    }

    static async getTripDetails(tripid){
      try{
        const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
        const result = await rpc.get_table_rows({
            "json": true,
            "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
            "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
            "table": "carpool",
            "limit": 1,
            "lower_bound": tripid.handle
        });
        if(result.rows){
          //console.log(result.rows)
          return result.rows;
        }
        else{
          return [];
        }

      } catch(err){
          console.error(err);
      }
  }

    static async getTicketRecord(){
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "table": "people",
            });
            return result.rows.sort(function(a,b){
                return a.auxi_price - b.auxi_price;
            });
        }
        catch(err){
            console.error(err);
        }
    }

    static async getsellingaccount(){
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "table": "sellorders",
            });
            return result.rows.sort();
        }
        catch(err){
            console.error(err);
        }
    }

}

export default ApiService;