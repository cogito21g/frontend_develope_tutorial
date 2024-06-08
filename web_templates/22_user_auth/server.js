const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// 사용자 데이터를 저장하기 위한 임시 메모리 데이터베이스
const users = {};

// 로그인 요청 처리
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users[email];
    if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.json({ success: true });
            } else {
                res.json({ success: false, message: 'Invalid password' });
            }
        });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});

// 회원가입 요청 처리
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    if (users[email]) {
        res.json({ success: false, message: 'User already exists' });
    } else {
        bcrypt.hash(password, 10, (err, hash) => {
            users[email] = { email, password: hash };
            res.json({ success: true });
        });
    }
});

// 비밀번호 재설정 요청 처리
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    if (users[email]) {
        // 실제로는 이메일을 보내는 로직이 있어야 합니다.
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
