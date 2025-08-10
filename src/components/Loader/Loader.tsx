import { StyledLoader } from "./Loader.styled";

interface ILoader {
  text: string;
}

const Loader: React.FC<ILoader> = ({ text }) => (
  <StyledLoader>{text}</StyledLoader>
);

export default Loader;
