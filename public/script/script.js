const newPostBtn = () => {
    document.querySelector('#new-post-btn').addEventListener('click', function() {

        // This div is containing the form
        const divElement = document.createElement('div');
        divElement.className = 'container';
        divElement.id = 'form-div';
        document.querySelector('.btn-container').after(divElement);

        // This is the form tag
        const formElement = document.createElement('form');
        formElement.className = 'form-container'
        formElement.method = 'POST';
        formElement.action = '/submit';
        document.querySelector('#form-div').appendChild(formElement);

        // Textarea is the textarea element
        const textArea = document.createElement('textarea');
        textArea.className = 'textbox';
        textArea.rows = '10';
        textArea.cols = '30';
        textArea.placeholder = 'Enter text';
        document.querySelector('.form-container').appendChild(textArea);

        // This div contains the submit button and is inside the form tag
        const submitBtnDiv = document.createElement('div');
        submitBtnDiv.className = 'container';
        submitBtnDiv.id = 'submit-btn-div';
        document.querySelector('.form-container').appendChild(submitBtnDiv);

        // This is the submit button
        const submitBtn = document.createElement('input');
        submitBtn.className = 'btn';
        submitBtn.type = 'button';
        submitBtn.name = 'submit';
        submitBtn.value = 'Submit';
        submitBtn.id = 'submit-btn';
        document.querySelector('#submit-btn-div').appendChild(submitBtn);

        // Attaches an eventListener to the submit button so it can toggle the New post button
        // and send the content to the backend
        document.querySelector('#submit-btn').addEventListener('click', function() {
            const textContent = document.querySelector('.textbox').value;

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ textContent })
            });

            document.querySelector('#new-post-btn').classList.toggle('hidden');
            document.querySelector('.textbox').classList.toggle('hidden');
            document.querySelector('#submit-btn').classList.toggle('hidden');
        });
        document.querySelector('#new-post-btn').classList.toggle('hidden');
    });
}


newPostBtn();
