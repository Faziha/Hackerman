document.addEventListener('DOMContentLoaded', (event) => {
    async function hackerman() {
        const output = document.getElementById('output');

        function displayMessage(message) {
            output.textContent += message + '\n';
        }

        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        displayMessage('Initializing Hack program...');
        await wait(2000);

        displayMessage('Hacking Faziha\'s username...');
        await wait(2000);

        displayMessage('Username found: fffffff123...');
        await wait(2000);

        displayMessage('Connecting to Facebook...');
        await wait(2000);

        displayMessage('Try to use HTML & styling if possible');
    }

    hackerman();
});
