export function errorHandling($messageComponent, error) {
    $messageComponent({
        showClose: false,
        message: JSON.parse(error.request.response).message != null ? JSON.parse(error.request.response).message : 'Terjadi kesalahan server silahkan coba lagi!',
        type: error.request.status == 500 ? 'error' : 'warning',
    });
}

export function successHandling($messageComponent, message) {
    $messageComponent({
        showClose: false,
        message: message,
        type: 'success',
    });
}