const addBtn = document.querySelector(".addNoteBtn");
const container = document.querySelector(".notes-container");
const edit = document.querySelectorAll(".fa-edit");
const trash = document.querySelectorAll(".fa-trash");

const noteBlueprint = document.createElement("div");
noteBlueprint.classList.add("note");
noteBlueprint.innerHTML = `
  <div class="noteheader">
    <i class="fas fa-edit"></i>
    <i class="fas fa-trash"></i>
  </div>
  <div class="notecontent"></div> 
`;

let contentList = JSON.parse(localStorage.getItem("notes")) || [];
console.log(contentList);

contentList.map((noteText) => {
  container.append(createNewNote(noteText));
});

addBtn.addEventListener("click", () => {
  const newNote = createNewNote("");
  container.append(newNote);
  const notes = container.querySelectorAll(".notecontent");
  notes[notes.length -1].contentEditable = "true";
  notes[notes.length -1].focus();
});


function createNewNote(text) {
  const newNote = noteBlueprint.cloneNode(true);
  newNote.querySelector(".notecontent").contentEditable = "false";
  const edit = newNote.querySelector(".fa-edit");
  const trash = newNote.querySelector(".fa-trash");
  const content = newNote.querySelector(".notecontent");

  content.innerText = text;

  edit.addEventListener("click", e => {
    editable = content.contentEditable;
    content.contentEditable = editable === "true" ? "false" : "true"; 
    content.focus();
    setTimeout(function(){ content.selectionStart = content.selectionEnd = 10000; }, 0);
    updateLS();
  });

  trash.addEventListener("click", () => {
    newNote.remove();
    updateLS();
  });

  content.addEventListener("keypress", e => {
    setTimeout(updateLS, 0);
  })

  return newNote;
}




function updateLS() {
  const notesEL = Array.from(document.querySelectorAll(".notecontent"));
  const notes = notesEL.map(noteEL => noteEL.innerText);
  console.log(notes);
  localStorage.setItem("notes",JSON.stringify(notes));
}
