import { Layout } from "~/components/Layout";
import { useQuery } from "~/gqless";

export const Page = ({ name }: { name: string }) => {
  const { $state, pokemon } = useQuery();

  const p = pokemon({ name });

  return (
    <Layout>
      <div class="underline cursor-pointer" onClick={() => history.back()}>
        Back
      </div>

      {$state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            {p?.number}: {name}
          </div>

          <div>
            <img src={p?.image} alt={p?.name} />
          </div>
        </div>
      )}
    </Layout>
  );
};
