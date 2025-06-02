import loadHome from './home';
import loadAbout from './about';
import loadMenu from './menu';
import './style.css';

loadHome();

function animateContentChange(loadFn) {
  const content = document.getElementById('content');
  content.classList.add('fade-out');
  setTimeout(() => {
    loadFn();
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
    setTimeout(() => {
      content.classList.remove('fade-in');
    }, 600); // Match the CSS transition duration
  }, 600); // Match the CSS transition duration
}

document.getElementById('home-btn').addEventListener('click', () => animateContentChange(loadHome));
document.getElementById('about-btn').addEventListener('click', () => animateContentChange(loadAbout));
document.getElementById('menu-btn').addEventListener('click', () => animateContentChange(loadMenu));