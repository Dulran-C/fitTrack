//load workouts from localStorage or start empty
let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

const list = document.getElementById("workoutList");

//function to add a new workout
function addWorkout() {
    const name = document.getElementById("exerciseName").value.trim();
    const sets = document.getElementById("sets").value.trim();
    const reps = document.getElementById("reps").value.trim();

    //validate input
    if (!name || !sets || !reps) {
        alert("Please fill in all fields!");
        return;
    }

    //create workout object
    const workout = {
        name,
        sets,
        reps,
        completed: false
    };

    //add to workouts array
    workouts.push(workout);

    //save to localStorage
    saveWorkouts();

    //clear input fields
    document.getElementById("exerciseName").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";

    //update display
    displayWorkouts();
}

//function to display all workouts
function displayWorkouts() {
    //clear the current list
    list.innerHTML = "";

    //loop through workouts and create list items
    workouts.forEach((workout, index) => {
        const li = document.createElement("li");
        li.textContent = `${workout.name} - ${workout.sets} sets x ${workout.reps} reps`;

        //apply style if completed
        if (workout.completed) {
            li.classList.add("completed");
        }

        //complete /undo button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = workout.completed ? "Undo" : "Complete";
        completeBtn.onclick = () => {
            workout.completed = !workout.completed;
            saveWorkouts();
            displayWorkouts();
        };

        //delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            workouts.splice(index, 1);
            saveWorkouts();
            displayWorkouts();
        };

        //append buttons to the list item
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        //append list item to the list
        list.appendChild(li);
    });
}

//function to save workouts to localStorage
function saveWorkouts() {
    localStorage.setItem("workouts", JSON.stringify(workouts));
}

//display workouts when page loads
displayWorkouts();