//array to store workouts
let workouts = [];

function addWorkout() {
    //get input values
    const exercise = document.getElementById("exercise").value;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;

    // validation
    if (exercise === "" || sets === "" || reps === "") {
        alert("Please fill all fields");
        return;
    }

    //create workout object
    const workout = {
        name: exercise,
        sets: sets,
        reps: reps,
        completed: false
    };

    //add to array
    workouts.push(workout);

    console.log(workouts); // Debugging

    //clear inputs
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";
}