import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getInputTextsConfig } from "./inputTextConfig";
import EditMessage from "./EditMessage";
import Form from "./Form";

export default function EditForm() {
  const {
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    handleEditToBasket,
  } = useContext(OrderContext);

  // const inputTexts = getInputTextsConfig(productSelected);

  // @TODO - insert replaceFrenchCommaWithDot in EditForm to prevent changing the number type to a string type with the ","
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
    handleEditToBasket(productBeingUpdated);
  };

  return (
    <Form onChange={handleChange} product={productSelected} ref={titleEditRef}>
      <EditMessage />
    </Form>
  );
}
