import Icon from '../assets/121358075.jpg';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Mail from '../assets/mail.svg';
import typeWriter from '../components/typeWriter';

export default async function animationStart() {
    console.log('SEQUENCE 1 START');
    document.removeEventListener('click', animationStart);

    const app = document.getElementById('app');

    // generate div element for the typewriter effect

    const seqContainer = document.createElement('div');
    seqContainer.id = 'seqContainer';

    const h1 = document.createElement('h1');
    h1.textContent = 'Hello there!';
    h1.className = 'text-2xl font-bold my-4 drop-in';

    const h2 = document.createElement('h2');
    h2.className = 'text-xl font-bold my-4';

    const profileImage = new Image();
    profileImage.id = 'profile-image';
    profileImage.src = Icon;
    profileImage.className = 'w-28 h-28 rounded-full border-2 border-gray-300';

    const h3 = document.createElement('h3');

    h3.className = 'text-lg font-bold my-4';

    const p1 = document.createElement('p');
    p1.className = 'text-md  my-4';

    seqContainer.append(h1, h2, h3, p1);

    // contact information
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';
    contactContainer.className = 'flex flex-col my-4';

    const p2 = document.createElement('p');
    p2.className = 'text-md italic my-4';

    const gitHubDiv = document.createElement('div');
    gitHubDiv.classList.add('icon-div');

    const gitHubLogo = new Image();
    gitHubLogo.id = 'github-icon';
    gitHubLogo.src = Github;
    gitHubLogo.className = 'contact-icon';

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/DanishKodeMonkey';
    githubLink.target = '_blank'; // Open in a new tab
    githubLink.className = 'contact-link';

    gitHubDiv.append(gitHubLogo, githubLink);

    const linkedInDiv = document.createElement('div');
    linkedInDiv.classList.add('icon-div');

    const linkedInLogo = new Image();
    linkedInLogo.id = 'linkedin-icon';
    linkedInLogo.src = LinkedIn;
    linkedInLogo.className = 'contact-icon';

    const linkedinLink = document.createElement('a');
    linkedinLink.href =
        'https://www.linkedin.com/in/daniel-ljung-runge-3ba014a1/';
    linkedinLink.target = '_blank';
    linkedinLink.className = 'contact-link';

    linkedInDiv.append(linkedInLogo, linkedinLink);

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('icon-div');

    const emailLogo = new Image();
    emailLogo.id = 'email-icon';
    emailLogo.src = Mail;
    emailLogo.className = 'contact-icon';

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:Daniel_Runge_@hotmail.com';
    emailLink.className = 'contact-link';

    emailDiv.append(emailLogo, emailLink);

    // append elements to app div
    contactContainer.append(p2, gitHubDiv, linkedInDiv, emailDiv);

    if (app) {
        app.append(seqContainer, contactContainer);
    }

    /* Start sequence of animations:  */

    h1.offsetHeight;
    h1.classList.add('show');

    await new Promise((resolve) => {
        h1.addEventListener('transitionend', resolve, { once: true });
    });

    const waveEmoji = document.createElement('span');
    waveEmoji.textContent = `👋`;
    waveEmoji.className = 'wave-animation';

    h1.appendChild(waveEmoji);

    await typeWriter('My name is Daniel', h2, 2);

    h2.appendChild(profileImage);

    profileImage.offsetHeight;

    profileImage.classList.add('slide-in-left');
    await new Promise((resolve) => {
        profileImage.addEventListener('animationend', resolve, { once: true });
    });
    profileImage.classList.remove('slide-in-left');
    profileImage.classList.add('pulse-glow');
    console.log('Finished profileImage');

    await typeWriter('Full Stack Web Developer and danishKodeMonkey', h3, 2);
    await typeWriter(
        'Proficient in JavaScript, TypeScript, React, and Node.js and much more, with a passion for building exciting and efficient web applications',
        p1,
        1
    );

    await typeWriter('You can find me at:', p2, 2);

    gitHubLogo.classList.add('slide-in-right');
    await new Promise((resolve) => {
        gitHubLogo.addEventListener('animationend', resolve, { once: true });
    });
    console.log('Finished gitHubLogo');

    linkedInLogo.classList.add('slide-in-right');
    await new Promise((resolve) => {
        linkedInLogo.addEventListener('animationend', resolve, { once: true });
    });
    console.log('Finished linkedInLogo');

    emailLogo.classList.add('slide-in-right');
    await new Promise((resolve) => {
        emailLogo.addEventListener('animationend', resolve, { once: true });
    });
    console.log('Finished emailLogo');

    await typeWriter('danishKodeMonkey', githubLink, 1);
    await typeWriter('Daniel Ljung Runge', linkedinLink, 1);
    await typeWriter('Daniel_Runge_@hotmail.com', emailLink, 1);

    console.log('SEQUENCE 1 END');
    // send end signal to document
    const event = new Event('sequence1Complete');
    document.dispatchEvent(event);
}
