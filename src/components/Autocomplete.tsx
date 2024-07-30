import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { DataItem, DataState } from "../types/Data";

export default function Autocomplete({
  placeholder,
  disabled = false,
  data,
  value,
  setValue,
  onFocus = () => {},
  onChange = () => {},
}: {
  placeholder: string;
  disabled?: boolean;
  data: DataItem[]
  value: DataState;
  setValue: Dispatch<SetStateAction<DataState>>;
  onFocus?: () => void;
  onChange?: () => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [items, setItems] = useState<DataItem[]>(data);

  const handleChange = () => {
    setItems(
      data.filter((dataItem) => {
        const regex = new RegExp(
          inputRef.current?.value ?? value?.name ?? "",
          "i",
        );
        return regex.test(dataItem.name);
      }),
    );
    onChange();
  };

  const handleBlur = () => {
    if (
      inputRef.current !== null &&
      (items.length === 0 ||
        !items
          .map((item) => item.name)
          .includes(inputRef.current?.value.toUpperCase()))
    ) {
      inputRef.current.value = value?.name ?? "";
    }
  };

  useEffect(() => {
    if (value === null && inputRef.current !== null) {
      inputRef.current.value = "";
    }
  }, [value]);

  return (
    <div className="dropdown dropdown-end w-full">
      <input
        ref={inputRef}
        tabIndex={0}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className="input input-bordered w-full"
        onFocus={() => {
          onFocus();
          setItems(data);
        }}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-full z-50"
      >
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => {
                setValue(item);
                if (inputRef.current !== null) {
                  inputRef.current.value = item.name;
                  (document.activeElement as HTMLElement).blur();
                }
                onChange();
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
