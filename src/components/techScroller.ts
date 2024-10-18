import bootstrapIcon from '../assets/bootstrap.svg';
import css3Icon from '../assets/css3.svg';
import denoIcon from '../assets/deno.svg';
import dockerIcon from '../assets/docker.svg';
import expressIcon from '../assets/express.svg';
import flaskIcon from '../assets/flask.svg';
import gitIcon from '../assets/git.svg';
import html5Icon from '../assets/html5.svg';
import htmxIcon from '../assets/htmx.svg';
import javascriptIcon from '../assets/javascript.svg';
import mongodbIcon from '../assets/mongodb.svg';
import mongooseIcon from '../assets/mongoose.svg';
import nodedotjsIcon from '../assets/nodedotjs.svg';
import postgresqlIcon from '../assets/postgresql.svg';
import prismaIcon from '../assets/prisma.svg';
import pythonIcon from '../assets/python.svg';
import reactIcon from '../assets/react.svg';
import tailwindcssIcon from '../assets/tailwindcss.svg';
import typescriptIcon from '../assets/typescript.svg';
import viteIcon from '../assets/vite.svg';
import webpackIcon from '../assets/webpack.svg';

const techScroller = () => {
    const techScroller = document.getElementById('tech-scroller');

    const techTitle = document.createElement('span');
    techTitle.textContent = 'Tech stack:';
    techTitle.className = 'tech-scroll-title';

    const langContainer = document.createElement('div');
    langContainer.className = 'tech-container';
    langContainer.id = 'lang-container';

    const frameLibContainer = document.createElement('div');
    frameLibContainer.className = 'tech-container';
    frameLibContainer.id = 'frameLib-container';

    const frameworksAndLibraries = [
        { src: bootstrapIcon, alt: 'Bootstrap' },
        { src: dockerIcon, alt: 'Docker' },
        { src: expressIcon, alt: 'Express' },
        { src: flaskIcon, alt: 'Flask' },
        { src: gitIcon, alt: 'Git' },
        { src: htmxIcon, alt: 'HTMX' },
        { src: mongodbIcon, alt: 'MongoDB' },
        { src: mongooseIcon, alt: 'Mongoose' },
        { src: postgresqlIcon, alt: 'PostgreSQL' },
        { src: prismaIcon, alt: 'Prisma' },
        { src: reactIcon, alt: 'React' },
        { src: tailwindcssIcon, alt: 'Tailwind CSS' },
        { src: viteIcon, alt: 'Vite' },
        { src: webpackIcon, alt: 'Webpack' },
    ];

    const languages = [
        { src: css3Icon, alt: 'CSS3' },
        { src: denoIcon, alt: 'Deno' },
        { src: html5Icon, alt: 'HTML5' },
        { src: javascriptIcon, alt: 'JavaScript' },
        { src: nodedotjsIcon, alt: 'Node.js' }, // Moved to languages
        { src: pythonIcon, alt: 'Python' },
        { src: typescriptIcon, alt: 'TypeScript' },
    ];

    const infLanguageStack = [...languages, ...languages];

    infLanguageStack.forEach((tech) => {
        const langDiv = document.createElement('div');
        langDiv.id = tech.alt;
        langDiv.className = 'tech-item';

        const langName = document.createElement('p');
        langName.textContent = tech.alt;

        const langIcon = new Image();
        langIcon.src = tech.src;
        langIcon.alt = tech.alt;
        langIcon.className = 'tech-icon';

        langDiv.append(langName, langIcon);
        langContainer.appendChild(langDiv);
    });

    const infFrameLibStack = [
        ...frameworksAndLibraries,
        ...frameworksAndLibraries,
    ];
    infFrameLibStack.forEach((tech) => {
        const techDiv = document.createElement('div');
        techDiv.id = tech.alt;
        techDiv.className = 'tech-item';

        const techName = document.createElement('p');
        techName.textContent = tech.alt;

        const techIcon = new Image();
        techIcon.src = tech.src;
        techIcon.alt = tech.alt;
        techIcon.className = 'tech-icon';

        techDiv.append(techName, techIcon);
        frameLibContainer.appendChild(techDiv);
    });

    techScroller?.append(techTitle, langContainer, frameLibContainer);
};

export default techScroller;
