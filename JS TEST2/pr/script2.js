const SignupForm = document.getElementById("createblog");
SignupForm.addEventListener("submit", function (e) {
    e.preventDefault();
   
    var tittles = document.getElementById("tittle").value;
    var contents = document.getElementById("content").value;
    var author= document.getElementById("authorname").value;

    if (!localStorage.getItem(tittles)) {
        const user = {
            Tittle: tittles,
           Content: contents,
           Author: author,
        };
        localStorage.setItem(tittles, JSON.stringify(user));
        alert("BLOG created successfully.");
    }
    SignupForm.reset();
    
});