import Form from "next/form";
import SerachFormReset from "./SerachFormReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        placeholder="Search Startups"
        defaultValue={query}
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SerachFormReset />}
        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
