import Swal from "sweetalert2";

export const showMessage = (title, messenge) => {
  return Swal.fire(title, messenge, "success");
};

export const errorMessage = (title, messenge) => {
  return Swal.fire({
    icon: "error",
    title: title,
    text: messenge,
  });
};
