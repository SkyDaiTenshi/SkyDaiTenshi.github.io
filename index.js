const mainURL = 'https://api.giphy.com/v1/gifs/';
const apiKey = `j99F6FK9wcELlAPJnktep9Hxk5Qc8b2s`;
const limitSearch = '16';
const getUrl = `${mainURL}search?&api_key=${apiKey}&q=$cats&limit=${limitSearch}&offset=0&rating=G&lang=eng`;
fetch(getUrl)
.then(response => {
    return response.json()
  })
  .then(data => {
    let gifData = data.data;
    let gifUrls=[];
    let trendGrid = document.getElementById("trendGrid");
 
    gifData.forEach(element => {
      gifUrls.push(element.images.original.url)
    // let img = new Image();    
    // trendGrid.innerHTML += '<img src="'+img.src+' "class="gallery__img" />';
    // img.src = element.images.original.url;
    });
    console.log(gifUrls)
    for (let i=0; i<gifUrls.length; i++){
    trendGrid.innerHTML += '<img src="'+gifUrls[i]+' "class="gallery__img" />';
    }

  })
  .then(

  )

  .catch(err => {
    console.log("Fetch Error");
  })

let gridBuilder = document.getElementById('trendGrid');

