import { SVGProps } from "react";
import { LoadingIcon, Container } from "./LoadingScreen.styles";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LoadingScreen = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <Container>
      <LoadingIcon
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        xmlSpace="preserve"
        viewBox="0 0 508.48 508.48"
        // allows screen readers to identify and descripbe
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path d="m114.928 174.046-28.8 28.8C114.48 109.944 212.776 57.617 305.677 85.969a175.873 175.873 0 0 1 88.851 62.012l25.488-19.312C350.79 37.151 220.481 19.078 128.962 88.304A207.77 207.77 0 0 0 52.64 203.998l-30.016-29.952L0 196.654l68.8 68.8 68.8-68.8-22.672-22.608zM439.68 242.702l-68.8 68.8 22.624 22.624 29.136-29.12c-28.103 93.051-126.317 145.702-219.368 117.599a176.002 176.002 0 0 1-91.912-65.599l-25.968 18.688a206.719 206.719 0 0 0 135.248 83.824 211.742 211.742 0 0 0 33.76 2.736c95.518-.045 178.669-65.284 201.44-158.048l29.952 29.92 22.688-22.624-68.8-68.8zm-.8 46.096.816-.816 1.184 1.2-2-.384z" />
      </LoadingIcon>
    </Container>
  );
};
export default LoadingScreen;
