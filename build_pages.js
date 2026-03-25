const fs = require('fs');
const cheerio = require('cheerio');

// Load index.html to grab the exact navbar
const indexHtml = fs.readFileSync('index.html', 'utf-8');
const $index = cheerio.load(indexHtml);
const newNavbar = $index('div.navbar-no-shadow-2').parent().html();

const pages = ['about', 'contact', 'imprint', 'privacy-policy', 'disclaimer-page'];

pages.forEach(page => {
    const srcFile = `src_${page}.html`;
    if (!fs.existsSync(srcFile)) return;
    
    console.log(`Processing ${srcFile}...`);
    const html = fs.readFileSync(srcFile, 'utf-8');
    const $ = cheerio.load(html);
    
    // Replace old navbar
    $('div.navbar-no-shadow-2').replaceWith(newNavbar);
    
    // Remove the language redirect scripts
    $('script').each((i, el) => {
        const text = $(el).html();
        if (text && text.includes("window.location.href = '/hr'")) {
            $(el).remove();
        }
    });

    // Remove pre-existing i18n script if any to avoid duplicates
    $('script[src="js/i18n.js"]').remove();
    
    // Inject i18n
    $('body').append('<script src="js/i18n.js"></script>\n');
    
    fs.writeFileSync(`${page}.html`, $.html());
    console.log(`Successfully built ${page}.html`);
});
