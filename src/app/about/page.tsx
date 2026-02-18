export const metadata = {
  title: "About Us – AI Code Error Fixer",
  description:
    "Learn about our mission to help developers debug smarter using AI-powered error diagnosis tools.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We built this platform to help developers understand, fix, and
            prevent code errors faster using AI-powered diagnostics.
          </p>
        </section>

        {/* STORY */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Debugging can be frustrating. Developers often spend hours
              searching through documentation, forums, and stack traces just to
              understand what went wrong.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We created this AI-powered tool to make error diagnosis instant,
              clear, and educational — so you don’t just fix the problem, but
              understand why it happened.
            </p>
          </div>
        </section>

        {/* MISSION */}
        <section className="mb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: empower developers with clarity. We want to
              reduce frustration, improve learning, and accelerate development
              workflows.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Clear error explanations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Actionable solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Preventive insights</span>
              </li>
            </ul>
          </div>
        </section>

        {/* VALUES */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-12">
            What We Believe In
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3">Clarity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Technology should make things simpler, not more confusing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3">Learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every bug is an opportunity to grow and improve.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3">Efficiency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developers deserve tools that save time and mental energy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
