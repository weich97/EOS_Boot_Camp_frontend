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
                account: "hwglwfwkjlyw",
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

class ApiServiceZ{

    //   static placebid({ bid_price }) {
    //       console.log(bid_price)
    //     return new Promise((resolve, reject) => {
    //       takeAction("placebid", { user: localStorage.getItem("cardgame_account"), user_id: 10, bid_price: bid_price})
    //         .then(() => {
    //           resolve();
    //           {console.log("hurray")}
    //         })
    //         .catch(err => {
    //           reject(err);
    //           {console.log(err)}
    //         });
    //     });
    //   }

    //   static posttrip({ post_title, loc_desc, loc_param, cost_jorn, car_space }) {
    //     console.log(localStorage.getItem("cardgame_account"))
    //     return new Promise((resolve, reject) => {
    //       takeAction("addpost", { user_name: localStorage.getItem("cardgame_account"),post_title: post_title, loc_desc: loc_desc, loc_param:loc_param, car_size: car_space, cost_trip:cost_jorn})
    //         .then(() => {
    //           resolve();
    //           {console.log("post successful")}
    //         })
    //         .catch(err => {
    //             {console.log(err)}
    //           reject(err);
    //         });
    //     });
    // }

    //   static async getUserByName(username){

    //       try{
    //         const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
    //         const result = await rpc.get_table_rows({
    //             "json": true,
    //             "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
    //             "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
    //             "table": "users",
    //             "limit": 1,
    //             "lower_bound": username,
    //         });
    //         return result.rows[0];

    //       } catch(err){
    //           console.error(err);
    //       }
    //   }

    static createsellorder({ ticket_for_sale, price_ask, seasonStage }) {
          
        return new Promise((resolve, reject) => {
          takeAction("sellticket", { seller: localStorage.getItem("cardgame_account"), ticket_for_sale: ticket_for_sale, price_ask:price_ask, stage: seasonStage})
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

    static async getUserPostTrips(){

        try{
          const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
          const result = await rpc.get_table_rows({
              "json": true,
              "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
              "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
              "table": "users",
              "lower_bound": localStorage.getItem("cardgame_account")
          });
          return result.rows;

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
                "code": "hwglwfwkjlyw",
                "scope": "hwglwfwkjlyw",
                "table": "sellorders",
            });
            return result.rows.sort();
        }
        catch(err){
            console.error(err);
        }
    }

}

export default ApiServiceZ;