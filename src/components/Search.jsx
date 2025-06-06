export const Search = ({ setSearch }) => {
  const search = (formData) => {
    const query = formData.get("query");
    setSearch(query);
  };
  return (
    <form action={search}>
      <input name="query" placeholder="Search for images..." />
    </form>
  );
};
