const newPostHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('.name').value
  const id = document.querySelector('.id').textContent
  const description = document.querySelector('.postText').value

  const data = {
    name: name,
    description : description,
    user_id : id
  }
  console.log(data);

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.createPost')
  .addEventListener('submit', newPostHandler)
