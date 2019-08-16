'use strict';
// const axios = require('axios');
const got = require('got')
const scrapService = require('../services').scrapService;

class ScrapController {
  constructor() { }
  async getData(targetUrl) {
    // const result = await axios.get(url);
    const { body: html, url } = await got(targetUrl)
    await scrapService.getData({ html, url });
  }
}

module.exports = new ScrapController()
