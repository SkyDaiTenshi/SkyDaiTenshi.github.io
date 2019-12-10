const mainURL = 'https://api.giphy.com/v1/gifs/';
const apiKey = `j99F6FK9wcELlAPJnktep9Hxk5Qc8b2s`;
const limitSearch = '16';
let keyword = document.getElementById("zone").textContent.split(" ");



loadContent(`${mainURL}search?&api_key=${apiKey}&q=${keyword[0]}&limit=${limitSearch}&offset=0&rating=G&lang=eng`);

document.getElementById("changePet").addEventListener("click", function(){
  window.location = 'https://skydaitenshi.github.io/index.html';
}); 

document.getElementById("home").addEventListener("click", function(){
  let pet = document.getElementById("zone").textContent.split(" ");
  

  window.location = "https://skydaitenshi.github.io/animalPages/"+pet[0].toLocaleLowerCase()+".html";
}); 

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {

    keyword[0] = document.getElementById("searchInput").value;
    loadContent(`${mainURL}search?&api_key=${apiKey}&q=${keyword[0]}&limit=${limitSearch}&offset=0&rating=G&lang=eng`);
    document.getElementById("searchInput").value="";
  }
});

  function loadContent (getUrl) {
    fetch(getUrl)
    .then(response => {
        return response.json()
      })
      .then(data => {
        let gifData = data.data;
        let gifUrls=[];
        let trendGrid = document.getElementById("trendGrid");
        trendGrid.innerHTML="";
     
        gifData.forEach(element => {
          gifUrls.push(element.images.original.url)
        });
        for (let i=0; i<gifUrls.length; i++){
        trendGrid.innerHTML += '<img src="'+gifUrls[i]+' "class="gallery__img" />';
        }
    
      })
      .then(
    
      )
    
      .catch(err => {
        console.log("Fetch Error");
      })
  }