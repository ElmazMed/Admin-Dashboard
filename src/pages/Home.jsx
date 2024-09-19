import Cards from "../components/Cards";
import Nav from "../components/Nav";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <>
      <main className="md:flex relative">
        <Nav />
        <div className="w-full">
          <Cards />
          <Dashboard />
        </div>
      </main>
    </>
  );
}
