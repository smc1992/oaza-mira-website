const fs = require('fs');
const cheerio = require('cheerio');

const pages = [
  'index', 'families', 'business', 'institutions', 'providers',
  'about', 'contact', 'imprint', 'privacy-policy', 'disclaimer-page'
];

pages.forEach(page => {
    const file = `${page}.html`;
    if (!fs.existsSync(file)) return;
    
    console.log(`Removing Webflow intercepts on ${file}...`);
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);
    
    // Remove w-nav, w-nav-menu, w-nav-button from nav containers so webflow.js ignores them
    $('.w-nav').removeClass('w-nav');
    $('.w-nav-menu').removeClass('w-nav-menu');
    $('.w-nav-button').removeClass('w-nav-button');
    
    fs.writeFileSync(file, $.html());
    console.log(`Successfully fixed ${file}`);
});
