// Google Apps Script URL (akan dibuat di Langkah 7)
const scriptURL = 'https://script.google.com/macros/s/AKfycbyYcGNvqhOe4INbeKOpK774uKaPLfgd_N4qMHd7MwV-m-OXPejRneqh4T26lB3VmByOXg/exec';

document.getElementById('formPendaftaran').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        nama: document.getElementById('nama').value,
        program: document.getElementById('program').value,
        nik: document.getElementById('nik').value,
        alamat: document.getElementById('alamat').value,
        whatsapp: document.getElementById('whatsapp').value,
        timestamp: new Date().toLocaleString()
    };

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        document.getElementById('responseMessage').innerHTML = 
            '<span style="color: green;">Pendaftaran berhasil dikirim!</span>';
        document.getElementById('formPendaftaran').reset();
    })
    .catch(error => {
        document.getElementById('responseMessage').innerHTML = 
            '<span style="color: red;">Terjadi kesalahan, coba lagi.</span>';
        console.error('Error:', error);
    });
});
