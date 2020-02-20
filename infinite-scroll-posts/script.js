const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

const page = 1;
const limit = 3;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);

  data.forEach(post => {
    console.log(post);

    const currentPost = document.createElement("div");
    currentPost.classList.add("post");
    currentPost.innerHTML = `<div class="number">${post.id}</div>
    <div class="post-info">
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body">
    ${post.body}
    </p>
    </div>`;

    postsContainer.appendChild(currentPost);
  });
  return data;
}
getPosts();
