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
        }
    }
});
