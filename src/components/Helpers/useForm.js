import { useState } from "react";
import { helpHttp } from "./helpHttp";
import swal from "sweetalert";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const effect = () => {
    if (response) {
      swal('Good Job!','Your message has been sent', 'success');
      // Restablecer el formulario y el estado de envío
      setLoading(false); // Puedes restablecer isLoading si lo deseas
      setForm(initialForm);
      setResponse(false);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formErrors = validateForm(form); // Valida el formulario
    setErrors(formErrors); // Establece los errores

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      // Aquí se agrega la lógica para enviar el mensaje
      helpHttp()
        .post("https://formsubmit.co/ajax/bmchucop@gmail.com", {
          body: form,
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 3000);
        });
    
    };
  };
  

  return {
    form,
    errors,
    loading,
    response,
    effect,
    handleChange,
    handleSubmit,
  };
};