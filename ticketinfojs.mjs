import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/8531575878',
  headers: {
    'X-RapidAPI-Key': 'abce444ea5msh31571845bd1bf29p18767fjsn857ed4156b68',
    'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
  },
  data: { search:'2905143354'}
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
// history is not good i am not trying to  