let timeout;

function startTimeout() {
    timeout = setTimeout(function () {
        alert("Timeout: No data entered for 30 seconds");
    }, 10000); // 10 seconds
}

function resetTimeout() {
    clearTimeout(timeout);
}

function submitForm() {
    resetTimeout();
}

window.onload = startTimeout;