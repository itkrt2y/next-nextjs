import { Layout } from "../../components/Layout";

export const Page = ({ id }: { id: string }) => {
  return (
    <Layout>
      <div
        class="underline cursor-pointer"
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </div>
      <div>pokemon number: {id}</div>
    </Layout>
  );
};
