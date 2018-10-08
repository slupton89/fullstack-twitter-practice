
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const postsElement = document.querySelector('.posts');
const API_URL = 'http://localhost:5000/posts';

loadingElement.style.display = 'none';

listAllPosts();

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
  }).then(response => response.json())
    .then(createdPost => {
      form.reset();
      setTimeout(() => {
        form.style.display = '';
      }, 30000);
      listAllPosts();
    })
});

function listAllPosts() {
  postsElement.innerHTML = '';
  fetch(API_URL)
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
      posts.reverse();
      posts.forEach(post => {
        const div = document.createElement('div');

        const header = document.createElement('h3');
        header.textContent = post.name;

        const contents = document.createElement('p');
        contents.textContent = post.content;

        const date = document.createElement('small');
        date.textContent = new Date(post.created);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(date);

        postsElement.appendChild(div);
      });
      loadingElement.style.display = 'none';
    })
}