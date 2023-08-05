const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const requestUrl = 'https://students.netoservices.ru/nestjs-backend/poll';

const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);
xhr.responseType = 'json';
xhr.onload = () => {
    pollTitle.textContent = xhr.response.data.title;

    xhr.response.data.answers.forEach(element => {
        console.log(element);

       const button = document.createElement('button'); 
       button.classList.add("poll__answer");
       button.textContent = element;
        pollAnswers.append(button);
    });   

    const allAnswer = document.querySelectorAll('.poll__answer');
    console.log(allAnswer);


    allAnswer.forEach(item => {
        item.addEventListener('click', function () {
            alert('Спасибо, ваш голос засчитан!');
            location.reload();
        })
    })
}

xhr.send();