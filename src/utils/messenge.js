import Swal from "sweetalert2";
export const showMessage = (title, messenge) => {
  return Swal.fire(title, messenge, "success");
};
