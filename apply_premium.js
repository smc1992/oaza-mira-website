const fs = require('fs');
const cheerio = require('cheerio');

const pages = [
  'index', 'families', 'business', 'institutions', 'providers',
  'about', 'contact', 'imprint', 'privacy-policy', 'disclaimer-page'
];

const pathsToMap = {
  '/': 'index.html',
  '/families': 'families.html',
  '/business': 'business.html',
  '/companies': 'business.html', // Alias
  '/institutions': 'institutions.html',
  '/providers': 'providers.html',
  '/caretakers': 'providers.html', // Alias
  '/about': 'about.html',
  '/contact': 'contact.html',
  '/imprint': 'imprint.html',
  '/privacy-policy': 'privacy-policy.html',
  '/disclaimer-page': 'disclaimer-page.html',
  '/newsletter-page': '#newsletter',
  '#': '#'
};

pages.forEach(page => {
    const file = `${page}.html`;
    if (!fs.existsSync(file)) return;
    
    console.log(`Applying premium styling and fixing links on ${file}...`);
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);
    
    // 1. Fix all local navigation links
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href && pathsToMap[href]) {
            $(el).attr('href', pathsToMap[href]);
        } else if (href && href.startsWith('/#')) {
            $(el).attr('href', href.replace('/', 'index.html'));
        }
    });
    
    // 2. Inject Google Fonts for Space Grotesk and Inter
    if (!$('link[href*="Space+Grotesk"]').length) {
        $('head').append('<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">\n');
    }

    // 3. Inject premium-design.css
    if (!$('link[href*="premium-design.css"]').length) {
        $('head').append('<link rel="stylesheet" href="css/premium-design.css">\n');
    }
    
    fs.writeFileSync(file, $.html());
    console.log(`Successfully updated ${file}`);
});
