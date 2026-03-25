const fs = require('fs');
const cheerio = require('cheerio');

const pages = [
  'index', 'families', 'business', 'institutions', 'providers',
  'about', 'contact', 'imprint', 'privacy-policy', 'disclaimer-page'
];

const newNavList = `
<ul role="list" class="nav-menu-2 w-list-unstyled">
    <li class="list-items _1"><a href="index.html" class="nav-link-2" data-i18n="nav.home">Home</a></li>
    <li class="list-items"><a href="about.html" class="nav-link-2" data-i18n="nav.about">About</a></li>
    <li class="list-items"><a href="families.html" class="nav-link-2" data-i18n="nav.families">Families</a></li>
    <li class="list-items"><a href="business.html" class="nav-link-2" data-i18n="nav.companies">Companies</a></li>
    <li class="list-items"><a href="providers.html" class="nav-link-2" data-i18n="nav.caretakers">Care Takers</a></li>
    <li class="list-items"><a href="institutions.html" class="nav-link-2" data-i18n="nav.institutions">Institutions</a></li>
    <li class="list-items"><a href="contact.html" class="nav-link-2" data-i18n="nav.contact">Contact</a></li>
</ul>
`;

pages.forEach(page => {
    const file = `${page}.html`;
    if (!fs.existsSync(file)) return;
    
    console.log(`Fixing Navigation on ${file}...`);
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);
    
    // Replace the UL inside the nav menu wrapper
    $('.nav-menu-wrapper-2 ul.nav-menu-2').replaceWith(newNavList);
    
    // Add translation keys for About and Contact to data-i18n if not present globally
    // Actually the data-i18n tags are enough, we just need to make sure they are translated in i18n.js
    
    fs.writeFileSync(file, $.html());
    console.log(`Successfully updated ${file}`);
});
