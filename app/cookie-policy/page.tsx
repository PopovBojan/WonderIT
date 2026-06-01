export default function CookiePolicyPage() {
  return (
    <main className="container py-12 bg-secondary/20" style={{height:'100vh'}}>
      <h1 className="text-5xl">Cookie Policy</h1>

      <p className="text-m text-text-secondary max-w-2xl mb-6">Last updated: June 2026</p>

      <h2 className="text-4xl mb-6">What Are Cookies?</h2>
      <p className="text-m text-text-secondary max-w-2xl mb-6">
        Cookies are small text files stored on your device that help improve
        website functionality and user experience.
      </p>

      <h2 className="text-4xl mb-6">How We Use Cookies</h2>
      <ul className="mb-6">
        <li className="text-m text-text-secondary max-w-2xl">Website functionality</li>
        <li className="text-m text-text-secondary max-w-2xl">Analytics and performance measurement</li>
        <li className="text-m text-text-secondary max-w-2xl">Security and fraud prevention</li>
      </ul>

      <h2 className="text-4xl mb-6">Managing Cookies</h2>
      <p className="text-m text-text-secondary max-w-2xl mb-6">
        Most browsers allow you to control or disable cookies through browser
        settings.
      </p>
    </main>
  );
}