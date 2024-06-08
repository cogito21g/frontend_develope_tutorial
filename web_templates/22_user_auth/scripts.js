document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // 서버에 로그인 요청을 보냅니다.
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
            } else {
                alert('Login failed: ' + data.message);
            }
        });
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        // 서버에 회원가입 요청을 보냅니다.
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Signup successful!');
            } else {
                alert('Signup failed: ' + data.message);
            }
        });
    });

    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('forgotEmail').value;
        // 서버에 비밀번호 재설정 요청을 보냅니다.
        fetch('/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Password reset email sent!');
            } else {
                alert('Password reset failed: ' + data.message);
            }
        });
    });
});

function showSection(sectionId) {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('forgotPassword').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}
