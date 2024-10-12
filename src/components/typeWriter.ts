const typeWriter = (
    text: string,
    targetElement: HTMLElement,
    speed: number
) => {
    return new Promise<void>((resolve) => {
        let index = 0;
        let startTime: number | null = null; // track start time

        const typeNextChar = (currentTime: number) => {
            // Initialize startTime if first time
            if (startTime === null) {
                startTime = currentTime;
            }

            // calculate elapsed time since last character was typed
            const elapsedTime = currentTime - startTime;

            // check if time has passed for next character
            if (elapsedTime > speed) {
                if (index < text.length) {
                    targetElement.textContent += text.charAt(index);
                    index++;
                    startTime = currentTime;
                } else {
                    resolve(); // resolve promise when typing is complete
                }
            }
            // continue animation according to screen refresh rate
            requestAnimationFrame(typeNextChar);
        };
        requestAnimationFrame(typeNextChar);
    });
};
export default typeWriter;
