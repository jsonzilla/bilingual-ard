// Load settings on startup
document.addEventListener('DOMContentLoaded', () => {
    browser.storage.local.get({
        fontSizeScale: 1.0
    }).then(items => {
        document.getElementById('font-size').value = items.fontSizeScale;
        document.getElementById('font-size-val').textContent = items.fontSizeScale;
    });
});

// Save settings when slider moves
document.getElementById('font-size').addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    document.getElementById('font-size-val').textContent = value;
    
    browser.storage.local.set({
        fontSizeScale: value
    }).then(() => {
        const status = document.getElementById('status');
        status.textContent = 'Settings saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
    });
});
