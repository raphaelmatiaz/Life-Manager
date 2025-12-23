
// window.alert("script connected to html!")
// import { database } from "./database";

const newPostButton = document.getElementById("new-task-button");
newPostButton.addEventListener("click", () => { newPost() });

const newPost = async () => {
    window.alert("new task added!");
    const request = await fetch('http://localhost:3000/task', { method: 'POST' });
    const response = await request.json(); // now works
    console.log(response);
};


