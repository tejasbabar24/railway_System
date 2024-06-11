const data = JSON.stringify({
  search: 'Rajdhani'
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
      console.log(this.responseText);
  }
});

xhr.open('POST', 'https://trains.p.rapidapi.com/');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-RapidAPI-Key', 'd21c54aaa4mshf0d7ee2657c1598p12d975jsn482e5077356b');
xhr.setRequestHeader('X-RapidAPI-Host', 'trains.p.rapidapi.com');

xhr.send(data);
