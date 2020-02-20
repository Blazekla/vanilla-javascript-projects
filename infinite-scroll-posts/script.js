const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let page = 1;
let limit = 3;

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

//Show loader and fetch more posts
function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");
    page++;
    getPosts();
  }, 1000);
}

window.addEventListener("scroll", () => {
  //Useful HTML properties below
  //   console.log(document.documentElement.scrollTop);
  //   console.log(document.documentElement.scrollHeight);
  //   console.log(document.documentElement.clientHeight);

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});
