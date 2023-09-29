let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value.trim() === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}<p>
    <span class="options">
      <i class="fas fa-edit" onClick="editPost(this)"></i>
      <i class="fas fa-trash-alt" onClick="deletePost(this)"></i>
    </span>
  </div>         
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.parentElement.remove();
}

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.parentElement.remove();
}
