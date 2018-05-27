export const middlewareLog = (req, _api) => {
    console.log('>>>>>>>Middleware log START <<<<<<<<<<<');
    console.log(`a ${req.method} request in ${_api} route.`);
    console.log('query ========>', req.query);
    console.log('params =======>', req.params);
    console.log('body =========>', req.body);
    console.log('>>>>>>>Middleware log END <<<<<<<<<<<');

};


export const initLogPlaceholder = (req, funcName) => {
    console.log('>>>>>>>Controller log START <<<<<<<<<<<');
    console.log(`call from ${funcName}`);
    console.log('query ========>', req.query);
    console.log('params =======>', req.params);
    console.log('body =========>', req.body);
    console.log('>>>>>>>Controller log END <<<<<<<<<<<');

};


export const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
};


// export const Auth = {
//     getToken: (req) => {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;

//         }
//         return null;
//     },
//     getUser: (req) => {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             let token = req.headers.authorization.split(' ')[1];
//             if (token) {
//                 return jwt.decode(req.jwt, config.get('JWT.secret'));
//             }

//         } else if (req.query && req.query.token) {
//             if (req.query.token) {
//                 return jwt.decode(req.query.token, config.get('JWT.secret'));
//             }
//         }
//         return null;
//     }

// };
