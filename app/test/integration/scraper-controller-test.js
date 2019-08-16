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
    const html = fs.readFileSync('https://www.adastria.co.jp/english/', 'utf-8')
    const meta = await metascraper({ html, url });
    should(meta.logo).be.equal(null)
  })
})

describe('metascraper-description', () => {
    it('it resolves image value', async () => {
      const html = fs.readFileSync('https://www.adastria.co.jp/english/', 'utf-8')
      const meta = await metascraper({ html, url });
      should(meta.logo).be.equal("https://www.adastria.co.jp/shared/images/logo2.png")
    })
  })

  describe('metascraper-description', () => {
    it('it resolves title value', async () => {
      const html = fs.readFileSync('https://www.adastria.co.jp/english/', 'utf-8')
      const meta = await metascraper({ html, url });
      should(meta.logo).be.equal("Adastria Co., Ltd.")
    })
  })