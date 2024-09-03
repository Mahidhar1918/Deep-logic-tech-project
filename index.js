let metadata=[];
fetch('http://127.0.0.1:5500/db.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    metadata=data
    dataDisplay()
  })
  .catch(error => console.error('Error:', error));

const newsContainer = document.getElementById('news-container');
const dataDisplay=()=>{


metadata.forEach(news => {
    const card = document.createElement('div');
    card.classList.add('news-card');

    const title = document.createElement('div');
    title.classList.add('news-title');
    title.textContent = news.title;

    const link = document.createElement('a');
    link.classList.add('news-link');
    link.href = news.link;
    link.textContent = 'Read more';

    card.appendChild(title);
    card.appendChild(link);
    newsContainer.appendChild(card);
});
}