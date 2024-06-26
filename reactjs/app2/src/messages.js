import { toast, Bounce } from 'react-toastify';
export default function showMessage(msg)
{
    toast.error(msg, {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}