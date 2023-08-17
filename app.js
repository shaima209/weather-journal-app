

 let {response}=('express')
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API

const baseURL = 'http://api.openweathermap.org/data/2.5/forcast?zip='
const apiKey = 'http://1b5e029750a85dd79fce394188498611&units=imperial';

// Event listener to add function to existing HTML DOM element 

const generate = document.getElementById('generate')
document.getElementById('generate').addEventListener("click", generate)
generate.addEventListener('click', async () => await performAction());



/* Function called by event listener */

async function performAction(e) {
  const nzip = document.getElementById('zip').value;
  const feels = document.getElementById('feelings').value;
  console.log(nzip);
  console.log(feels);

  
  const response = await fetch ('/all', {
    body: JSON.stringify( {
      temp: nzip,
      content: feels,
      date: newDate
    }),
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },

  })}

/*

  if(response.status == 200) {
    const res = response.json()
    console.log(res);
  }*/

    // futch /all 
    const retrieveData = async () =>{
      const request = await fetch('/all');
      try {
      const allData = await request.json()
      console.log(allData)
      document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
      document.getElementById('content').innerHTML = allData.feel;
      document.getElementById("date").innerHTML =allData.date;
      }
      catch(error) {
        console.log("error", error);
      }
     
    }
;

   


/* Function to GET Web API Data*/

const getWeatherData = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key)
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}


const getData = async (url) => {
  const res = await fetch(url)

  try {
    const data = await res.json()
    return data
  } catch (error) {
    console.log("error", error);
  }
}


/* Function to POST data */

const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

   