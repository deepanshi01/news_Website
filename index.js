// Ajax help to make this News Website

//  GNews :- 72207d734f071ce424df0a2d3e29ff14
console.log("create a news app")

//Initialize the news api parameters
let apiKey = '72207d734f071ce424df0a2d3e29ff14';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=${apiKey}`, true);

//What to do when response is ready
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        // console.log(json);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(articles[news]);
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            <b>Breaking News ${index+1}</b> ${element["title"]}
            </button>
            </h2>
            </div>
            
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body">
            ${element["content"]}.<a href="${element['url']}" target="_blank"> Read more here</a>
            </div>
            </div>
            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
    }
}
xhr.send()