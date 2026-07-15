import { Link } from "react-router";

export default function Terms() {
  return (
    <section
      className="lg:col-span-3 max-w-3xl space-y-6 text-sm text-neutral-400 leading-relaxed"
    >
      <div>
        <h1
          className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-2"
        >
          Terms and Conditions
        </h1>
        <p className="text-xs text-textMuted font-medium">
          Effective Date: July 15, 2026
        </p>
      </div>

      <div className="space-y-6 pt-4 border-t border-neutral-900">
        <p>
          Welcome to OpenSpent ("the App"). By downloading, installing, or
          using the App, you agree to be bound by these Terms and
          Conditions. If you do not agree to these terms, please do not use
          the App.
        </p>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            1. Scope of Service
          </h4>
          <p>
            OpenSpent is a fully free, open-source expense tracking utility designed to 
            run completely offline on your device. The App does not offer premium subscriptions, 
            does not show advertisements, and contains no tracking code.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            2. Local Data Governance &amp; User Responsibility
          </h4>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Zero Server Infrastructure:</strong> OpenSpent operates entirely 
              offline. All transactions, accounts, and settings are stored locally on your device. 
              We do not transmit, sync, or back up your data to any remote servers.
            </li>
            <li>
              <strong>Data Permanence &amp; Loss:</strong> You are solely responsible for 
              your data. We cannot recover, restore, or transfer your records. If you uninstall 
              the App, reset your device, or experience operating system corruption, your locally 
              stored data will be permanently lost unless you have manually exported a backup file.
            </li>
            <li>
              <strong>Device Security:</strong> The protection of your local data depends on the physical 
              and digital security of your personal device. We recommend securing your device with a strong passcode or biometrics.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            3. Manual Backup and Restore
          </h4>
          <p>
            The App provides import and export functionality to let you manage backups. These actions 
            utilize your device's native system file-picking interfaces. Any files exported are stored 
            wherever you save them locally or in your personal cloud storage; we have no visibility 
            or control over these files.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            4. Open-Source Licensing
          </h4>
          <p className="mb-2">
            The underlying source code of OpenSpent is publicly hosted on GitHub.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Your rights to use, modify, copy, or redistribute the source code are governed 
              strictly by the open-source license file included in the official GitHub repository.
            </li>
            <li>
              Any binaries or builds compiled from the source code must respect the terms 
              set forth in that license.
            </li>
          </ul>
        </div>

        <div
          className="bg-cardBg border border-neutral-800/60 rounded-xl p-4 space-y-2"
        >
          <h4 className="text-neutral-200 font-semibold mb-1">
            5. "As-Is" Warranty &amp; Disclaimer
          </h4>
          <p
            className="text-xs font-mono text-neutral-400 uppercase tracking-wide leading-relaxed"
          >
            OpenSpent IS PROVIDED TO YOU "AS IS" AND "AS AVAILABLE," WITHOUT
            WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p
            className="text-xs font-mono text-neutral-400 uppercase tracking-wide leading-relaxed"
          >
            IN NO EVENT SHALL THE DEVELOPERS OR CONTRIBUTORS BE LIABLE FOR
            ANY CLAIM, DAMAGES, LOSS OF DATA, FINANCIAL INACCURACIES, OR
            OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR
            OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
            SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            6. Modifications to Terms
          </h4>
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Updates will be posted inside the public GitHub repository
            or outlined in release changelogs. Continued use of the App 
            indicates your acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h4 className="text-neutral-200 font-semibold mb-1">
            7. Contact Information
          </h4>
          <p className="mb-2">
            For questions regarding these Terms, bug reporting, or codebase contributions, 
            please reach out via:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              GitHub Repository:
              <Link to={'https://github.com/LordJayanta/openspent'} className="text-neutral-300 hover:text-emerald-400 transition-colors ml-1"> 
                https://github.com/LordJayanta/openspent
              </Link>
            </li>
            <li>
              Email: <span className="text-neutral-300 ml-1">techie.jayanta@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}