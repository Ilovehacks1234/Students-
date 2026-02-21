import { useState } from "react";

export default function StudMetricsWebsite() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks for signing up!");

    setEmail("");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold">StudMetrics</h1>

        <button
          onClick={() => setOpen(true)}
          className="px-5 py-2 bg-black text-white rounded-xl hover:opacity-90"
        >
          Join Beta
        </button>
      </nav>

      <section className="px-6 py-24 text-center bg-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Smart Pricing Analytics for LEGO Resellers
        </h2>

        <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
          StudMetrics helps you find the most profitable listing price, track inventory value, and analyze market sales data.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="px-8 py-4 bg-black text-white rounded-2xl text-lg hover:opacity-90"
        >
          Start Free Trial
        </button>
      </section>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-6">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Join Beta</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter email"
                className="w-full border p-3 rounded-xl mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl"
              >
                Sign Up
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
