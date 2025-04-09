function expandCard(card) {
  const alreadyExpanded = card.classList.contains('expanded');

  // Collapse all cards
  const allCards = document.querySelectorAll('.experience-card');
  allCards.forEach(c => c.classList.remove('expanded'));

  // If not already expanded, expand this one
  if (!alreadyExpanded) {
    card.classList.add('expanded');
  }
}

