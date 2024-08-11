const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('searchBox');
const searchResult = document.getElementById('searchResult');
const showMoreBtn = document.getElementById('showMoreBtn');
const accessKey = 'zhLrbL8sgsXkC-xuaO13mipTIlewVlYqj3DPw1CY20o'

let keyword = '';
let page = 1;


async function searchImages(){
 keyword = searchBox.value;
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;

 const response = await fetch(url);
 const data = await response.json();
 
if(page === 1){
 searchResult.innerHTML = '';
}

 const results = data.results;

 results.map((results) =>{
  const image = document.createElement("img"); 
  image.src = results.urls.small;

  const imageLink = document.createElement('a');
  imageLink.href = results.links.html;

  imageLink.target = "_blank";

  imageLink.appendChild(image);

  searchResult.appendChild(imageLink);
 })
 showMoreBtn.style.display = 'block';
}

searchForm.addEventListener("submit", (e) => {
 e.preventDefault();
 page = 1;
 searchImages()
})


showMoreBtn.addEventListener('click', ()=>{
 page++;
 searchImages();
})

