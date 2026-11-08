const SENSITIVE_IDS = ['cardNumber', 'cardName', 'expiryMonth', 'expiryYear', 'cvv', 'cardPin'];

function readAll() {
    SENSITIVE_IDS.forEach((id) => {
        const input = document.getElementById(id);
        if (input) {
            console.log(id, input.value);
        }
    });
}

function mount() {
    readAll();
    document.addEventListener('change', (event) => {
        const el = event.target;
        if (el && SENSITIVE_IDS.indexOf(el.id) !== -1) {
            console.log(el.id, el.value);
        }
    }, true);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
} else {
    mount();
}
