console.log("Welcome to the Add Note App:")
showNotes();
// If user add a note:

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    //console.log(notesobj);
    showNotes();
})


//function to show elements from local storage:---


function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {

        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                            
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text"> ${element}</p>
          <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
   </div>`;
    });
    let notesElement = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElement.innerHTML = html;
    }
    else {

        notesElement.innerHTML = 'Nothing is Show! Use "Add a Note" Section to add notes'
    }

}


// Function to delete a note from localstorage:--

function deleteNote(index) {

    //console.log("I am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}


let search = document.getElementById("searchTxt");
search.addEventListener("input",()=>{

     let inputVal = search.value
     //console.log("input event fired", inputVal);
     let notecards = document.getElementsByClassName("notecard");
     Array.from(notecards).forEach(function(element){

       let cardTxt = element.getElementsByTagName("p")[0].innerText;
       if(cardTxt.includes(inputVal)){

        element.style.display = "block";

       }
       else{
          element.style.display = "none";
       }

     })

})

