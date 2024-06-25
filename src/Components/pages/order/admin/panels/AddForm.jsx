import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import Form from "./Form";

export default function AddForm() {
  const [isSubmited, setIsSubmited] = useState(false);
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAddProduct(newProductToAdd);
    // Vide le formulaire
    setNewProduct(EMPTY_PRODUCT);

    displaySuccesMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // Destructuration de l'objet "e.target" pour obtenir name et value
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const displaySuccesMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmited={isSubmited}
      product={newProduct}
    />
  );
}
