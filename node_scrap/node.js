const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://www.leagueofgraphs.com/pt/summoner/br/Ayel-0001";
const headers = {
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "accept-language": "en-US,en;q=0.9",
  "cache-control": "max-age=0",
  "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Brave\";v=\"121\", \"Chromium\";v=\"121\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"Linux\"",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "none",
  "sec-fetch-user": "?1",
  "sec-gpc": "1",
  "upgrade-insecure-requests": "1",
  cookie: "lolg_euconsent=nitro; languageBanner_en_count=6"
};

axios.get(url, { headers })
  .then(response => {
    const html = response.data;
    // Handle the response here
    const $ = cheerio.load(html);
    const title = $('span.leaguePoints.highlight').text();
    console.log(title); // Access the response data
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });
