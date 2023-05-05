import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, limpiarCarrito } = useContext(CartContext);
  const [orderId, SetOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total,
      //serverTimestamp guarda la fecha exacta en donde se guarda en firebase
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    //addDoc nos devuelve una promesa por si la queremos trabajar:
    addDoc(ordersCollection, dataOrder).then((res) => SetOrderId(res.id));

    cart.map((prod) => {
      updateDoc(doc(db, "products", prod.id), {
        stock: prod.stock - prod.quantity,
      });

      limpiarCarrito();
    });
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      phone: "",
    },

    onSubmit: checkoutFn,

    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres."),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("Este campo es obligatorio"),
      phone: Yup.number().required("Este campo es obligatorio"),
    }),

    //La siguiente propiedad hace que el error no se muestre a medida que el usuario va escribiendo en el campo
    validateOnChange: false,
  });

  // console.log(errors);

  return (
    <div>
      {orderId ? (
        <h1>Gracias por tu compra, el nro de Orden es {orderId}</h1>
      ) : (
        <FormCheckout
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
