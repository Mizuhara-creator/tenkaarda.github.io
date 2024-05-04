document.getElementById('showMoreBtn').addEventListener('click', function() {
    var detailsSection = document.getElementById('characterDetails');
    if (detailsSection.classList.contains('show')) {
        detailsSection.classList.remove('show');
        this.textContent = 'Tampilkan Detail';
    } else {
        detailsSection.classList.add('show');
        this.textContent = 'Sembunyikan Detail';
    }
});
