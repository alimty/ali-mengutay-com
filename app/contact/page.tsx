import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function Contact() {
  return (
    <PageLayout title="Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Form Card */}
        <div className="col-span-full md:col-span-2 bg-[#333639] rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-xl bg-[#212224] text-white border border-gray-700"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-xl bg-[#212224] text-white border border-gray-700"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#FFC148] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#FFD577] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <Card
          title="LinkedIn"
          subtitle="CONNECT WITH ME"
          href="https://linkedin.com/in/yourusername"
        />
        <Card
          title="GitHub"
          subtitle="SEE MY CODE"
          href="https://github.com/yourusername"
        />
      </div>
    </PageLayout>
  );
}
