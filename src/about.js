export default function loadHome(){
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'About Khaudras!';

    const description = document.createElement('p');
    description.textContent = 'Khaudras is a restaurant that serves delicious food from around the world. Our mission is to provide an unforgettable dining experience with a diverse menu and exceptional service.';

    content.appendChild(headline);
    content.appendChild(description);
}