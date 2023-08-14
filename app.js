let item = document.querySelector("#item")
let todobox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addtodo(this.value);
            this.value = ""
        }

    }
)
const addtodo = (item) => {
    const listitem = document.createElement("li")
    listitem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
</li>`;
    // add marking on the list item like read or not
    listitem.addEventListener("click",
        function () {
            this.classList.toggle("done");
        })
    //add marking  code here finish 
    // remove the list item
    listitem.querySelector("i").addEventListener("click",
        function () {
            listitem.remove()
        })
    //remove the list item finish
    todobox.appendChild(listitem)

}