const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const form = document.getElementById('form');
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.onprogress = function(event) {        
        progress.value = event.loaded / 5000000;
    }

    xhr.send(formData);
});