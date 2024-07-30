import { Dispatch, SetStateAction } from "react";
import useApi from "../hooks/useApi";
import { DataState } from "../types/Data";
import Autocomplete from "./Autocomplete";

const ApiAutocomplete = ({
  placeholder,
  disabled = false,
  apiURL,
  apiKey,
  value,
  setValue,
  onChange = () => {},
}: {
  placeholder: string;
  disabled?: boolean;
  apiURL: string;
  apiKey: string[];
  value: DataState;
  setValue: Dispatch<SetStateAction<DataState>>;
  onChange?: () => void;
}) => {
  const { data, refetch } = useApi(apiURL, apiKey, !disabled);

  return (
    <Autocomplete
      placeholder={placeholder}
      value={value}
      setValue={setValue}
      data={data}
      onChange={onChange}
      onFocus={() => refetch()}
    />
  );
};

export default ApiAutocomplete;
