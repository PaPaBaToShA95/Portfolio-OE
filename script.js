$(document).ready(function () {
    $('#phone').inputmask('+38 (999) 999-99-99');
});
let siteName = 'Portfolio OE';
document.title = siteName;


function changeTextWithOpacity(elementId, newText) {
    const element = document.getElementById(elementId);

    if (!element) return;
    element.classList.add('fade-out');


    setTimeout(() => {
        element.textContent = newText;
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
        element.classList.remove('fade-in');
    }, 1100);
}


lang.addEventListener('change', () => {
    if (lang.checked) {
        changeTextWithOpacity('am', 'Про Мене');
        changeTextWithOpacity('sk', 'Навички');
        changeTextWithOpacity('pr', 'Проекти');
        changeTextWithOpacity('exp', 'Досвід');
        changeTextWithOpacity('ac', 'Досягення');
        changeTextWithOpacity('pro__title', 'Проекти');
        changeTextWithOpacity('pro__description', 'Тут ви можете переглянути деякі мої проекти якими я займався і пишаюсь:');
        changeTextWithOpacity('OE', 'Олексій Ермантраут');
        changeTextWithOpacity('aboutme__description', 'Я Front-End розробник, який займається створенням бездоганних і привабливих веб-додатків. Я спеціалізуюсь на створенні зручних інтерфейсів за допомогою сучасних технологій, таких як HTML, CSS, JavaScript і React, а також маю досвід роботи з Node.js для серверних завдань.');
        changeTextWithOpacity('skill', 'Навички');
        changeTextWithOpacity('FE__des', 'Я кодую речі з нуля та витончено втілюю ідеї в життя, приділяючи максимум уваги вашому баченню продукту.');
        changeTextWithOpacity('qa__des', 'Я гарантую якість і функціональність вашого продукту, прискіпливо перевіряючи кожну функцію, щоб відповідати вашим баченням і очікуванням. Я зосереджуюсь на забезпеченні надійної роботи без помилок шляхом ретельного аналізу та уваги до деталей.');
        changeTextWithOpacity('des__des', 'Я створюю візуально привабливі та орієнтовані на користувача дизайни, перетворюючи концепції на інтуїтивно зрозумілі та естетично привабливі веб-інтерфейси. Моя мета полягає в тому, щоб ваш продукт виділявся, забезпечуючи виняткову взаємодію з користувачем і ідеально відповідав вашому баченню.');
        changeTextWithOpacity('mcv', 'Подивіться на моє резюме');
        changeTextWithOpacity('TTT', 'Гра Хрестики-Нулики');
        changeTextWithOpacity('ttt__des', 'Це класична веб-гра в хрестики-нулики, створена за допомогою HTML, CSS і JavaScript. Проект має чіткий і адаптивний дизайн з інтерактивним геймплеєм, що дозволяє гравцеві грати з компютером. Гра відстежує ходи, перевіряє виграші та скидає результат для нових раундів. Чудовий приклад застосування базових навичок інтерфейсної розробки для створення веселого та привабливого користувацького досвіду.');
        changeTextWithOpacity('ttt_v', 'Переглянути проект');
        changeTextWithOpacity('ttt_t', 'Спробувати');
        changeTextWithOpacity('whirl__des', '«Whirl» — це веб-сайт, який я розробив у рамках свого екзаменаційного проекту, використовуючи HTML, CSS і JavaScript. Сайт має плавну анімацію, адаптивний дизайн та інтерактивні елементи. Цей проект отримав високу оцінку за рівень складності та якості, демонструючи моє сильне розуміння інтерфейсної розробки на поточному етапі навчання.');
        changeTextWithOpacity('exp', 'Досвід');
        changeTextWithOpacity('exp', 'Досвід');
        changeTextWithOpacity('exp', 'Досвід');
    }
    else {
        changeTextWithOpacity('am', 'About Me');
        changeTextWithOpacity('sk', 'Skills');
        changeTextWithOpacity('pr', 'Project');
        changeTextWithOpacity('exp', 'Experience');
        changeTextWithOpacity('ac', 'Achievements');
        changeTextWithOpacity('pro__title', 'Projects');
        changeTextWithOpacity('pro__description', 'Have a look at some of the rolled-out projects I am proud of:');
        changeTextWithOpacity('OE', 'Oleksiy Ermantraut');
        changeTextWithOpacity('aboutme__description', 'I am a passionate Front - end developer dedicated to creating seamless and engaging web applications.I specialize in building user - friendly interfaces using modern technologies like HTML, CSS, JavaScript, and React, while also having experience with Node.js for server - side tasks.');
        changeTextWithOpacity('skill', 'Skills');
        changeTextWithOpacity('FE__des', 'I code things from the ground up and gracefully bring ideas to life, keeping your product vision in mind.');
        changeTextWithOpacity('qa__des', 'I ensure the quality and functionality of your product, meticulously testing every feature and flow to meet your vision and expectations.I focus on delivering a reliable and bug - free experience through thorough analysis and attention to detail.');
        changeTextWithOpacity('des__des', '  I craft visually engaging and user-centered designs, transforming concepts into intuitive and aesthetically pleasing web interfaces.My goal is to ensure that your product stands out while delivering an exceptional user experience, perfectly aligned with your vision.');
        changeTextWithOpacity('mcv', 'Look at mine CV');
        changeTextWithOpacity('TTT', 'Tik-Tak-Toe');
        changeTextWithOpacity('ttt__des', 'This is a classic tic-tac-toe web game built with HTML, CSS and JavaScript. The project has a clear and adaptive design with interactive gameplay that allows the player to play with the computer. The game tracks moves, checks winnings and resets the score for new rounds. A great example of applying basic UI development skills to create a fun and engaging user experience.');
        changeTextWithOpacity('ttt_v', 'View Project');
        changeTextWithOpacity('ttt_t', 'Try');
        changeTextWithOpacity('whirl__des', '"Whirl" is a website I developed as part of my exam project, using HTML, CSS, and JavaScript. The site features smooth animations, responsive design, and interactive elements. This project was highly praised for its level of complexity and quality, showcasing my strong grasp of front-end development at my current stage of learning.');
        changeTextWithOpacity('exp', 'Досвід');
        changeTextWithOpacity('exp', 'Досвід');
        changeTextWithOpacity('exp', 'Досвід');
    }
}
);


document
    .getElementById("contactForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const name =
            document.querySelector('input[name="name"]').value;
        const text = document.querySelector(
            'input[name="text1"]'
        ).value;
        const message = document.querySelector(
            'textarea[name="message"]'
        ).value;

        try {
            const response = await fetch("https://papabatoshaserver-2e798d68da19.herokuapp.com/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, text, message }),
            });

            if (response.ok) {
                showCustomAlert(`Повідомлення надіслано`)
                resetForm();
            } else {

                showCustomAlert('Щось пішло не так, спробуйте ще раз!');
            }
        } catch (error) {
            showCustomAlert('Сталася помилка при надсиланні форми!');
        }



    });
function showCustomAlert(message) {
    const alertContainer = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeBtn = document.getElementById('closeAlert');

    alertMessage.textContent = message;

    alertContainer.style.display = 'block';
    setTimeout(() => {
        alertContainer.style.display = 'none';
    }, 5000);

    closeBtn.addEventListener('click', () => {
        alertContainer.style.display = 'none';
    });
}
function resetForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.reset();
    }
}



