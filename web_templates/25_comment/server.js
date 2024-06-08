const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost/commentDB', { useNewUrlParser: true, useUnifiedTopology: true });

// 댓글 스키마 및 모델 정의
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

const Comment = mongoose.model('Comment', commentSchema);

// 댓글 조회 요청 처리
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(comments);
        }
    });
});

// 댓글 작성 요청 처리
app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    const newComment = new Comment({ name, comment });
    newComment.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
