import AddArticle from "./components/AddArticle";
import Articles from "./components/Articles";
import FilterArticle from "./components/FilterArticle";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Post Articles</h1>
        <div className="flex flex-row justify-between">
          <FilterArticle />
          <AddArticle />
        </div>
        <Articles />
      </div>
    </main>
  );
}
