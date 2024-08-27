document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Cambiar entre temas claro y oscuro
    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        const icon = themeToggleBtn.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        } else {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        }
    });

    // Elementos de encriptación
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');

    // Validación de texto
    function validateText(text) {
        const regex = /^[a-z\s]+$/;
        return regex.test(text);
    }

    // Función para mostrar alertas personalizadas
    function showAlert(iconPath, title, backgroundColor) {
        Swal.fire({
            title: title,
            html: `<img src="${iconPath}" alt="Icono personalizado" class="custom-icon">`, // Ícono personalizado
            icon: null, // No mostrar el ícono predeterminado
            background: backgroundColor, // Fondo personalizado
            color: body.classList.contains('dark-theme') ? '#fff' : '#000', // Color del texto según el tema
            timer: 1500,
            showConfirmButton: false,
            customClass: {
                popup: 'custom-swal-popup', // Clase personalizada para el popup
            },
        });
    }

    // Encriptar texto
    encryptBtn.addEventListener('click', function () {
        const text = inputText.value;
        if (validateText(text)) {
            outputText.value = encryptText(text);
            showAlert('assets/img/encrypt-icon.png', 'Texto encriptado correctamente');
        } else {
            showAlert('assets/img/warning-icon.png', 'Ingrese solo letras minúsculas sin caracteres especiales');
        }
    });

    // Desencriptar texto
    decryptBtn.addEventListener('click', function () {
        const text = inputText.value;
        if (validateText(text)) {
            outputText.value = decryptText(text);
            showAlert('assets/img/decrypt-icon.png', 'Texto desencriptado correctamente');
        } else {
            showAlert('assets/img/warning-icon.png', 'Ingrese solo letras minúsculas sin caracteres especiales');
        }
    });

    // Limpiar textos
    clearBtn.addEventListener('click', function () {
        inputText.value = '';
        outputText.value = '';
    });

    // Copiar al portapapeles
    copyBtn.addEventListener('click', function () {
        if (outputText.value.trim() !== '') {
            outputText.select();
            document.execCommand('copy');
            showAlert('assets/img/copy-icon.png', 'Texto copiado al portapapeles');
        } else {
            showAlert('assets/img/error-icon.png', 'No hay texto para copiar');
        }
    });

    // Función para encriptar texto
    function encryptText(text) {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    }

    // Función para desencriptar texto
    function decryptText(text) {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }
});
