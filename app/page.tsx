export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-10">
      <header className="w-full max-w-3xl flex justify-between mb-10">
        <h1 className="text-xl font-bold">MyWebsite</h1>
        <nav className="flex gap-4">
          <a href="#" className="underline">
            Home
          </a>
          <a href="#" className="underline">
            About
          </a>
          <a href="#" className="underline">
            Contact
          </a>
        </nav>
      </header>

      <section className="text-center max-w-xl">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to Our Landing Page
        </h2>
        <p className="text-gray-700 mb-6">
          This is a very simple landing page. Your task is to redesign it,
          improve UI/UX, add animations, and make it look modern.
        </p>
        <button className="px-4 py-2 border border-black">Learn More</button>
      </section>

      <section className="max-w-3xl w-full mt-16">
        <h3 className="text-2xl font-semibold mb-6">Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4">
            <h4 className="font-bold mb-2">Feature 1</h4>
            <p className="text-sm">This is a feature description.</p>
          </div>

          <div className="border p-4">
            <h4 className="font-bold mb-2">Feature 2</h4>
            <p className="text-sm">This is a feature description.</p>
          </div>

          <div className="border p-4">
            <h4 className="font-bold mb-2">Feature 3</h4>
            <p className="text-sm">This is a feature description.</p>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-gray-600 text-sm">
        © 2025 MyWebsite. All rights reserved.
      </footer>
    </main>
  );
}
