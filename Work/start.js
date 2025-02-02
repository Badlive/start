import axios from 'axios'
var a = 4;
var b = 3;
console.log(a+b);

const { data } = await axios.get('https://svetofors.ru/')
  .then(function (response) {
    console.log(response.data);
    return 1;
  });