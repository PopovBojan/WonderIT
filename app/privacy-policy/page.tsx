export default function PrivacyPolicyPage() {
  return (
    <main className="container py-12 bg-secondary/20" style={{height:'100vh'}}>
      <h1 className="text-5xl">Privacy Policy</h1>

      <p className="text-m text-text-secondary max-w-2xl mb-6">Last updated: June 2026</p>

      <h2 className="text-4xl mb-6">Introduction</h2>
      <p className="text-m text-text-secondary max-w-2xl mb-6">
        WonderIT ("we", "our", or "us") respects your privacy and is committed
        to protecting your personal information.
      </p>

      <h2 className="text-4xl mb-6">Information We Collect</h2>
      <ul className="mb-6">
        <li className="text-m text-text-secondary max-w-2xl">Name</li>
        <li className="text-m text-text-secondary max-w-2xl">Email address</li>
        <li className="text-m text-text-secondary max-w-2xl">Phone number (if provided)</li>
        <li className="text-m text-text-secondary max-w-2xl">Company information (if provided)</li>
        <li className="text-m text-text-secondary max-w-2xl">Analytics and website usage data</li>
      </ul>

      <h2 className="text-4xl mb-6">How We Use Information</h2>
      <ul className="mb-6">
        <li className="text-m text-text-secondary max-w-2xl">Respond to inquiries</li>
        <li className="text-m text-text-secondary max-w-2xl">Provide requested services</li>
        <li className="text-m text-text-secondary max-w-2xl">Improve website performance</li>
        <li className="text-m text-text-secondary max-w-2xl">Communicate regarding projects</li>
      </ul>

      <h2 className="text-4xl mb-6">Data Security</h2>
      <p className="text-m text-text-secondary max-w-2xl mb-6">
        We implement reasonable technical and organizational measures to
        protect personal information.
      </p>

      <h2 className="text-4xl mb-6">Third-Party Services</h2>
      <p className="text-m text-text-secondary max-w-2xl mb-6">
        We may use third-party providers such as hosting, analytics, email,
        and cloud infrastructure services.
      </p>

      <h2 className="text-4xl mb-6">Your Rights</h2>
      <p className="text-m text-text-secondary max-w-2xl mb-6">
        You may request access, correction, or deletion of your personal
        information by contacting us.
      </p>

      <h2 className="text-4xl mb-6">Contact</h2>
      <p className="text-m text-text-secondary max-w-2xl mb-6">
        For privacy-related requests, please contact us through our Contact
        page.
      </p>
    </main>
  );
}