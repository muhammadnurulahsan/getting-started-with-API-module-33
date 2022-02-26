function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPost(data));
}
loadPost();
function displayPost(posts) {
  const postContainer = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      `;
    postContainer.appendChild(div);
  }
}

function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "My New Post",
      body: "This is my new post",
      userId: 01,
    }),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function addPost2() {
  fetch("https://jsonplaceholder.typicode.com/pusts", {
    method: "POST",
    body: JSON.stringify({
      title: "My New Post",
      body: "This is my new post",
      userId: 01,
    }),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
