
const loginForm = document.getElementById("login-form");
const SignupForm = document.getElementById("signup-form");
    
    SignupForm.addEventListener("submit", function (e) {
     
        
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        //Check if the username not exist in localstorage
        if (!localStorage.getItem(username)) {
            const user = {
            
                username: username,
                password: password,
            };
            localStorage.setItem(username, JSON.stringify(user));
            alert("Account created successfully.You Can now log in");
        } 
        else {
            alert("Username already exists. Please choose another.");
        }
        SignupForm.reset();
        
    });
    

    loginForm.addEventListener("submit", function (e) {
      
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const storedUser = JSON.parse(localStorage.getItem(username));

        if (storedUser && storedUser.password === password) {
            alert("Login successful!");
        } 
        else {
            alert("Login failed. Please check your credentials.");
        }

        loginForm.reset();
    });

