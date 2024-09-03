// Fetch data from the server and handle the response
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  // Create and return a news card element
  function createNewsCard(news) {
    const card = document.createElement('div');
    card.classList.add('news-card');
  
    const title = document.createElement('div');
    title.classList.add('news-title');
    title.textContent = news.title;
  
    const link = document.createElement('a');
    link.classList.add('news-link');
    link.href = news.link;
    link.textContent = 'Read more';
    link.target = '_blank'; // Opens the link in a new tab
  
    card.appendChild(title);
    card.appendChild(link);
  
    return card;
  }
  
  // Display the fetched news data in the DOM
  function displayNews(newsData) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear existing content
  
    newsData.forEach(news => {
      const newsCard = createNewsCard(news);
      newsContainer.appendChild(newsCard);
    });
  }
  
  // Main function to execute the fetching and displaying process
  async function main() {
    const url = 'http://127.0.0.1:5500/db.json';
    const newsData = await fetchData(url);
    displayNews(newsData);
  }
  
  // Initialize the application
  main();
  