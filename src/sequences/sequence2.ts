import generateQRCode from '../components/QRCodeComponent';
import typeWriter from '../components/typeWriter';

export default async function endAnimation() {
    console.log('SEQUENCE 2 START');

    const seqContainer = document.getElementById('seqContainer');

    const contactContainer = document.getElementById('contact-container');

    contactContainer?.classList.add(
        'transition-transform',
        'duration-500',
        'ease-in-out'
    );

    if (contactContainer) {
        contactContainer.style.transform = 'translateY(15vh)';
    }

    // wait for contact containers transition to complete
    await new Promise((resolve) => {
        if (contactContainer) {
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

    if (seqContainer) {
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

    const qrText = document.createElement('p');
    qrText.className = 'text-md text-center my-4';

    seqContainer?.append(qrText);

    await typeWriter(
        'Have a businesscard! Scan the QR for a link to this page!',
        qrText,
        2
    );

    const qrContainer = document.createElement('div');
    qrContainer.id = 'qr-container';

    seqContainer?.append(qrContainer);

    qrContainer.offsetHeight;

    setTimeout(() => {
        qrContainer.classList.add('show');
    }, 10);

    await generateQRCode(
        'https://danishkodemonkey.github.io/DKM-businesscard/'
    );

    qrContainer.style.transform = 'scale(1)';

    await new Promise((resolve) => {
        if (qrContainer) {
            qrContainer.addEventListener('transitionend', resolve, {
                once: true,
            });
        }
    });

    console.log('SEQUENCE 2 END');
    // send end signal to document
    const event = new Event('sequence2Complete');
    document.dispatchEvent(event);
}
