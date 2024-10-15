import './styles/tailwind.css';
import animationStart from './sequences/sequence1';
import endAnimation from './sequences/sequence2';
import { idleSequence } from './sequences/idleSequence';

const flip = document.getElementById('flip');

function handleOrientationChange() {
    flip?.classList.toggle('rotate-180');
}

// Curate the sequences and their triggers after DOM has loaded.
document.addEventListener('DOMContentLoaded', async () => {
    flip?.classList.toggle('rotate-180');

    idleSequence();

    document.addEventListener('click', animationStart);

    document.addEventListener('sequence1Complete', () => {
        document.addEventListener('click', endAnimation);
    });

    document.addEventListener('sequence2Complete', () => {
        document.addEventListener('click', handleOrientationChange);
    });
});
