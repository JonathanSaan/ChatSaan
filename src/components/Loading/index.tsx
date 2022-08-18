import { CircularProgress } from "react-cssfx-loading";

export const Loading = () => {
  return (
    <div className="Loading">
      <CircularProgress
        color="#6785FD"
        height="60px"
        width="60px"
      />
    </div>
  );
};