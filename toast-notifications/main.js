let toastBox = document.getElementById("toastBox");
let succesMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted.';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error.';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again.';


const showToast = (msg) => {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    };
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    };
    if(msg.includes('Successfully')){
        toast.classList.add('success');
    };

    setTimeout(() => {
        toast.remove();
    }, 3000);
}