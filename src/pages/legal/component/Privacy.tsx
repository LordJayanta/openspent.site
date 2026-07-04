import React from 'react'

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
              Last updated: May 24, 2025
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-neutral-900">
            <div>
              <h4 className="text-neutral-200 font-semibold mb-1">1. Overview</h4>
              <p>
                OpenSpent is an open-source expense tracking application
                designed with privacy as the core priority. This app operates as
                a fully offline application. We do not operate any external
                servers, we do not collect your data, and your financial
                information never leaves your device through our software.
              </p>
            </div>

            <div>
              <h4 className="text-neutral-200 font-semibold mb-1">
                2. Local-Only Data Storage &amp; Authentication
              </h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>100% Offline Processing:</strong> All data entered
                  into OpenSpent—including your expense records, categories,
                  income data, and local user accounts—is encrypted and stored
                  strictly on your local device's internal storage.
                </li>
                <li>
                  <strong>No Server Sync:</strong> There is no backend server
                  infrastructure, no cloud synchronization, and no remote
                  account creation. If you delete the app or lose your device,
                  your data cannot be recovered by us, as we have zero access to
                  it.
                </li>
                <li>
                  <strong>No Third-Party APIs:</strong> The core functionality
                  of the app makes no external network calls or third-party API
                  requests.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-neutral-200 font-semibold mb-1">
                3. Version Differences &amp; Advertising (Google Play Version
                Only)
              </h4>
              <p className="mb-2">
                To keep the app free and maintain open-source transparency,
                there are two distinct distributions of OpenSpent:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>GitHub / Open-Source Version:</strong> This version is
                  entirely ad-free and does not contain any advertising software
                  development kits (SDKs) or network tracking layers.
                </li>
                <li>
                  <strong>Google Play Store Version:</strong> This version
                  integrates the Google Mobile Ads SDK (AdMob).
                  <ul
                    className="list-circle pl-5 mt-1.5 space-y-1.5 text-neutral-400"
                  >
                    <li>
                      <strong>On-Demand Activation:</strong> To protect your
                      privacy, the AdMob SDK remains in a completely deactivated
                      state by default. No ad requests are sent, and no tracking
                      occurs during normal offline use.
                    </li>
                    <li>
                      <strong>User-Initiated Consent:</strong> The advertising
                      SDK is only initialized and activated if you explicitly
                      choose to opt in and watch an ad.
                    </li>
                    <li>
                      <strong>Data Collected by Third Parties:</strong> When you
                      intentionally activate an ad, Google AdMob may
                      automatically collect and process certain device
                      identifiers, IP addresses (for general location
                      estimation), and ad interaction metrics to serve and
                      measure the advertisement. You can manage or opt out of
                      personalized tracking via your device's native
                      <a
                        href="#"
                        className="text-neutral-300 underline underline-offset-2 hover:text-emerald-400"
                        >Google Ad Settings</a
                      >.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-neutral-200 font-semibold mb-1">
                4. Device Permissions
              </h4>
              <p>
                The app may request standard device permissions (such as local
                storage access) solely to allow you to import or export your
                local database backups. These files are handled locally and are
                never transmitted over the internet.
              </p>
            </div>

            <div>
              <h4 className="text-neutral-200 font-semibold mb-1">
                5. Children's Privacy
              </h4>
              <p>
                Because OpenSpent is fully offline and does not harvest,
                collect, or store any personal information, it inherently
                complies with children's privacy regulations. We do not
                knowingly transmit personal data from children under any age.
              </p>
            </div>

            <div>
              <h4 className="text-neutral-200 font-semibold mb-1">
                6. Contact &amp; Open Source Transparency
              </h4>
              <p className="mb-2">
                As an open-source project, you are welcome to inspect the
                codebase to verify our offline and on-demand ad logic. For
                questions or concerns regarding this policy, contact us at:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  GitHub Repository:
                  <span className="text-neutral-300"
                    >[Insert Link to your OpenSpent Repo]</span
                  >
                </li>
                <li>
                  Email:
                  <span className="text-neutral-300"
                    >[Insert your contact email]</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </section>
  )
}
