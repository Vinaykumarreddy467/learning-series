document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const filter = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filter === 'all' || filter === cardCategory) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});