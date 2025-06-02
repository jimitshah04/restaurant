export default function loadHome(){
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Menu of Khaudras!';

    const description = document.createElement('ul');
    const items = [
        'Spaghetti Carbonara - $12.99',
        'Margherita Pizza - $10.99',
        'Caesar Salad - $8.99',
        'Grilled Salmon - $15.99',
        'Chocolate Lava Cake - $6.99'
    ];
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        description.appendChild(listItem);
    })

    content.appendChild(headline);
    content.appendChild(description);
}