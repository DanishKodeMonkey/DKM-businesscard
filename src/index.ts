import './styles/tailwind.css';
import generateQRCode from './components/QRCodeComponent';
import typeWriter from './components/typeWriter';

document.addEventListener('DOMContentLoaded', async () => {
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

    const p2 = document.createElement('p');
    p2.className = 'text-md text-center my-4';

    const p3 = document.createElement('p');
    p3.className = 'text-md text-center my-4';

    const p4 = document.createElement('p');
    p4.className = 'text-md text-center my-4';

    const p5 = document.createElement('p');
    p5.className = 'text-md text-center my-4';

    const p6 = document.createElement('p');
    p6.className = 'text-md text-center my-4';

    // append typewriter element to app div

    if (app) {
        app.append(h1, h2, h3, p1, p2, p3, p4, p5, p6);
    }

    await typeWriter('Hello there!', h1, 20);
    await typeWriter(
        "My name is Daniel, I also go by 'danishKodeMonkey'",
        h2,
        20
    );
    await typeWriter(
        'I am a full stack web developer, running on 3 years of continuous learning and development, with a passion for intuitive and exciting web solutions!',
        h3,
        10
    );
    await typeWriter(
        `
            My range of experience span over everything from exciting
            and interactive front end experiences, to backend data
            processing and RESTful API interactions, all the way to the
            databases to be built and maintained to persist data. 
                `,
        p1,
        10
    );
    await typeWriter(
        `   
            My programming background is based on a solid foundation of
            vast experience writing vanilla javascript and Typescript,
            CSS, and HTML.
        `,
        p2,
        10
    );
    await typeWriter(
        `            
            combined with solid experience based around various
            frameworks, libraries and tech of the modern web engineering
            environment.
        `,
        p3,
        10
    );
    await typeWriter(
        `            
            These experiences range from everything from useful and
            powerful libraries like React, combined with useful tools
            like Vite for a comprehensive and feature rich front end
            solutions.
        `,
        p4,
        10
    );
    await typeWriter(
        `            
            As well as frameworks like Express, used to build everything
            from a backend Server Side Rendering solution, to RESTful
            APIs. Which furthermore adds to the stack using database
            solutions like MongoDB and postgreSQL.
        `,
        p5,
        10
    );
    await typeWriter(
        ` And so much more!
            `,
        p6,
        10
    );

    // event listener generating qr code

    document.addEventListener('click', (e) => {
        const qrCodeElem = document.getElementById('qr-container');
        // only render QR if it has not been rendered yet
        if (qrCodeElem?.innerHTML === '') {
            generateQRCode('http://localhost:9000');
        }
    });
});
