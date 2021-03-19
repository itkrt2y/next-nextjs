import { Provider } from "@urql/preact";
import { FunctionComponent } from "preact";
import { Link, useRoute } from "wouter-preact";
import { client } from "../graphql";

export const Layout: FunctionComponent = ({ children }) => (
  <div className="h-screen flex overflow-hidden bg-white">
    <div className="flex flex-col w-60">
      <SideBar />
    </div>

    <div
      className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
      tabIndex={0}
    >
      <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
        <main className="h-full">
          <Provider value={client}>{children}</Provider>
        </main>
      </div>
    </div>
  </div>
);

const SideBar: FunctionComponent = () => (
  <div className="flex flex-col flex-1 bg-gray-800 text-white">
    <div className="divide-y-2 divide-gray-700">
      <nav aria-label="Sidebar">
        <div className="space-y-1">
          <SideBarItem label="Home" href="/" />
          <SideBarItem label="Pokemon" href="/pokemons" />
        </div>
      </nav>
    </div>
  </div>
);

const SideBarItem: FunctionComponent<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  const [isActive] = useRoute(href);
  const classNames = isActive ? "bg-gray-700" : "";

  return (
    <Link
      href={href}
      class={`text-white group flex items-center px-6 py-5 text-sm font-medium ${classNames}`}
    >
      {label}
    </Link>
  );
};
