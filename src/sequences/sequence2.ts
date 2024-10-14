import generateQRCode from '../components/QRCodeComponent';
import typeWriter from '../components/typeWriter';

export default async function endAnimation() {
    console.log('SEQUENCE 2 START');

    const seqContainer = document.getElementById('seq-container');

    const contactContainer = document.getElementById('contact-container');

    contactContainer?.classList.add('move-down');
    console.log(' STEP 1');

    // wait for contact containers transition to complete
    await new Promise((resolve) => {
        if (contactContainer) {
            contactContainer.addEventListener('animationend', resolve);
        }
    });
    console.log('STEP 2');

    if (seqContainer) {
        console.log('HIT');

        seqContainer.classList.add('fade-out');
        await new Promise((resolve) => {
            seqContainer.addEventListener(
                'animationend',
                () => {
                    // clear content after fade-out
                    seqContainer.innerHTML = '';
                    seqContainer.classList.remove('fade-out');
                    seqContainer.style.opacity = '100%';
                    resolve(undefined);
                },
                { once: true }
            );
        });
    }
    console.log('STEP 3');

    const qrText = document.createElement('p');
    qrText.className = 'text-lg text-center my-4';

    seqContainer?.append(qrText);
    console.log('STEP 4');

    await typeWriter('Have a businesscard!', qrText, 2);
    const glowContainer = document.createElement('div');
    glowContainer.className = 'glow-container';

    const outerGlowDiv = document.createElement('div');
    outerGlowDiv.className = 'outer-glow';

    const animateDiv = document.createElement('div');
    animateDiv.className = 'animate-glow';

    const innerGlowDiv = document.createElement('div');
    innerGlowDiv.className = 'inner-glow';

    const qrContainer = document.createElement('div');
    qrContainer.id = 'qr-container';
    console.log('STEP 4');

    innerGlowDiv.appendChild(qrContainer);
    outerGlowDiv.appendChild(animateDiv);
    outerGlowDiv.appendChild(innerGlowDiv);
    glowContainer.appendChild(outerGlowDiv);

    seqContainer?.append(glowContainer);

    qrContainer.offsetHeight;
    console.log('STEP 5');

    setTimeout(() => {
        qrContainer.classList.add('show');
    }, 10);

    await generateQRCode(
        'https://danishkodemonkey.github.io/DKM-businesscard/'
    );

    qrContainer.style.transform = 'scale(1)';
    console.log('STEP 6');

    await new Promise((resolve) => {
        if (qrContainer) {
            qrContainer.addEventListener('transitionend', resolve, {
                once: true,
            });
        }
    });
    glowContainer.classList.add('start');
    outerGlowDiv.classList.add('start');
    innerGlowDiv.classList.add('start');
    animateDiv.classList.add('start');

    console.log('SEQUENCE 2 END');
    // send end signal to document
    const event = new Event('sequence2Complete');
    document.dispatchEvent(event);
}
