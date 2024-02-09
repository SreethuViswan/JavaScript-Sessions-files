


var inputTask=document.getElementById("tittle") 
        var inputDesc=document.getElementById("content")
        var authorName=document.getElementById("authorname")
        var saveTaskButton=document.getElementById("savetaskbutton")
        var addTaskButton=document.getElementById("addtaskbtn")
         var listItems=document.getElementById("blogList")

        saveTaskButton.addEventListener("click",function(){
        var taskInput=inputTask.value;
        var taskDesc=inputDesc.value;
        var taskName=authorName.value;
        console.log(taskInput);
        console.log(taskDesc);
       

        if(taskInput !=="" && taskDesc !=="" && taskName !==""){
            addTask();
            //taskInput,taskDesc
            $("#addTaskModal").modal('hide')
        }
    

    function addTask(){
        var item=document.createElement("li")
        item.textContent=taskInput + "    " + taskDesc + "    " + taskName;
        item.style.marginTop="50px"
        item.style.backgroundColor="lightblue"
        item.style.height="50px"
        item.style.width="800px"
        item.style.textAlign="center"
     

        var deleteButton=document.createElement("button")
     
        deleteButton.textContent="DELETE"
        deleteButton.style.backgroundColor="green";
        deleteButton.style.width="100px"
        deleteButton.style.marginRight="50px"
        deleteButton.style.marginLeft="50px"
        // deleteButton.className="float-right"
        deleteButton.addEventListener("click",function(){
            
        listItems.removeChild(item)   
        })
        
    

         var editButton = document.createElement('button');
             editButton.innerText= "EDIT";
             editButton.style.backgroundColor="red";
             editButton.style.width="100px"
             
             editButton.addEventListener('click', editing);
            
            
        
            

 listItems.appendChild(item)

 item.appendChild(deleteButton)
 item.appendChild(editButton)
 

 }
})

function editing() {
    let forEdit = this.parentElement;
    let input = document.createElement('input');
    input.type = 'text';
    input.value = ""

    forEdit.replaceWith(input);

    editButton.textContent = 'save';
}

