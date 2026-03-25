from bs4 import BeautifulSoup
import os

def build_pages():
    # Read index.html to get the navbar
    with open('index.html', 'r', encoding='utf-8') as f:
        index_soup = BeautifulSoup(f.read(), 'html.parser')
    
    navbar = index_soup.find('div', class_='navbar-no-shadow-2')
    
    pages = ['families', 'business', 'institutions', 'providers']
    
    for page in pages:
        src_file = f'src_{page}.html'
        if not os.path.exists(src_file):
            print(f"Skipping {src_file}")
            continue
            
        with open(src_file, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            
        # Replace navbar
        old_navbar = soup.find('div', class_='navbar-no-shadow-2')
        if old_navbar and navbar:
            old_navbar.replace_with(navbar)
            
        # Remove language redirect script
        for script in soup.find_all('script'):
            if script.string and 'window.location.href = \'/hr\'' in script.string:
                script.decompose()
                
        # Inject i18n.js
        body = soup.find('body')
        if body:
            new_script = soup.new_tag('script', src='js/i18n.js')
            body.append(new_script)
            
        # Save new html
        out_file = f'{page}.html'
        with open(out_file, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print(f"Built {out_file}")

if __name__ == '__main__':
    build_pages()
