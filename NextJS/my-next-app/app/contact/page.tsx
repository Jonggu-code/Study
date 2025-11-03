export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">Contact Page</h1>
      <p className="text-gray-700">
        문의는{" "}
        <a
          href="mailto:jonggucode@gmail.com"
          className="text-blue-500 hover:underline"
        >
          jonggucode@gmail.com
        </a>
        으로 부탁드립니다.
      </p>
    </section>
  );
}
