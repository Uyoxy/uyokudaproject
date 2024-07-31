document.addEventListener('DOMContentLoaded', () => {
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');
    const counter = document.getElementById('counter');
    const toggleSwitch = document.getElementById('toggleSwitch');

    let percentage = 0;

    incrementButton.addEventListener('click', () => {
        percentage += 10; // Increment by 10%
        counter.textContent = `${percentage}%`;
    });

    decrementButton.addEventListener('click', () => {
        if (percentage > 0) {
            percentage -= 10; // Decrement by 10%
            counter.textContent = `${percentage}%`;
        }
    });

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            console.log('Switch is ON');
        } else {
            console.log('Switch is OFF');
        }
    });
});
