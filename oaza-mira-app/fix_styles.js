const fs = require('fs');

const filesToFixButtons = [
  'src/app/[lang]/families/page.tsx',
  'src/app/[lang]/institutions/page.tsx',
  'src/app/[lang]/business/page.tsx',
  'src/app/[lang]/providers/page.tsx',
  'src/components/layout/Navbar.tsx'
];

filesToFixButtons.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all combinations of the slate-900 button
    content = content.replace(/className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600\/30 hover:-translate-y-0\.5 transition-all"/g, 'className="portal-login-btn inline-flex items-center justify-center px-8 py-4 font-bold"');
    
    content = content.replace(/className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600\/30 hover:-translate-y-1 transition-all"/g, 'className="portal-login-btn inline-flex items-center justify-center px-10 py-5 font-bold text-lg"');
    
    content = content.replace(/className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-slate-900 !text-white font-bold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600\/30 hover:-translate-y-0\.5 transition-all w-full lg:w-auto text-center"/g, 'className="portal-login-btn inline-flex items-center justify-center px-8 py-3 font-bold w-full lg:w-auto text-center"');

    // Make sure 'Login' also gets !text-white if not caught by portal-login-btn (portal-login-btn already has it)
    fs.writeFileSync(file, content);
    console.log("Fixed buttons in " + file);
  }
});

if (fs.existsSync('src/components/layout/Footer.tsx')) {
  let footerContent = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
  footerContent = footerContent.replace(/text-slate-400/g, '!text-slate-400');
  footerContent = footerContent.replace(/text-slate-500/g, '!text-slate-500');
  footerContent = footerContent.replace(/text-white/g, '!text-white');
  footerContent = footerContent.replace(/text-emerald-500/g, '!text-emerald-500');
  footerContent = footerContent.replace(/text-emerald-400/g, '!text-emerald-400');
  footerContent = footerContent.replace(/!!text-/g, '!text-'); // prevent double !!
  fs.writeFileSync('src/components/layout/Footer.tsx', footerContent);
  console.log("Fixed text colors in Footer.tsx");
}

