const html = document.getElementById('html');
const mess = `Message sent successfully!`


$(document).ready(function () {
    $('#phone').inputmask('+38 (999) 999-99-99');
});
let siteName = 'Portfolio OE';
document.title = siteName;

const lang = document.getElementById('lang');
const langmob = document.getElementById('langmob');
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
        changeTextWithOpacity('ammob', 'Про Мене');
        changeTextWithOpacity('skmob', 'Навички');
        changeTextWithOpacity('prmob', 'Проекти');
        changeTextWithOpacity('expmob', 'Досвід');
        changeTextWithOpacity('acmob', 'Досягення');
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
        changeTextWithOpacity('ttt_v', 'Переглянути');
        changeTextWithOpacity('ttt_t', 'Спробувати');
        changeTextWithOpacity('whirl__des', '«Whirl» — це веб-сайт, який я розробив у рамках свого екзаменаційного проекту, використовуючи HTML, CSS і JavaScript. Сайт має плавну анімацію, адаптивний дизайн та інтерактивні елементи. Цей проект отримав високу оцінку за рівень складності та якості, демонструючи моє сильне розуміння інтерфейсної розробки на поточному етапі навчання.');
        changeTextWithOpacity('whirl_v', 'Переглянути');
        changeTextWithOpacity('whirl_l', 'Переглянути');
        changeTextWithOpacity('calt', 'Календар для схуднення');
        changeTextWithOpacity('cal__desclass', 'Календар схуднення – це веб-додаток, розроблений, щоб допомогти користувачам відстежувати свій шлях до схуднення з часом. Програма, створена з використанням HTML, CSS і JavaScript, дозволяє користувачам реєструвати свою вагу, встановлювати цілі та переглядати прогрес в інтерфейсі календаря. Інтуїтивно зрозумілий дизайн полегшує використання, а додаток допомагає користувачам залишатися мотивованими, візуалізуючи їхній прогрес. Цей проект демонструє практичні навички розробки інтерфейсу та був добре сприйнятий за його простоту та ефективність у наданні корисного інструменту.');
        changeTextWithOpacity('cal_v', 'Переглянути');
        changeTextWithOpacity('cal_l', 'Спробувати');
        changeTextWithOpacity('interest__title', 'Зацікавлені у спільній роботі?');
        changeTextWithOpacity('interest__description', 'Ви можете довірити свій проект моїм експертним рукам. Мені завжди хочеться зробити щось приємне і складне. Давайте обговоримо всі особливості в приватній розмові.');
        changeTextWithOpacity('contact__btn', 'Зв’язатися зі мною');
        changeTextWithOpacity('expiriens__title', 'Досвід');
        changeTextWithOpacity('grid1', 'Вступив до Київського радіомеханічного коледжу на спеціальність конструювання,виробництво та технічне обслуговування радіотехнічних пристроїв');
        changeTextWithOpacity('grid2', 'Я закінчив коледж і захистив диплом з відзнакою.');
        changeTextWithOpacity('grid3', 'Я вступив до Національного авіаційного університету міста Києва та продовжив навчання за фахом');
        changeTextWithOpacity('grid4', 'Я закінчив НАУ і пішов працювати в сервісний центр по ремонту мобільних пристроїв.');
        changeTextWithOpacity('grid5', 'Я залишив роботу майстра в сервісному центрі, щоб вступити до лав Збройних сил України');
        changeTextWithOpacity('grid6', 'Я записався на курси Front-End Pro в IT School Hillel');
        changeTextWithOpacity('KRMKNAU', 'КРМК НАУ');
        changeTextWithOpacity('KRMK', 'КРМК НАУ');
        changeTextWithOpacity('NAU', 'НАУ');
        changeTextWithOpacity('NAU2', 'НАУ');
        changeTextWithOpacity('AFoU', 'ЗСУ');
        changeTextWithOpacity('achievement', 'Досягення');
        changeTextWithOpacity('JS__discript', 'Тут було цікаво вивчити JavaScript Я почав вперше взаємодіяти з браузером і веб - сторінкою за допомогою JS');
        changeTextWithOpacity('java__discript', 'Я пройшов спринт-курс на JAVA, виконавши всі домашні завдання на 100 балів і отримав великий багаж базових знань з мови програмування JAVA');
        changeTextWithOpacity('FE__discript', 'Дуже цікавий курс, закохався в нього з першого уроку, так здорово вчитися і створювати щось нове і цікаве. Після закінчення курсів я створив перший односторінковий сайт');
        changeTextWithOpacity('FE2__discript', 'Цей курс складніший, але не менш цікавий. Ми дуже детально вивчаємо JS, його можливості та де він використовується');
        changeTextWithOpacity('propose__title', 'Маєте пропозиції?');
        changeTextWithOpacity('propose__discript', 'Заповніть форму та давайте обговоримо ваш проект!');
        changeTextWithOpacity('OE2', 'Олексій Ермантраут');
        changeTextWithOpacity('am2', 'Про Мене');
        changeTextWithOpacity('sk2', 'Навички');
        changeTextWithOpacity('pr2', 'Проекти');
        changeTextWithOpacity('exp2', 'Досвід');
        changeTextWithOpacity('ac2', 'Досягення');
        changeTextWithOpacity('propose__btn2', 'Зв’язатися зі мною');
        changeTextWithOpacity('cont', 'Зв’язатись');
        changeTextWithOpacity('closeAlert', 'Закрити');
        mess = `Ваше повідомлення відправлено!`;
        const nameInput = document.getElementById('name');
        nameInput.placeholder = "Ваше ім'я";
        const numberInput = document.getElementById('phone');
        numberInput.placeholder = "Ваш номер";
        const messageInput = document.getElementById('message');
        messageInput.placeholder = "Ваше повідомлення";
        html.setAttribute('lang', 'uk');
    }
    else {
        sessionStorage.setItem('langState', 'false');
        changeTextWithOpacity('am', 'About Me');
        changeTextWithOpacity('sk', 'Skills');
        changeTextWithOpacity('pr', 'Project');
        changeTextWithOpacity('exp', 'Experience');
        changeTextWithOpacity('ac', 'Achievements');
        changeTextWithOpacity('ammob', 'About Me');
        changeTextWithOpacity('skmob', 'Skills');
        changeTextWithOpacity('prmob', 'Project');
        changeTextWithOpacity('expmob', 'Experience');
        changeTextWithOpacity('acmob', 'Achievements');
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
        changeTextWithOpacity('whirl_v', 'View Project');
        changeTextWithOpacity('whirl_l', 'Look');
        changeTextWithOpacity('calt', 'The Weight Loss Calendar');
        changeTextWithOpacity('cal__desclass', 'The Weight Loss Calendar is a web application designed to help users track their weight loss journey over time.Built using HTML, CSS, and JavaScript, the app allows users to log their weight, set goals, and view progress on a calendar interface.The intuitive design makes it easy to use, and the app helps users stay motivated by visualizing their progress.This project showcases practical skills in front - end development and was well - received for its simplicity and effectiveness in delivering a useful tool.');
        changeTextWithOpacity('cal_v', 'View Project');
        changeTextWithOpacity('cal_l', 'Try');
        changeTextWithOpacity('interest__title', 'Interested in working together?');
        changeTextWithOpacity('interest__description', 'You can trust your project in my expert hands. I`m always eager to do something nice and complicated.Let`s discuss all the features in a private conversation.');
        changeTextWithOpacity('contact__btn', 'Contact Me');
        changeTextWithOpacity('expiriens__title', 'Experience');
        changeTextWithOpacity('grid1', 'Entered the Kyiv Radiomechanic College for the course Design, production and technical service of radio technical devices');
        changeTextWithOpacity('KRMKNAU', 'KRMK NAU');
        changeTextWithOpacity('grid2', 'I graduated from college and defended my diploma with distinction.');
        changeTextWithOpacity('grid3', 'I entered the National Aviation University in the City of Kyiv and continued to study in my specialty');
        changeTextWithOpacity('grid4', 'I graduated from NAU and went to work at a service center repairing mobile equipment');
        changeTextWithOpacity('grid5', 'I left my job as a master in a service center to join the ranks of the Armed Forces of Ukraine');
        changeTextWithOpacity('grid6', 'I signed up for Front-End Pro courses at IT Shool Hillel');
        changeTextWithOpacity('KRMK', 'KRMK NAU');
        changeTextWithOpacity('NAU', 'NAU');
        changeTextWithOpacity('NAU2', 'NAU');
        changeTextWithOpacity('AFoU', 'AFoU');
        changeTextWithOpacity('achievement', 'Achievements');
        changeTextWithOpacity('JS__discript', 'It was an interesting course to learn JavaScript, here I started to interact with a browser and a web page using JS for the first time');
        changeTextWithOpacity('java__discript', 'I completed a sprint course on JAVA by completing all the homework for 100 points and received a great baggage of basic knowledge of the JAVA programming language');
        changeTextWithOpacity('FE__discript', 'A very interesting course, I fell in love with it from the first lesson, it`s so great to learn and create something new and interesting. After completing the courses, I created the first one - page website');
        changeTextWithOpacity('FE2__discript', 'This course is more difficult but no less interesting than that.We study JS in great detail, its capabilities and where it is used');
        changeTextWithOpacity('propose__title', 'Any Propositions?');
        changeTextWithOpacity('propose__discript', 'Complete the form below and let`s have a talk on your project!');
        changeTextWithOpacity('OE2', 'Oleksiy Ermantraut');
        changeTextWithOpacity('am2', 'About Me');
        changeTextWithOpacity('sk2', 'Skills');
        changeTextWithOpacity('pr2', 'Projects');
        changeTextWithOpacity('exp2', 'Experience');
        changeTextWithOpacity('ac2', 'Achievements');
        changeTextWithOpacity('propose__btn2', 'Contact');
        changeTextWithOpacity('contmob', 'Contact');
        changeTextWithOpacity('closeAlert', 'Close');
        mess = `Message sent successfully!`
        const nameInput = document.getElementById('name');
        nameInput.placeholder = "Your name";
        const numberInput = document.getElementById('phone');
        numberInput.placeholder = "Your number";
        const messageInput = document.getElementById('message');
        messageInput.placeholder = "Your message";
        html.setAttribute('lang', 'en');
    }
}
);
langmob.addEventListener('change', () => {
    if (langmob.checked) {
        changeTextWithOpacity('am', 'Про Мене');
        changeTextWithOpacity('sk', 'Навички');
        changeTextWithOpacity('pr', 'Проекти');
        changeTextWithOpacity('exp', 'Досвід');
        changeTextWithOpacity('ac', 'Досягення');
        changeTextWithOpacity('ammob', 'Про Мене');
        changeTextWithOpacity('skmob', 'Навички');
        changeTextWithOpacity('prmob', 'Проекти');
        changeTextWithOpacity('expmob', 'Досвід');
        changeTextWithOpacity('acmob', 'Досягення');
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
        changeTextWithOpacity('ttt_v', 'Переглянути');
        changeTextWithOpacity('ttt_t', 'Спробувати');
        changeTextWithOpacity('whirl__des', '«Whirl» — це веб-сайт, який я розробив у рамках свого екзаменаційного проекту, використовуючи HTML, CSS і JavaScript. Сайт має плавну анімацію, адаптивний дизайн та інтерактивні елементи. Цей проект отримав високу оцінку за рівень складності та якості, демонструючи моє сильне розуміння інтерфейсної розробки на поточному етапі навчання.');
        changeTextWithOpacity('whirl_v', 'Переглянути');
        changeTextWithOpacity('whirl_l', 'Переглянути');
        changeTextWithOpacity('calt', 'Календар для схуднення');
        changeTextWithOpacity('cal__desclass', 'Календар схуднення – це веб-додаток, розроблений, щоб допомогти користувачам відстежувати свій шлях до схуднення з часом. Програма, створена з використанням HTML, CSS і JavaScript, дозволяє користувачам реєструвати свою вагу, встановлювати цілі та переглядати прогрес в інтерфейсі календаря. Інтуїтивно зрозумілий дизайн полегшує використання, а додаток допомагає користувачам залишатися мотивованими, візуалізуючи їхній прогрес. Цей проект демонструє практичні навички розробки інтерфейсу та був добре сприйнятий за його простоту та ефективність у наданні корисного інструменту.');
        changeTextWithOpacity('cal_v', 'Переглянути');
        changeTextWithOpacity('cal_l', 'Спробувати');
        changeTextWithOpacity('interest__title', 'Зацікавлені у спільній роботі?');
        changeTextWithOpacity('interest__description', 'Ви можете довірити свій проект моїм експертним рукам. Мені завжди хочеться зробити щось приємне і складне. Давайте обговоримо всі особливості в приватній розмові.');
        changeTextWithOpacity('contact__btn', 'Зв’язатися зі мною');
        changeTextWithOpacity('expiriens__title', 'Досвід');
        changeTextWithOpacity('grid1', 'Вступив до Київського радіомеханічного коледжу на спеціальність конструювання,виробництво та технічне обслуговування радіотехнічних пристроїв');
        changeTextWithOpacity('grid2', 'Я закінчив коледж і захистив диплом з відзнакою.');
        changeTextWithOpacity('grid3', 'Я вступив до Національного авіаційного університету міста Києва та продовжив навчання за фахом');
        changeTextWithOpacity('grid4', 'Я закінчив НАУ і пішов працювати в сервісний центр по ремонту мобільних пристроїв.');
        changeTextWithOpacity('grid5', 'Я залишив роботу майстра в сервісному центрі, щоб вступити до лав Збройних сил України');
        changeTextWithOpacity('grid6', 'Я записався на курси Front-End Pro в IT School Hillel');
        changeTextWithOpacity('KRMKNAU', 'КРМК НАУ');
        changeTextWithOpacity('KRMK', 'КРМК НАУ');
        changeTextWithOpacity('NAU', 'НАУ');
        changeTextWithOpacity('NAU2', 'НАУ');
        changeTextWithOpacity('AFoU', 'ЗСУ');
        changeTextWithOpacity('achievement', 'Досягення');
        changeTextWithOpacity('JS__discript', 'Тут було цікаво вивчити JavaScript Я почав вперше взаємодіяти з браузером і веб - сторінкою за допомогою JS');
        changeTextWithOpacity('java__discript', 'Я пройшов спринт-курс на JAVA, виконавши всі домашні завдання на 100 балів і отримав великий багаж базових знань з мови програмування JAVA');
        changeTextWithOpacity('FE__discript', 'Дуже цікавий курс, закохався в нього з першого уроку, так здорово вчитися і створювати щось нове і цікаве. Після закінчення курсів я створив перший односторінковий сайт');
        changeTextWithOpacity('FE2__discript', 'Цей курс складніший, але не менш цікавий. Ми дуже детально вивчаємо JS, його можливості та де він використовується');
        changeTextWithOpacity('propose__title', 'Маєте пропозиції?');
        changeTextWithOpacity('propose__discript', 'Заповніть форму та давайте обговоримо ваш проект!');
        changeTextWithOpacity('OE2', 'Олексій Ермантраут');
        changeTextWithOpacity('am2', 'Про Мене');
        changeTextWithOpacity('sk2', 'Навички');
        changeTextWithOpacity('pr2', 'Проекти');
        changeTextWithOpacity('exp2', 'Досвід');
        changeTextWithOpacity('ac2', 'Досягення');
        changeTextWithOpacity('propose__btn2', 'Зв’язатися зі мною');
        changeTextWithOpacity('contmob', 'Зв’язатись');
        changeTextWithOpacity('closeAlert', 'Закрити');
        mess = `Повідомлення успішно відправлено!`
        const nameInput = document.getElementById('name');
        nameInput.placeholder = "Ваше ім'я";
        const numberInput = document.getElementById('phone');
        numberInput.placeholder = "Ваш номер";
        const messageInput = document.getElementById('message');
        messageInput.placeholder = "Ваше повідомлення";
        html.setAttribute('lang', 'uk');
    }
    else {
        sessionStorage.setItem('langState', 'false');
        changeTextWithOpacity('am', 'About Me');
        changeTextWithOpacity('sk', 'Skills');
        changeTextWithOpacity('pr', 'Project');
        changeTextWithOpacity('exp', 'Experience');
        changeTextWithOpacity('ac', 'Achievements');
        changeTextWithOpacity('ammob', 'About Me');
        changeTextWithOpacity('skmob', 'Skills');
        changeTextWithOpacity('prmob', 'Project');
        changeTextWithOpacity('expmob', 'Experience');
        changeTextWithOpacity('acmob', 'Achievements');
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
        changeTextWithOpacity('whirl_v', 'View Project');
        changeTextWithOpacity('whirl_l', 'Look');
        changeTextWithOpacity('calt', 'The Weight Loss Calendar');
        changeTextWithOpacity('cal__desclass', 'The Weight Loss Calendar is a web application designed to help users track their weight loss journey over time.Built using HTML, CSS, and JavaScript, the app allows users to log their weight, set goals, and view progress on a calendar interface.The intuitive design makes it easy to use, and the app helps users stay motivated by visualizing their progress.This project showcases practical skills in front - end development and was well - received for its simplicity and effectiveness in delivering a useful tool.');
        changeTextWithOpacity('cal_v', 'View Project');
        changeTextWithOpacity('cal_l', 'Try');
        changeTextWithOpacity('interest__title', 'Interested in working together?');
        changeTextWithOpacity('interest__description', 'You can trust your project in my expert hands. I`m always eager to do something nice and complicated.Let`s discuss all the features in a private conversation.');
        changeTextWithOpacity('contact__btn', 'Contact Me');
        changeTextWithOpacity('expiriens__title', 'Experience');
        changeTextWithOpacity('grid1', 'Entered the Kyiv Radiomechanic College for the course Design, production and technical service of radio technical devices');
        changeTextWithOpacity('KRMKNAU', 'KRMK NAU');
        changeTextWithOpacity('grid2', 'I graduated from college and defended my diploma with distinction.');
        changeTextWithOpacity('grid3', 'I entered the National Aviation University in the City of Kyiv and continued to study in my specialty');
        changeTextWithOpacity('grid4', 'I graduated from NAU and went to work at a service center repairing mobile equipment');
        changeTextWithOpacity('grid5', 'I left my job as a master in a service center to join the ranks of the Armed Forces of Ukraine');
        changeTextWithOpacity('grid6', 'I signed up for Front-End Pro courses at IT Shool Hillel');
        changeTextWithOpacity('KRMK', 'KRMK NAU');
        changeTextWithOpacity('NAU', 'NAU');
        changeTextWithOpacity('NAU2', 'NAU');
        changeTextWithOpacity('AFoU', 'AFoU');
        changeTextWithOpacity('achievement', 'Achievements');
        changeTextWithOpacity('JS__discript', 'It was an interesting course to learn JavaScript, here I started to interact with a browser and a web page using JS for the first time');
        changeTextWithOpacity('java__discript', 'I completed a sprint course on JAVA by completing all the homework for 100 points and received a great baggage of basic knowledge of the JAVA programming language');
        changeTextWithOpacity('FE__discript', 'A very interesting course, I fell in love with it from the first lesson, it`s so great to learn and create something new and interesting. After completing the courses, I created the first one - page website');
        changeTextWithOpacity('FE2__discript', 'This course is more difficult but no less interesting than that.We study JS in great detail, its capabilities and where it is used');
        changeTextWithOpacity('propose__title', 'Any Propositions?');
        changeTextWithOpacity('propose__discript', 'Complete the form below and let`s have a talk on your project!');
        changeTextWithOpacity('OE2', 'Oleksiy Ermantraut');
        changeTextWithOpacity('am2', 'About Me');
        changeTextWithOpacity('sk2', 'Skills');
        changeTextWithOpacity('pr2', 'Projects');
        changeTextWithOpacity('exp2', 'Experience');
        changeTextWithOpacity('ac2', 'Achievements');
        changeTextWithOpacity('propose__btn2', 'Contact');
        changeTextWithOpacity('contmob', 'Contact');
        changeTextWithOpacity('closeAlert', 'Close');
        mess = `Message sent successfully!`
        const nameInput = document.getElementById('name');
        nameInput.placeholder = "Your name";
        const numberInput = document.getElementById('phone');
        numberInput.placeholder = "Your number";
        const messageInput = document.getElementById('message');
        messageInput.placeholder = "Your message";
        html.setAttribute('lang', 'en');
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
                showCustomAlert(`${mess}`);
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
const menu = document.querySelector(".menu__hd");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(

    function (menuItem) {

        menuItem.addEventListener("click", toggleMenu);

    }

)
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menuIcon = document.querySelector('.menuIcon');
    const closeIcon = document.querySelector('.closeIcon');

    // Встановлюємо початковий стан при завантаженні сторінки
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    // Додаємо подію на клік
    hamburger.addEventListener('click', function () {
        // Перемикаємо видимість іконок
        if (menuIcon.style.display === 'none') {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } if (menuIcon.style.display === 'block') {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});
document.getElementById("ammob").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("about__meid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("am").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("about__meid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("skmob").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("skillid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("sk").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("skillid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("prmob").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("projectid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("pr").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("projectid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("expmob").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("experienceid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("exp").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("experienceid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("acmob").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("achievementsid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("ac").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("achievementsid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contmob").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contactid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("cont").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contactid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact__btn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contactid").scrollIntoView({ behavior: "smooth" });
});



document.getElementById("am2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("about__meid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("sk2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("skillid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("pr2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("projectid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("exp2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("experienceid").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("ac2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("achievementsid").scrollIntoView({ behavior: "smooth" });
});


