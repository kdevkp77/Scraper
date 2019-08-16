/**
 * Route configuration
 */

'use strict';

const scrapAPI = require('../controllers/scraper.controller');

class Scrap {
  constructor() {}
  async scrap() {
    const targetUrl = 'https://www.adastria.co.jp/english/';
    await scrapAPI.getData(targetUrl);
  }
}
module.exports = new Scrap();