import { toast } from 'react-toastify';

const UseAlert = () => {

    const alertError = mensaje =>{
        toast.error(mensaje, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    };

  return {alertError}
}

export default UseAlert
