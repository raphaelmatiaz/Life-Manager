// DOM Constants

const newPostButton = document.getElementById("new-task-button");
newPostButton.addEventListener("click", () => { newPost() });

const healthCheckButton = document.getElementById("health-check-button");
healthCheckButton.addEventListener("click", () => { healthCheck()} );

const SampleTaskButton = document.getElementById("get-sample-task-button");
SampleTaskButton.addEventListener("click", () => { getSampleTask() })

// const submitNewTaskFormButton = document.getElementById("form-submit-button");
// submitNewTaskFormButton.addEventListener("click", () => { handleNewTaskFormSubmition() })

const form = document.getElementById("new-task-form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // ⛔ stops reload
    handleNewTaskFormSubmition();
});


// Handler Functions

function handleNewTaskFormSubmition() {
    newTask();
    console.log("Form Submited")
}


// FRONTEND API CALLS

 async function newTask() {

    const taskName = document.getElementById("new-task-name").value;
    const taskCategory = document.getElementById("new-task-category").value;
    const taskDeadline = document.getElementById("new-task-deadline").value;
    const taskPriority = document.getElementById("new-task-priority").value;

    const newTask = {
        name: taskName,
        category: taskCategory,
        deadline: taskDeadline,
        priority: taskPriority  
    }

    const response = await fetch('http://localhost:3000/newTask', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
         });
    
    const data = await response.json();
    console.log(data)

};

async function getSampleTask() {
    const response = await fetch('http://localhost:3000/sampleTask', { method: 'GET' })
    // Method 1 (standard )
    // const data = await response.json();

    // Method 2 (should work but dosen't, use method 1)
    const responseBody = await response.text();
    const data = JSON.parse(responseBody);

    // Method 3 (if you want to swing your d around and flex with useless syntax oversimplification that actually complicates readability instead of improving it)
    // .then(response => response.json)
    // .then(data => console.log(data)) 
    // Explanation
    //.then() is a method of the response object. 
    // it receives one argument, which is a function
    // "response" is a single argument of that function, so instead of appearing as (response) => ..., it just appears as "response"
    // the " => " indicates that its an arrow function, its good for small anonymouse functions
    // the code block of the function is only one line long, therefore, JS allows it to be written without curly braces "{}" and it makes the return statement implicit (noncensicle to me but it is what it is)
    // so writing respopnse => response.json is exactly the same as writing
    
                // (response) => {
                //     return response.json()
                // }

    // but its argued to be cleaner and more consise, so chatgpt spits it out when you ask for a response handling logic, and no one car read it
    // the nonsense continues: .then() returns a promise object (not sure how, not sure why, but it does)
    //this means that .then() can be called on a .then() statement, which is bullshit, but sure, in JS anythings possible.
    // and JS won't complain if we add line breaks in its code statements, apparently, so this is why instead of:

        // ...then().then().then()...

        // we see 

        // ...then()
        // .then()
        // .then()
        // ... etc
    
    console.log(data);
}

async function healthCheck() {
    const response = await window.fetch("http://localhost:3000/hello", { method: 'GET' });
    const message = await response.text(); // Read the body as text
    console.log(message); // <--    // Log it. This will print: Hello World!
}


