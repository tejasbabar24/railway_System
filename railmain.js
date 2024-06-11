const stationName = document.getElementById('Station_val');

console.log(stationName);

stationName.addEventListener('click', async function() {
    const fetchData = async function() {
        const trainOptions = {
            method: 'POST',
            url: 'https://trains.p.rapidapi.com/',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'abce444ea5msh31571845bd1bf29p18767fjsn857ed4156b68',
                'X-RapidAPI-Host': 'trains.p.rapidapi.com'
            },
            data: { search: stationName.value } // Use stationName.value to get the input value
        };

        try {
            const trainResponse = await axios.request(trainOptions);

            populateTrainTable(trainResponse.data);
            console.log('Train Data:', trainResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    const populateTrainTable = function(data) {
        const trainData = document.getElementById('trainData');
        trainData.innerHTML = '';

        data.forEach(function(train) {
            const row = trainData.insertRow();
            row.insertCell().textContent = train.name;
            row.insertCell().textContent = train.train_num;
            row.insertCell().textContent = train.train_from;
            row.insertCell().textContent = train.train_to;
            row.insertCell().textContent = train.data.departTime;
            row.insertCell().textContent = train.data.arriveTime;
        });
    };

    fetchData();
});
