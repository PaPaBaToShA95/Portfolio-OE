const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        text: formData.get('text')
    };

    fetch('https://oeportfoliobot-f251c99c2bf1.herokuapp.com/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Успіх:', data);
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
});
// 


















let siteName = 'Portfolio OE';
document.title = siteName;

lang.addEventListener('change', () => {
    if (lang) {
        if (lang.checked) {
            siteName = 'Портфоліо OE';
            document.title = siteName;
            const aboutMe = `Про мене`;
            const aboutMeElement = document.getElementById('am');
            if (aboutMeElement) {
                aboutMeElement.innerHTML = aboutMe;
            }
            const skills = `Навички`;
            const skillsElement = document.getElementById('sk');
            if (skillsElement) {
                skillsElement.innerHTML = skills;
            }
            const projects = `Проекти`;
            const projectsElement = document.getElementById('pr');
            if (projectsElement) {
                projectsElement.innerHTML = projects;
            }
            const experience = `Досвід`;
            const experienceElement = document.getElementById('exp');
            if (experienceElement) {
                experienceElement.innerHTML = experience;
            }
            const achievements = `Досягнення`;
            const achievementsElement = document.getElementById('ac');
            if (achievementsElement) {
                achievementsElement.innerHTML = achievements;
            }
            const oleksiy = `Олексій Ермантраут`;
            const oleksiyElement = document.getElementById('OE');
            if (oleksiyElement) {
                oleksiyElement.innerHTML = oleksiy;
            }
            const aboutme__description = `Я FrontEnd розробник, який займається створенням зручних і привабливих веб-додатків. Я спеціалізуюся на створенні зручних інтерфейсів за допомогою сучасних технологій, таких як HTML, CSS, JavaScript і React, а також маю досвід роботи з Node.js для серверних завдань.`;
            const aboutme__descriptionElement = document.getElementById('aboutme__description');
            if (aboutme__descriptionElement) {
                aboutme__descriptionElement.innerHTML = aboutme__description;
            }
            const skill = `Навички`;
            const skillElement = document.getElementById('skill');
            if (skillElement) {
                skillElement.innerHTML = skill;
            }


        } else {
            siteName = 'Portfolio OE';
            document.title = siteName;
            const aboutMe = `About me`;
            const aboutMeElement = document.getElementById('am');
            if (aboutMeElement) {
                aboutMeElement.innerHTML = aboutMe;
            }
            const skills = `Skills`;
            const skillsElement = document.getElementById('sk');
            if (skillsElement) {
                skillsElement.innerHTML = skills;
            }
            const projects = `Project`;
            const projectsElement = document.getElementById('pr');
            if (projectsElement) {
                projectsElement.innerHTML = projects;
            }
            const experience = `Experience`;
            const experienceElement = document.getElementById('exp');
            if (experienceElement) {
                experienceElement.innerHTML = experience;
            }
            const achievements = `Achievements`;
            const achievementsElement = document.getElementById('ac');
            if (achievementsElement) {
                achievementsElement.innerHTML = achievements;
            }
            const oleksiy = `Oleksiy Ermantaut`;
            const oleksiyElement = document.getElementById('OE');
            if (oleksiyElement) {
                oleksiyElement.innerHTML = oleksiy;
            }
            const aboutme__description = `I'm a passionate Front-end developer dedicated to creating seamless and engaging web applications. I specialize in building user-friendly interfaces using modern technologies like HTML, CSS,
                    JavaScript,and React, while also having experience with Node.js for server-side tasks.`;
            const aboutme__descriptionElement = document.getElementById('aboutme__description');
            if (aboutme__descriptionElement) {
                aboutme__descriptionElement.innerHTML = aboutme__description;
            }
            const skill = `Skills`;
            const skillElement = document.getElementById('skill');
            if (skillElement) {
                skillElement.innerHTML = skill;
            }
        }
    }
});

