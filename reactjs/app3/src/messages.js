import { toast, Bounce } from 'react-toastify';
export default function showMessage(msg,mode='error')
{
    if(mode === 'error')
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
    else 
    {
        toast.success(msg, {
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
}
export const ERR_MESSAGE = "you are offline (internet is not available)";
