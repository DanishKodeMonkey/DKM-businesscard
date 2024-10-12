import './styles/tailwind.css';
import generateQRCode from './components/QRCodeComponent';
import typeWriter from './components/typeWriter';

async function animationStart() {
    document.removeEventListener('click', animationStart);
    const app = document.getElementById('app');

    // generate div element for the typewriter effect

    const h1 = document.createElement('h1');
    h1.className = 'text-2xl font-bold text-center my-4';

    const h2 = document.createElement('h2');
    h2.className = 'text-xl font-bold text-center my-4';

    const h3 = document.createElement('h3');
    h3.className = 'text-lg font-bold text-center my-4';

    const p1 = document.createElement('p');
    p1.className = 'text-md text-center my-4';

    // contact information
    const contactContainer = document.createElement('div');
    contactContainer.className = 'flex flex-col my-4';

    const p2 = document.createElement('p');
    p1.className = 'text-md italic text-center my-4';

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/DanishKodeMonkey';
    githubLink.target = '_blank'; // Open in a new tab
    githubLink.className = 'text-blue-500 underline cursor-pointer';

    const linkedinLink = document.createElement('a');
    linkedinLink.href =
        'https://www.linkedin.com/in/daniel-ljung-runge-3ba014a1/';
    linkedinLink.target = '_blank';
    linkedinLink.className = 'text-blue-500 underline cursor-pointer';

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:Daniel_Runge_@hotmail.com';
    emailLink.className = 'text-blue-500 underline cursor-pointer';

    // append typewriter element to app div
    contactContainer.append(p2, githubLink, linkedinLink, emailLink);
    if (app) {
        app.append(h1, h2, h3, p1, contactContainer);
    }

    await typeWriter('Hello there!', h1, 10);
    await typeWriter('My name is Daniel', h2, 10);
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

    const qrCodeElem = document.getElementById('qr-container');
    // only render QR if it has not been rendered yet
    generateQRCode('http://localhost:9000');
}

document.addEventListener('DOMContentLoaded', async () => {
    document.addEventListener('click', animationStart);
    // event listener generating qr code

    document.addEventListener('click', (e) => {});
});
const flip = document.getElementById('flip');
let flipped = false;

function handleOrientationChange() {
    flipped = !flipped;
    flip?.classList.toggle('rotate-180', flipped);
}

if (flip) {
    flip.addEventListener('click', handleOrientationChange);
}
