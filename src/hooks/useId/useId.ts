import { useParams } from "next/navigation";

const useId = () => {
  const params = useParams();
  if (!(typeof params?.id === "string")) {
    return undefined;
  }
  return decodeURI(params.id);
};

export default useId;
