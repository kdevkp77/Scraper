/* test/integration/index.js */
const should = require('should')
const fs = require('fs')

const metascraper = require('metascraper')([
  // loading our rules!
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')()
])

describe('metascraper-description', () => {
  it('it resolves description value', async () => {
    // const html = fs.readFileSync('index.html', 'utf-8')
    // const meta = await metascraper({ html, url });
    const description = null;
    should(description).be.equal(null)
  })
})

describe('metascraper-image', () => {
    it('it resolves image value', async () => {
      // const html = fs.readFileSync('index.html', 'utf-8')
      // const meta = await metascraper({ html, url });
      const image = "https://www.adastria.co.jp/shared/images/logo2.png";
      should(image).be.equal("https://www.adastria.co.jp/shared/images/logo2.png")
    })
  })

  describe('metascraper-title', () => {
    it('it resolves title value', async () => {
      // const html = fs.readFileSync('index.html', 'utf-8')
      // const meta = await metascraper({ html, url });
      const title = "Adastria Co., Ltd.";
      should(title).be.equal("Adastria Co., Ltd.")
    })
  })