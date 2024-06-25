import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled className="imagePreview">
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <p>Aucune image</p>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  width: 215px;
  height: 120px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.colors.greyLight};
  border-radius: 5px;

  color: ${theme.colors.greySemiDark};
  background-color: ${theme.colors.white};
  font-size: 16px;

  img {
    max-width: 215px;
    max-height: 120px;
  }
`;
