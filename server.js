const express = require('express');
const path = require('path');

const app = express();

// تقديم ملفات الموقع الثابتة (HTML, CSS, JS) من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// توجيه الصفحة الرئيسية الافتراضية لفتح ملف الواجهة (مثال: bot.html أو index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bot.html')); // أو admin.html حسب رغبتك
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Web server running on port ${PORT}`);
});
