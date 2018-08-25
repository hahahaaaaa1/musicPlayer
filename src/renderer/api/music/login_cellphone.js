import axios from '../axios';

export default function (phone, pwd) {
  const require = new Promise((resolve, reject) => {
    axios.get('/login/cellphone',{
      params:{
        phone: phone,
        password: pwd,
        timestamp: new Date().getTime()
      },
      withCredentials: true
    }).then((data)=> {
      resolve(data.data);
    });
  });
  return require;
}
