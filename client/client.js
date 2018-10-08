
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/posts';

loadingElement.style.display = 'none';

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  const post = {
    name,
    content
  };

  loadingElement.style.display = '';
  form.style.display = 'none';

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'content-type': 'application/json'
    }
  })
});
