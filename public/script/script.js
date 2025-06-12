//const divElement = document.createElement('div');
//const formElement = document.createElement('form');

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
        submitBtn.name = 'Submit';
        submitBtn.value = 'Submit';
        submitBtn.id = 'submit-btn';
        document.querySelector('#submit-btn-div').appendChild(submitBtn);

        document.querySelector('#new-post-btn').classList.toggle('hidden');
    });
}

const submitBtn = () => {
    document.querySelector('#submit-btn').addEventListener('click', function() {
        document.querySelector('#new-post-btn').classList.toggle('hidden');
        document.querySelector('.textbox').classList.toggle('hidden');
    });
}

newPostBtn();
submitBtn();
