const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
  
  window.addEventListener('load', ()=> {
	if (localStorage.loginID) {
		welcome.classList.add('welcome_active');
		userId.textContent = userId;
	}
  });
  
  signinForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    let userDate = new FormData(signinForm);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.responseType = 'json'
    request.send(userDate);
    request.addEventListener('load', () => {
            let data = request.response;
            if (data.success) {
                welcome.classList.add('welcome_active');
                userId.textContent = data.user_id
                localStorage.loginId = data.user_id
            }  else {
                alert('Неверный логин/пароль');
                signinForm.reset();
            }
    });
});