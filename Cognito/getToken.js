const auth = require('../getidtoken/auth/nodejs/node_modules/auth');

exports.handler= async function getToken(event){
    try {
        const params = JSON.parse(event.body);
        const userpoolid = process.env.PoolID;
        const clientid = process.env.AppID;

        params["userpoolid"] = userpoolid;
        params["clientid"] = clientid;
        console.log(typeof(params));
        console.log('event.body', params);


        // get id token from Cognito and return it to API Gateway
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                    id_token: await auth.handler(params)
            }, null, 2)
        }

        return response
    } catch (err) {
        console.log(err);
        return err;
    }

};