import { DButton } from "./DownloadButton.styled";

interface IDownloadButton {
  text: string;
}

const DownloadButton: React.FC<IDownloadButton> = ({ text }) => {
  return (
    <DButton href="https://getpp.app/downloaded/" target="_blank">
      {text}
    </DButton>
  );
};

export default DownloadButton;
