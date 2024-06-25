import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import Form from "./Form";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import SubmitMessage from "./SubmitMessage";

export default function AddForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
      product={newProduct}
    >
      <PrimaryButton
        label={"Ajouter un nouveau produit au menu"}
        className={isSubmitted && "activeButton"}
        version="succes"
      />
      {isSubmitted && <SubmitMessage />}
    </Form>
  );
}
