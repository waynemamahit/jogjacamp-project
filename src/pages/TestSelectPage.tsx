import { useCallback, useMemo, useState } from "react";
import ApiAutocomplete from "../components/ApiAutocomplete";
import { DataState } from "../types/Data";

export default function TestSelectPage() {
  const [province, setProvince] = useState<DataState>(null);

  const regencyURL = useMemo(
    () => (province ? "regencies_of/" + province.id : ""),
    [province],
  );
  const [regency, setRegency] = useState<DataState>(null);

  const districtURL = useMemo(
    () => (regency ? "districts_of/" + regency.id : ""),
    [regency],
  );
  const [district, setDistrict] = useState<DataState>(null);

  const villageURL = useMemo(
    () => (district ? "villages_of/" + district.id : ""),
    [district],
  );
  const [village, setVillage] = useState<DataState>(null);

  const onChangeProvince = useCallback(() => {
    setRegency(null);
    setDistrict(null);
    setVillage(null);
  }, [setRegency, setDistrict, setVillage]);

  const onChangeRegency = useCallback(() => {
    setDistrict(null);
    setVillage(null);
  }, [setDistrict, setVillage]);

  const onChangeDistrict = useCallback(() => {
    setVillage(null);
  }, [setVillage]);

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 p-3">
      <ApiAutocomplete
        placeholder={"Select Province"}
        apiURL="provinces"
        apiKey={["provinces"]}
        value={province}
        setValue={setProvince}
        onChange={onChangeProvince}
      />
      <ApiAutocomplete
        placeholder={"Select Regency"}
        disabled={province === null}
        apiURL={regencyURL}
        apiKey={["regencies"]}
        value={regency}
        setValue={setRegency}
        onChange={onChangeRegency}
      />
      <ApiAutocomplete
        placeholder={"Select District"}
        disabled={regency === null}
        apiURL={districtURL}
        apiKey={["districts"]}
        value={district}
        setValue={setDistrict}
        onChange={onChangeDistrict}
      />
      <ApiAutocomplete
        placeholder={"Select Village"}
        disabled={district === null}
        apiURL={villageURL}
        apiKey={["villages"]}
        value={village}
        setValue={setVillage}
      />
      <div className="text-h4">
        <span className="font-bold">ADDRESS:</span>{" "}
        {[village?.name, district?.name, regency?.name, province?.name].join(
          " ",
        )}
      </div>
    </form>
  );
}
