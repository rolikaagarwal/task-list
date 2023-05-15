const main = document.querySelector("#main");
const btn= document.querySelector("#btnadd");
const saveNote= () => {
    const note= document.querySelectorAll(".notes textarea");
    const data = [];
    note.forEach(
        (notes) => {
            data.push(notes.value);
        }
    )
    console.log(data);
    localStorage.setItem("note", JSON.stringify(data))
}
(
    function(){
        const prenote= localStorage.getItem("note");
        console.log(prenote)
    }
    
)()
btn.addEventListener(
    "click",
     function() {
            addNote()
    }
)
const addNote = () => {
    const notes= document.createElement("div");
    notes.classList.add("notes")
    notes.innerHTML = `
    <div class="upperbox">
        <i class="save fa-regular fa-floppy-disk"></i>
        <i class="trash fa-regular fa-trash-can"></i>
    </div>
   
<textarea></textarea>`;

     notes.querySelector(".trash").addEventListener(
        "click" , function() {
            notes.remove()
            saveNote()
        }
     )
     notes.querySelector(".save").addEventListener(
        "click", function(){
            saveNote()
        }
     )
     main.appendChild(notes);
     saveNote()
}