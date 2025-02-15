$(document).ready(function () {
    $('#phone').inputmask('+38 (999) 999-99-99');
});
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




