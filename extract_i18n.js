const fs = require('fs');
const cheerio = require('cheerio');

const pages = ['about', 'contact', 'imprint', 'privacy-policy', 'disclaimer-page'];
const i18nDict = { en: {}, de: {}, hr: {} };

// Generate simple hash for keys
function hashText(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36);
}

pages.forEach(page => {
    if (!fs.existsSync(`${page}.html`)) return;
    const html = fs.readFileSync(`${page}.html`, 'utf-8');
    const $ = cheerio.load(html);
    
    // Target text elements. We avoid navbar since it's already translated.
    // Also avoid empty spaces
    $('h1, h2, h3, h4, p, .text-block, .startups-copy, .heading').not('.navbar-wrapper-2 *').each((i, el) => {
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        // If it's pure text or simple formatting, and meaningful length
        if (text && text.length > 2 && !$(el).attr('data-i18n')) {
            const children = $(el).children();
            
            // Generate key
            const key = `${page}.${hashText(text)}`;
            
            // Assign attribute
            $(el).attr('data-i18n', key);
            
            // Add to dictionary
            i18nDict.en[key] = text;
        }
    });
    
    // Specific buttons that might not be caught
    $('a.btn-wrapp .text-inner div').not('.navbar-wrapper-2 *').each((i, el) => {
        const text = $(el).text().trim();
        if (text && text.length > 2 && !$(el).attr('data-i18n')) {
            const key = `btn.${hashText(text)}`;
            $(el).attr('data-i18n', key);
            i18nDict.en[key] = text;
        }
    });

    fs.writeFileSync(`${page}.html`, $.html());
    console.log(`Extracted i18n for ${page}.html`);
});

fs.writeFileSync('i18n_extracted.json', JSON.stringify(i18nDict, null, 2));
console.log('Saved i18n_extracted.json');
