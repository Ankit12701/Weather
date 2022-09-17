const url = "https://restcountries.com/v2/all";

let country = (url) => {
  fetch(url, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((response) => {
      country_data(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

country(url);

let grid = document.getElementById("grid")

let country_data = (data) => {
  for (let i = 0; i < data.length; i++) {
   
    let name = document.createElement("h1")
    name.innerHTML = data[i].name
    grid.appendChild(name)

    let image = document.createElement('img')
    image.src = data[i].flag
    image.alt = "image of data" + i
    grid.appendChild(image)

    let capital = document.createElement('h3')
    capital.innerHTML ="Capital- "+ data[i].capital
    grid.appendChild(capital)
    
    let region = document.createElement('h3')
    region.innerHTML ="Region- "+ data[i].region
    grid.appendChild(region)

    let latlang = data[i].latlng;
    let latlng = document.createElement('h3')
    if(latlang===undefined)
    latlng.innerHTML="data not available"
    else
    latlng.innerHTML = latlang[0]+","+latlang[1]
    grid.appendChild(latlng)

    let numericCode = document.createElement('h3')
    numericCode.innerHTML ="Country Numeric Code- "+ data[i].numericCode
    grid.appendChild(numericCode)

    let button = document.createElement('button')
    button.textContent = "click to see weather details"
    grid.appendChild(button)
    button.addEventListener('click', function () {
      
      let capital = data[i].capital
      let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=88beb73615e80a90aeefc0bd876d7ccd`
        let basic2 = (url2) => {
        fetch(url2, {
          method: "GET",
        })
          .then((data) => data.json())
          .then((response) => {
            display2(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };


      let display2 = (data) => {
       
        let grid = document.getElementById("grid")
        let visbility = document.getElementById(`visbility${i}`)
        if (data.visibility == undefined)
          visbility.innerHTML = "data not availble"
        else
          visbility.innerHTML = "visibility- " + data.visibility 
       
        let temp = document.getElementById(`temp${i}`)
        if (data.main.temp == undefined)
          temp.innerHTML = "data not available"
        else
          temp.innerHTML = "temp- " + data.main.temp
     
        let pressure = document.getElementById(`pressure${i}`)
        if (data.main.pressure === undefined)
          pressure.innerHTML = "data not available"
        else
          pressure.innerHTML = "temp- " + data.main.pressure
        
        let humidity = document.getElementById(`humidity${i}`)
        if (data.main.humidity == undefined)
          humidity.innerHTML = "data not available"
        else
          humidity.innerHTML = "humidity- " + data.main.humidity 
        
      };

      basic2(url2);
    })
    let visbility = document.createElement("h3")
    visbility.setAttribute('id', `visbility${i}`)
    grid.appendChild(visbility)

    let temp = document.createElement("h3")
    temp.setAttribute('id', `temp${i}`)
    grid.appendChild(temp)

    let pressure = document.createElement("h3")
    pressure.setAttribute('id', `pressure${i}`)
    grid.appendChild(pressure)

    let humidity = document.createElement("h3")
    humidity.setAttribute('id', `humidity${i}`)
    grid.appendChild(humidity)

  }
}