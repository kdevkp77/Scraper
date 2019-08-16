'use strict';
 
// const cheerio = require('cheerio');

class ScrapService {
  constructor() {}
  async getData(html) {
    return new Promise(async (resolve, reject) => {
      const metascraper = require('metascraper')([
        require('metascraper-description')(),
        require('metascraper-image')(),
        require('metascraper-title')()
      ]);
      const metadata = await metascraper(html)

      // Using cheerio
      
      // const data = [];
      //   const $ = cheerio.load(html);
      //   $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
      //     data.push({
      //       title: $(elem).text(),
      //       link: $(elem).find('a.storylink').attr('href')
      //     });
      //   });   
      resolve(metadata);
    });
  }
}
module.exports = new ScrapService();