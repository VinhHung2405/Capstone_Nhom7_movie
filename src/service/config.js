import axios from "axios";
import { store } from "..";
import { useDispatch } from "react-redux";
// import { turnOffLoadingAction, turnOnLoadingAction } from "../redux/action/spinner";

const TOKEN_CYBERSOFT =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjAzLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMjEwMjQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEyMjUwMDAwfQ.YeDhc_oSixV2XtFPDzcpxFhBos5832JpQpndHNoqZLk";

export let https= axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn",
    headers:{
        TokenCybersoft: TOKEN_CYBERSOFT,
    }
})
// let dispatch = usedispatch();(khong dung nhu nay dc)
//dispatch ngoai component(dung store.dispatch)

// axios interceptors
// https.interceptors.request.use(function (config) {
//     console.log("api di")
//     store.dispatch(turnOnLoadingAction());
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

// https.interceptors.response.use(function (response) {
//     console.log("api ve")
//     store.dispatch(turnOffLoadingAction());
//     return response;
//   }, function (error) {
//     return Promise.reject(error);
//   });