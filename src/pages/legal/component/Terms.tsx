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
                    Effective Date: July 7, 2026
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
                        1. Scope of Service &amp; Version Differences
                    </h4>
                    <p className="mb-2">
                        OpenSpent is an open-source expense tracking utility. It is
                        distributed via two primary channels with specific functional
                        characteristics:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                        <li>
                            <strong>GitHub Distribution:</strong> A fully open-source,
                            ad-free version compiled from the public source code.
                        </li>
                        <li>
                            <strong>Google Play Store Distribution:</strong> A version
                            that includes integrated code frameworks for optional,
                            user-initiated third-party advertisements (Google AdMob).
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-200 font-semibold mb-1">
                        2. Local Data Governance &amp; User Responsibility
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                        <li>
                            <strong>Zero Server Infrastructure:</strong> OpenSpent
                            operates entirely as an offline application. All data,
                            financial records, profiles, and configuration settings are
                            processed and stored strictly on your local device.
                        </li>
                        <li>
                            <strong>Data Permanence &amp; Loss:</strong> Because we do not
                            host, store, or have access to your data, you are solely
                            responsible for managing your data backups. We cannot recover
                            lost, corrupted, or deleted data resulting from app
                            uninstallation, device failure, factory resets, or OS updates.
                        </li>
                        <li>
                            <strong>Security:</strong> While the software adheres to
                            standard device storage safety practices, the security of your
                            data ultimately depends on the physical security of your
                            device and your personal password/biometric habits.
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-200 font-semibold mb-1">
                        3. Optional Advertising Setup (Play Store Version Only)
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                        <li>
                            <strong>On-Demand Execution:</strong> The Google Play Store
                            build contains the Google AdMob SDK. This SDK is deactivated
                            by default. It will only initialize, execute, and make network
                            requests if you explicitly interact with the interface to
                            trigger and watch an ad.
                        </li>
                        <li>
                            <strong>Third-Party Terms:</strong> By choosing to activate an
                            advertisement, you agree to Google AdMob's respective terms of
                            service and processing rules. We bear no liability for network
                            latency, mobile data charges, or tracking behaviors initiated
                            by the AdMob platform during active ad play.
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-200 font-semibold mb-1">
                        4. Open-Source Licensing &amp; Code Usage
                    </h4>
                    <p className="mb-2">
                        The underlying source code of OpenSpent is made publicly
                        available on GitHub.
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                        <li>
                            Your usage, modification, and redistribution of the source
                            code are governed strictly by the open-source license
                            specified within the official code repository (<span
                                className="text-neutral-300"
                            >[Insert Open Source License Name, e.g., MIT / GNU
                                GPLv3]</span
                            >).
                        </li>
                        <li>
                            The compiled binary distributed on the Google Play Store is
                            intended for personal, non-commercial end-use only.
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
                        time. Updates will be made visible within the public GitHub
                        repository or via app update changelogs. Continued use of the
                        App following any updates constitutes acceptance of the new
                        terms.
                    </p>
                </div>

                <div>
                    <h4 className="text-neutral-200 font-semibold mb-1">
                        7. Contact Information
                    </h4>
                    <p className="mb-2">
                        For questions regarding these Terms, bug reporting, or code
                        contributions, please reach out via:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            GitHub Repository :
                            <Link to={'https://github.com/LordJayanta/openspent'} className="text-neutral-300"> https://github.com/LordJayanta/openspent</Link >
                        </li>
                        <li>
                            Email :
                            <span className="text-neutral-300"> techie.jayanta@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
