export const Search = ({ setSearch }) => {
  const search = (formData) => {
    const query = formData.get("query");
    setSearch(query);
  };
  return (
    <form action={search}>
      <input
        className="bg-[#2a2a3d] text-[#ededed] border-2 border-[#b388ff] rounded-md p-2 focus:outline-2 focus:outline-offset-2 focus:outline-[#d1b3ff]"
        name="query"
        placeholder="Search for images..."
      />
    </form>
  );
};
