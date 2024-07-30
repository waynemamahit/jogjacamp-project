import SearchIcon from "../components/icons/SearchIcon";

export default function TestLayoutFormPage() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 p-4">
      <div className="flex flex-wrap justify-center gap-2">
        <button type="button" className="btn btn-primary">
          Tambah
        </button>
        <button type="button" className="btn btn-secondary">
          Import
        </button>
        <button type="button" className="btn btn-accent">
          Export
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <SearchIcon />
        </label>
        <select className="select select-bordered w-full">
          <option disabled selected>
            Select Year
          </option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
        </select>
      </div>
    </form>
  );
}
