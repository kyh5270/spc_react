import axios from 'axios';

export function getPost(postId) {
  //  return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);npm
  //  return axios.get('http://10.151.13.160:8080/data/test.js');
    // return axios.get('/data/test.js');
    return axios.get('/api/timecheck/hello');

}

export function getComments(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}

//문자열 내에 변수를 넣을때 ${~~~}를 쓰는데
//이때 문자열을 감싸는 따옴표는 숫자 1옆에 있는 ` 임