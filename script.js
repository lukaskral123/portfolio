function showSection(sectionId) {
    // Skryj úvodní obrázek
    document.getElementById('mainImage').style.display = 'none';
    
    // Skryj všechny sekce
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Zobraz vybranou sekci
    const active = document.getElementById(sectionId);
    if (active) {
        active.classList.remove('hidden');
    }
}

// Tmavý a světlý režim
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}

// Výchozí režim - světlý
document.body.classList.add('light-theme');
