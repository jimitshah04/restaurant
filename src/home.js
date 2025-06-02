export default function loadHome(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.style.background = '#b3e5fc';

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Khaudras!';

    const description = document.createElement('p');
    description.textContent = 'Khaudras is a restaurant.';

    content.appendChild(headline);
    content.appendChild(description);
}