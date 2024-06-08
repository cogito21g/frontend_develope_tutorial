const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost/reviewDB', { useNewUrlParser: true, useUnifiedTopology: true });

// 리뷰 스키마 및 모델 정의
const reviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Review = mongoose.model('Review', reviewSchema);

// 리뷰 조회 요청 처리
app.get('/reviews', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(reviews);
        }
    });
});

// 리뷰 작성 요청 처리
app.post('/reviews', (req, res) => {
    const { name, rating, review } = req.body;
    const newReview = new Review({ name, rating, review });
    newReview.save((err) => {
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
