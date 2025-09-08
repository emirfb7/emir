// script2.js - Main application logic
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('testButton');
    const output = document.getElementById('output');
    
    if (button && output) {
        button.addEventListener('click', function() {
            // Use utility functions from script1.js
            const randomNum = utils.randomNumber(1, 100);
            const currentTime = utils.getCurrentDateTime();
            
            // Create colorful messages
            const messages = [
                `Random number: ${randomNum}`,
                `Current time: ${currentTime}`,
                `Button clicked successfully!`,
                `Webpack bundle is working!`
            ];
            
            // Display random message
            const randomMessage = messages[utils.randomNumber(0, messages.length - 1)];
            output.textContent = randomMessage;
            
            // Add animation
            utils.addAnimation(output);
            
            // Log to console
            utils.log('Button clicked - ' + randomMessage);
            
            // Change button text temporarily
            const originalText = button.textContent;
            button.textContent = 'Clicked!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 1000);
        });
    }
    
    // Initialize with welcome message
    if (output) {
        output.textContent = 'Click the button to test the bundled JavaScript!';
        utils.log('Page loaded successfully');
    }
});
