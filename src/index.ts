import './styles/tailwind.css';
import generateQRCode from './components/QRCodeComponent';
import typeWriter from './components/typeWriter';

async function animationStart() {
    console.log('SEQUENCE 1 START');
    document.removeEventListener('click', animationStart);

    const app = document.getElementById('app');

    // generate div element for the typewriter effect

    const seqContainer = document.createElement('div');
    seqContainer.id = 'seqContainer';

    const h1 = document.createElement('h1');
    h1.className = 'text-2xl font-bold my-4';

    const h2 = document.createElement('h2');
    h2.className = 'text-xl font-bold my-4';

    const profileImage = document.createElement('img');
    profileImage.src = './assets/121358075.jpg';
    profileImage.alt = 'Picture of Daniel';
    profileImage.className =
        'w-32 h-32 rounded-full border-4 border-gray-800 shadow-lg slide-in';

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
        app.append(seqContainer, contactContainer);
    }

    await typeWriter('Hello there!', h1, 10);

    const waveEmoji = document.createElement('span');
    waveEmoji.textContent = `👋`;
    waveEmoji.className = 'wave-animation';

    h1.appendChild(waveEmoji);

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

    console.log('SEQUENCE 1 END');
    document.addEventListener('click', endAnimation);
}

async function endAnimation() {
    console.log('SEQUENCE 2 START');
    const app = document.getElementById('app');
    console.log('Step 1');
    const seqContainer = document.getElementById('seqContainer');
    console.log('Step 2');
    const contactContainer = document.getElementById('contact-container');
    console.log('Step 3');

    contactContainer?.classList.add(
        'transition-transform',
        'duration-500',
        'ease-in-out'
    );
    console.log('Step 4');

    if (contactContainer) {
        contactContainer.style.transform = 'translateY(15vh)';
    }
    console.log('step 5');

    // wait for contact containers transition to complete
    await new Promise((resolve) => {
        console.log('Step 5');
        if (contactContainer) {
            console.log('Step 6');
            contactContainer.addEventListener(
                'transitionend',
                () => {
                    contactContainer.style.position = 'absolute';
                    contactContainer.style.top = '48vh';
                    resolve(undefined);
                },
                { once: true }
            );
        }
    });

    console.log('Step 7');
    if (seqContainer) {
        seqContainer.innerHTML = '';
    }

    const qrText = document.createElement('p');
    qrText.className = 'text-md text-center my-4';

    seqContainer?.append(qrText);

    await typeWriter(
        'Have a businesscard! Scan the QR for a link to this page!',
        qrText,
        2
    );

    console.log('Step 8');
    const qrContainer = document.createElement('div');
    qrContainer.id = 'qr-container';

    console.log('Step 9');
    seqContainer?.append(qrContainer);

    qrContainer.offsetHeight;

    setTimeout(() => {
        qrContainer.classList.add('show');
    }, 10);

    console.log('Step 10');
    await generateQRCode('http://localhost:9000');

    qrContainer.style.transform = 'scale(1)';

    await new Promise((resolve) => {
        console.log('Step 5');
        if (qrContainer) {
            console.log('Step 6');
            qrContainer.addEventListener('transitionend', resolve, {
                once: true,
            });
        }
    });

    console.log('SEQUENCE 2 END');
    if (flip) {
        flip.addEventListener('click', handleOrientationChange);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    document.addEventListener('click', animationStart);
    flip?.classList.toggle('rotate-180');
});
const flip = document.getElementById('flip');

function handleOrientationChange() {
    flip?.classList.toggle('rotate-180');
}
