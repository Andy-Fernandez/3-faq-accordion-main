const faqButtons = document.querySelectorAll('.faq-question button');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    
    // Toggle aria-expanded
    button.setAttribute('aria-expanded', !expanded);
    
    // Get the associated answer and toggle visibility
    const answerId = button.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
    answer.style.display = expanded ? 'none' : 'block';
  });
});


