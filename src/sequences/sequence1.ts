import Icon from '../assets/121358075.jpg';
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
    profileImage.className =
        'w-28 h-28 rounded-full border-4 border-gray-800 shadow-lg';

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

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/DanishKodeMonkey';
    githubLink.target = '_blank'; // Open in a new tab
    githubLink.className = 'text-blue-500  cursor-pointer';

    const linkedinLink = document.createElement('a');
    linkedinLink.href =
        'https://www.linkedin.com/in/daniel-ljung-runge-3ba014a1/';
    linkedinLink.target = '_blank';
    linkedinLink.className = 'text-blue-500 cursor-pointer';

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:Daniel_Runge_@hotmail.com';
    emailLink.className = 'text-blue-500  cursor-pointer';

    // append elements to app div
    contactContainer.append(p2, githubLink, linkedinLink, emailLink);

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

    await typeWriter('My name is Daniel', h2, 10);

    h2.appendChild(profileImage);

    profileImage.offsetHeight;

    profileImage.classList.add('slide-in');
    await new Promise((resolve) => {
        profileImage.addEventListener('animationend', resolve, { once: true });
    });
    console.log('Finished profileImage');

    await typeWriter('Full Stack Web Developer and danishKodeMonkey', h3, 8);
    await typeWriter(
        'Proficient in JavaScript, TypeScript, React, and Node.js and much more, with a passion for building exciting and efficient web applications',
        p1,
        1
    );

    await typeWriter('You can find me at:', p2, 2);

    await typeWriter('Github: danishKodeMonkey', githubLink, 1);
    await typeWriter('LinkedIn: Daniel Ljung Runge', linkedinLink, 1);
    await typeWriter('Email: Daniel_Runge_@hotmail.com', emailLink, 1);

    console.log('SEQUENCE 1 END');
    // send end signal to document
    const event = new Event('sequence1Complete');
    document.dispatchEvent(event);
}