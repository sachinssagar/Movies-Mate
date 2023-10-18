import { Card } from "../components/Card";

export const MovieList = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};
