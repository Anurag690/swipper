import { bhopapi, apiEndpoints } from '../store/constants/config';
import { create } from 'apisauce';

function getApiService() {
    let api = create({
        baseURL: bhopapi
    });
    return api;
}
export const postServices = {
    getPosts: function() {
        return new Promise((resolve, reject)=>{
            let api = getApiService();
            api.get(apiEndpoints.posts)
            .then(result=>{
                checkForApiResultData(resolve, result);
            }).catch(err=>{
                console.log(err);
                reject({
                    Error: "Something went wrong!"
                });
            })
        })
    }
}
function checkForApiResultData(resolve, result) {
    console.log(result);
    if(result.data) {
        // if(result.data.Error!==undefined || result.data.Response) {
        //     resolve(result.data);
        // }else {
        //     resolve({
        //         Error: {
        //             ErrorMsg: "Unauthorized access",
        //             ErrorCode: 404
        //         }
        //     })
        // }
        resolve(result.data);
    }else {
        resolve({
            Error: {
                ErrorMsg: "Something went wrong!"
            }
        });    
    }
}