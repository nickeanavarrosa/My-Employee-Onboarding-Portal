  // 1. Select all basic elements
    const errorAlert = document.querySelector('#errorAlert');
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#userEmail');


    const phaseOne = document.querySelector('#phaseOne');
    const phaseTwo = document.querySelector('#phaseTwo');
    const phaseThree = document.querySelector('#phaseThree');


    const outUser = document.querySelector('#outUser');
    const outEmail = document.querySelector('#outEmail');


    // 2. Button 1 Code: Move from Phase One to Phase Two
    document.querySelector('#btnGoToTwo').addEventListener('click', (e) => {
        e.preventDefault(); // Stop page jumping
        errorAlert.classList.add('d-none'); // Hide old errors


        // Simple validation check
        if (usernameInput.value.trim() === "") {
            errorAlert.classList.remove('d-none');
            errorAlert.textContent = "Please type a username first!";
            return; // Stop right here
        }


        // Switch the display screens using Bootstrap classes
        phaseOne.classList.add('d-none');
        phaseTwo.classList.remove('d-none');
    });


    // 3. Button 2 Code: Move from Phase Two to Phase Three
    document.querySelector('#btnGoToThree').addEventListener('click', (e) => {
        e.preventDefault();
        errorAlert.classList.add('d-none');


        // Simple validation check
        if (emailInput.value.trim() === "") {
            errorAlert.classList.remove('d-none');
            errorAlert.textContent = "Please type an email address first!";
            return;
        }


        // Clean values and update text blocks
        outUser.textContent = usernameInput.value.trim().toLowerCase();
        outEmail.textContent = emailInput.value.trim().toLowerCase();


        // Switch the display screens
        phaseTwo.classList.add('d-none');
        phaseThree.classList.remove('d-none');
    });


    // 4. Reset Button Code: Go back to the very beginning
    document.querySelector('#btnReset').addEventListener('click', (e) => {
        e.preventDefault();
        
        // Wipe inputs clean
        usernameInput.value = "";
        emailInput.value = "";


        // Send user back to step one panel
        phaseThree.classList.add('d-none');
        phaseOne.classList.remove('d-none');
    });

