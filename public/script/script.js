const divElement = document.createElement('div');

const newPostBtn = () => {
    document.querySelector('#new-post-btn').addEventListener('click', function () {
    const textArea = document.createElement('textarea');
    textArea.className = 'textbox';
    textArea.rows = '10';
    textArea.cols = '30';
    textArea.placeholder = 'Enter text';
    divElement.className = 'entry-container container'

    document.querySelector('.btn-container').after(divElement);
    document.querySelector('.entry-container').appendChild(textArea);
    document.querySelector('#new-post-btn').classList.toggle('hidden');
    });
}

const submitBtn = () => {
    document.querySelector('#submit-btn').addEventListener('click', function () {
    document.querySelector('#new-post-btn').classList.toggle('hidden');
    document.querySelector('.textbox').classList.toggle('hidden');
    });
}

newPostBtn();
submitBtn();
