document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq__item');

  const toggleAnswerVisibility = (event) => {
    const item = event.currentTarget.parentNode;
    item.classList.toggle('active');
  };

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', toggleAnswerVisibility);
  });
});
