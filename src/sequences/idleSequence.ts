export function idleSequence() {
    const background = document.getElementById('background');

    const colors = ['pulse-two', 'pulse-three'];
    const numPulses = 6;

    for (let i = 0; i < numPulses; i++) {
        const pulse = document.createElement('div');
        pulse.classList.add(colors[i % colors.length]);
        background?.append(pulse);
    }
}

export async function startSequence() {
    const background = document.getElementById('background');
    const pulses = background?.children;

    if (pulses) {
        for (let pulse of pulses) {
            pulse.classList.add('glow-out');
        }
    }

    // Start the first animation sequence after the glow-out
    // Wait for the glow-out animation to finish
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 800); // Match this timeout with the duration of the glow-out animation
    });
}
