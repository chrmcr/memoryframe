// MemoryFrame - Password Gate
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const unlockBtn = document.getElementById('unlockBtn');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Bisa lebih dari 1 password
    const CORRECT_ANSWERS = ['Pinguin', 'playwithhaura'];

    // Auto-redirect if already unlocked
    if(localStorage.getItem('memoryFrameUnlocked') === 'true') {
        window.location.href = 'main.html';
    }

    function checkPassword() {
        const userAnswer = passwordInput.value.trim().toLowerCase();

        // Cek apakah password ada di array
        const isCorrect = CORRECT_ANSWERS.some(
            answer => answer.toLowerCase() === userAnswer
        );

        if(isCorrect) {
            errorMessage.classList.remove('show');
            successMessage.classList.add('show');

            localStorage.setItem('memoryFrameUnlocked', 'true');

            setTimeout(function() {
                window.location.href = 'main.html';
            }, 1500);

        } else {
            successMessage.classList.remove('show');
            errorMessage.classList.add('show');

            setTimeout(function() {
                errorMessage.classList.remove('show');
            }, 3000);
        }
    }

    unlockBtn.addEventListener('click', checkPassword);

    passwordInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') checkPassword();
    });

    passwordInput.addEventListener('input', function() {
        errorMessage.classList.remove('show');
    });
});
