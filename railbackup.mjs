import axios from 'axios';

const fetchData = async () => {
    const options = {
        method: 'POST',
        url: 'https://trains.p.rapidapi.com/',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'd21c54aaa4mshf0d7ee2657c1598p12d975jsn482e5077356b',
            'X-RapidAPI-Host': 'trains.p.rapidapi.com'
        },
        data: { search: 'malad' }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

fetchData(); 

  const option = {
    method: 'POST',
    url: 'https://rstations.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'd21c54aaa4mshf0d7ee2657c1598p12d975jsn482e5077356b',
      'X-RapidAPI-Host': 'rstations.p.rapidapi.com'
    },
    data: {search: 'surat'}
  };
  
  try {
      const response = await axios.request(option);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
  