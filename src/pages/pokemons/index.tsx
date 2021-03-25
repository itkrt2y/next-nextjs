import { useState } from "preact/hooks";
import { Link, useLocation } from "wouter-preact";
import { Layout } from "~/components/Layout";
import { H1 } from "~/components/heading";
import { ChevronLeft, ChevronRight } from "~/components/icons";
import { useQuery } from "~/gqless";

export const Page = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const pageStr = searchParams.get("page");
  const [page, setPage] = useState(pageStr ? parseInt(pageStr, 10) : 1);
  const [location, setLocation] = useLocation();

  return (
    <Layout>
      <H1>pokemons#index</H1>

      <div className="my-2">
        <div className="flex">
          <div className="ml-auto">
            <button
              className="p-1 focus:outline-none"
              onClick={() => {
                const newPage = page - 1;
                setPage(newPage);
                setLocation(`${location}?page=${newPage}`);
              }}
              disabled={page <= 1}
            >
              <ChevronLeft />
            </button>
            <button
              className="p-1 focus:outline-none"
              onClick={() => {
                const newPage = page + 1;
                setPage(newPage);
                setLocation(`${location}?page=${newPage}`);
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <DataTable page={page} />
    </Layout>
  );
};

const limit = 10;
const DataTable = ({ page }: { page: number }) => {
  const first = page * limit;
  const { $state, pokemons } = useQuery({
    prepare({ prepass, query }) {
      prepass(query.pokemons({ first }), "id", "number", "name");
    },
  });

  if ($state.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table className="table-fixed w-full border divide-x">
      <thead className="border-b bg-gray-100">
        <tr>
          <th className="py-1 font-medium">id</th>
          <th className="py-1 font-medium">name</th>
        </tr>
      </thead>

      <tbody>
        {pokemons({ first })
          ?.slice(first - limit, first)
          .map((p) => (
            <tr key={p?.id} className="border-b">
              <td className="p-2 text-center">
                <Link href={`/pokemons/${p?.number}`} class="underline">
                  {p?.number}
                </Link>
              </td>
              <td className="p-2 text-center">{p?.name}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
