import { Link } from "react-router";

export default function Privacy() {
  return (
    <section
      className="lg:col-span-3 max-w-3xl space-y-6 text-sm text-neutral-400 leading-relaxed"
    >
      <div>
        <h1
          className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-2"
        >
          Privacy Policy
        </h1>
        <p className="text-xs text-textMuted font-medium">
          Last updated: July 15, 2026
        </p>
      </div>

      <div className="space-y-6 pt-4 border-t border-neutral-900">
        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">1. Overview</h4>
          <p>
            OpenSpent is a completely free, open-source expense tracking application
            built with privacy as the absolute priority. The app operates fully offline, 
            features no advertisements, and contains zero tracking mechanisms. We do not 
            operate external servers, we do not collect your personal data, and your financial 
            information never leaves your device.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            2. Local-Only Data Storage
          </h4>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>100% Offline Processing:</strong> All information entered 
              into OpenSpent—including expense records, income, categories, and local 
              accounts—is saved strictly on your local device's internal storage.
            </li>
            <li>
              <strong>No Cloud Syncing:</strong> There is no backend infrastructure, 
              cloud database, or remote account creation. If you delete the app or lose 
              your device, your data cannot be recovered by us, as we have no access to it.
            </li>
            <li>
              <strong>No Third-Party APIs:</strong> The application does not make network 
              calls to external services or third-party APIs during regular operation.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            3. Zero Advertisements &amp; No Tracking
          </h4>
          <p>
            OpenSpent does not include advertising software development kits (SDKs), 
            analytics tools, telemetry scripts, or cookies. Your usage habits, device 
            identifiers, and application behaviors are never recorded, tracked, or 
            shared with third parties.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            4. Device Permissions
          </h4>
          <p>
            The app may request standard local storage access permissions solely to let 
            you import or export manual database backups. These files are processed locally 
            on your device and are never sent over the internet.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            5. Children's Privacy
          </h4>
          <p>
            Because OpenSpent does not harvest, collect, or transmit any data from its users, 
            it inherently complies with global children's privacy regulations. No information 
            is collected from anyone, regardless of age.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            6. Contact &amp; Open Source Transparency
          </h4>
          <p className="mb-2">
            As an open-source project, our code is fully auditable. You can inspect the repository 
            directly to verify the app's offline functionality. For questions regarding this policy, 
            contact us at:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              GitHub Repository :
              <Link to={'https://github.com/LordJayanta/openspent'} className="text-neutral-300 hover:text-emerald-400 underline underline-offset-2"> https://github.com/LordJayanta/openspent</Link>
            </li>
            <li>
              Email : <span className="text-neutral-300">techie.jayanta@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}