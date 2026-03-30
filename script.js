let workouts = [];

function addWorkout() {
    const exercise = document.getElementById("exercise").value;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;

    if (exercise === "" || sets === "" || reps === "") {
        alert("Please fill all fields");
        return;
    }

    const workout = {
        name: exercise,
        sets: sets,
        reps: reps,
        completed: false
    };

    workouts.push(workout);

    // Clear inputs
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";

    displayWorkouts(); // IMPORTANT
}

function displayWorkouts() {
    const list = document.getElementById("workoutList");
    list.innerHTML = "";

    workouts.forEach((workout) => {
        const li = document.createElement("li");
        li.textContent = workout.name + " - " + workout.sets + " sets x " + workout.reps + " reps";
        list.appendChild(li);
    });
}