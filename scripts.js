const fileInput = document.getElementById('file-input');
const modelEntity = document.getElementById('uploaded-model');
const worldView = document.getElementById('world-view');
const viewOption = document.getElementById('view-option');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const modelUrl = e.target.result;
            modelEntity.setAttribute('gltf-model', modelUrl);
            worldView.setAttribute('gltf-model', modelUrl);
        };
        reader.readAsDataURL(file);
    }
});

viewOption.addEventListener('change', function(event) {
    const option = event.target.value;
    if (option === 'world') {
        document.getElementById('marker').style.display = 'none';
        document.getElementById('world-view').style.display = 'block';
    } else {
        document.getElementById('marker').style.display = 'block';
        document.getElementById('world-view').style.display = 'none';
    }
});

function generateQRCode() {
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: window.location.href,
        size: 200
    });
}
