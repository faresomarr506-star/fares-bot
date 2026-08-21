const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'http://147.135.213.131:20046',
    changeOrigin: true,
    ws: true,
    xfwd: true,
    secure: false,
    onProxyReq: (proxyReq, req, res) => {
        // خداع الاستضافة لتظن أن الطلب قادم من نفس السيرفر الأساسي
        proxyReq.setHeader('Host', '147.135.213.131:20046');
    }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
