const mainURL = 'https://api.giphy.com/v1/gifs/';
const apiKey = `j99F6FK9wcELlAPJnktep9Hxk5Qc8b2s`;
const limitSearch = '5';
const getUrl = `${mainURL}trending?api_key=${apiKey}&limit=${limitSearch}&rating=G`;
console.log("hi");
fetch(getUrl)
.then(response => {
    return response.json()
  })
  .then(data => {
    let gifUrls = data.data;
    let trendGrid = document.getElementById("trendGrid");
    console.log(gifUrls)
    gifUrls.forEach(element => {
      let img = img = new Image();
      trendGrid.innerHTML += '<img src="'+element.url+'" />';
    });

  })
  .catch(err => {
    console.log("Fetch Error");
  })

let gridBuilder = document.getElementById('trendGrid');

