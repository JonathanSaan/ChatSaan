import { CircularProgress } from "react-cssfx-loading";
import { ContainerLoading } from "./styles";

const Loading = () => {
  return (
    <ContainerLoading>
      <CircularProgress
        color="#6785FD"
        height="60px"
        width="60px"
      />
    </ContainerLoading>
  );
};

export default Loading;