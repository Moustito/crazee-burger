import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getInputTextsConfig } from "./inputTextConfig";
import EditMessage from "./EditMessage";
import Form from "./Form";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <Form onChange={handleChange} product={productSelected} ref={titleEditRef}>
      <EditMessage />
    </Form>
  );
}
