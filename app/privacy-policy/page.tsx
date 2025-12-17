import Link from "next/link";
import Header from "../components/layouts/header/layout";
import Footer from "../components/layouts/footer/layout";
import styles from './privacy.module.css';
import ExportedImage from "../components/layouts/ExportedImage";





import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | D3',
  description: '',
  keywords: '',
};


export default function PrivacyPolicy() {
  return (
    <main>
      <Header/>
      <div className={styles.partnerBanner}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2>Privacy policy</h2>
              <p>Thank you for choosing to be part of the D3 community. We are committed to protecting your privacy. This Privacy Notice explains how we collect, use, and disclose information through our websites — www.d3.com, www.d3.inc, and www.d3.app — and all related sites, software, and services that link to or reference this Privacy Notice (collectively, the “Platform”). The Platform is owned and operated by D3 Global, Inc. (“D3,” “we,” “us,” or “our”).</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className="container">
              <h4>Last Updated: June 1, 2025 </h4>
              <p>This Policy applies to information collected through the Platform, as well as to certain related interactions you may have with us. Additional details, including how we work with third parties, are described in later sections of this Privacy Notice.</p>
              <p>This Privacy Notice describes, among other things:</p>
              <ul>
                <li>Personal and other information we collect about you;</li>
                <li>How we use your information;</li>
                <li>How we may share your information with third parties; and</li>
                <li>Your choices regarding the personal information we collect about you.</li>
              </ul>
              <p>To the extent you are acting on behalf of an entity accessing the Platform, you agree to obtain all necessary consents from the relevant individuals to enable us to collect, use, hold and process that information in accordance with this Privacy Notice, including to provide such individual with a copy of this Privacy Notice.</p>
              <h2>COLLECTION OF YOUR PERSONAL AND OTHER INFORMATION</h2>
              <p>When you access or use the Platform, we may collect the following types of information:</p>
              <p>Personal Information: </p>
              <p>This includes information that identifies you or can be used to identify you, such as:</p>
              <ul>
                <li>Email address</li>
                <li>Blockchain addresses</li>
                <li>IP address</li>
                <li>Discord username</li>
                <li>Credit card details</li>
                <li>Proof of identity or KYC information, which may include your name, physical address, and related documents (only where legally required to deliver products or services)</li>
                <li>Any other information you choose to provide to us</li>
              </ul>
              <h2>Third-Party Platform Data:</h2>
              <p>If you decide to connect your account to a third-party platform like Discord, we may collect and share certain information from that platform, such as your name, email, demographic details, or content you’ve made public there. We are not responsible for how third parties handle your data; their privacy policies will apply.</p>
              <h2>Non-Personal Information</h2>
              <p>We also collect certain information that does not directly identify you. This may include:</p>
              <ul>
                  <li>Device and browser details (e.g., make, model, OS, HTTP headers)</li>
                  <li>Pages viewed and content interacted with on the Platform</li>
                  <li>General location (city, state, country)</li>
                  <li>Usage trends and clickstream data</li>
              </ul>
              <p>This information is collected automatically through cookies, browser storage, log files, and similar technologies (see our “Cookies and Tracking Technologies” section for more details). We do not use non-personal information to try to identify you. However, if we later link it to personal information, we will treat it as such.</p>
              <p>Information collected by the Platform may be collected by us or one of our service providers, but in either case, this Privacy Notice will govern the collection, use, and sharing of the information.</p>

              <h2>Use of Your Information and Legal Basis for Processing</h2>
              <p>We use the information we collect, including Personal Information as defined by applicable privacy laws (such as GDPR and CCPA), for the following lawful purposes:</p>
              <ul>
                  <li>To perform our contractual obligations, including processing transactions you authorize and providing the products or services you request</li>
                  <li>To fulfill our legitimate interests, such as operating, maintaining, and improving the Platform; conducting internal research and development; and securing our systems</li>
                  <li>To comply with legal obligations, including regulatory requirements, law enforcement requests, and dispute resolution</li>
                  <li>To protect vital interests, such as detecting, investigating, or preventing security incidents, fraud, or other harmful, unauthorized, or illegal activity</li>
                  <li>To communicate with you, including account notices, security updates, and — where permitted — marketing communications</li>
                  <li>To personalize your experience, including tailoring content, offers, and recommendations based on your preferences</li>
                  <li>To provide customer support and manage your account</li>
                  <li>With your consent, where required by law, including for the use of certain cookies, marketing communications, or optional integrations with third-party platforms</li>
              </ul>
              <p>Where we rely on your consent as the legal basis for processing, you have the right to withdraw that consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</p>
              <p>Information collected through the Platform may be transferred to, processed, and stored in the United States or other countries where we or our service providers operate. These jurisdictions may not offer the same level of data protection as your home country. Where required by law, we implement appropriate safeguards (such as Standard Contractual Clauses) to protect your personal information during cross-border transfers.</p>

              <h2>Disclosure of Your Information</h2>

              <h3>Service Providers and Platform Functionality</h3>
              <p>We may share your Personal Information and non-Personal Information with trusted third-party service providers that assist us in operating the Platform and delivering services. Examples include:</p>
              <ul>
                  <li>Google Analytics</li>
                  <li>Amazon Web Services (AWS)</li>
                  <li>Discord</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
              </ul>
              <p>These third parties are only permitted to use your data for the purpose of providing services on our behalf and are subject to contractual obligations, including data protection and confidentiality requirements.</p>

              <h3>Third-Party Integrations</h3>
              <p>When you choose to connect your D3 account with third-party services (such as Discord), we may share and receive information necessary to enable those integrations. Your interactions with those third-party platforms are governed by their own privacy policies.</p>

              <h3>Legal and Regulatory Requirements</h3>
              <p>We may disclose your Personal Information where necessary to:</p>
              <ul>
                  <li>Comply with applicable laws, regulations, legal processes, or enforceable governmental requests</li>
                  <li>Enforce or investigate potential violations of our terms and policies</li>
                  <li>Protect the rights, safety, or property of D3, our users, or others</li>
                  <li>Detect, prevent, or otherwise address fraud, security breaches, or technical issues</li>
                  <li>Prevent or respond to unlawful activity or threats to national security</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>In connection with a potential or actual corporate transaction (merger, acquisition, reorganization, or sale of assets), your information may be disclosed or transferred as part of that transaction. We will use reasonable efforts to notify you of any material change in ownership or control that affects your Personal Information.</p>

              <h3>With Your Consent</h3>
              <p>We may disclose your Personal Information to other third parties where you have given us express consent to do so.</p>

              <h3>Aggregated or Non-Identifiable Information</h3>
              <p>We may share non-Personal Information, including aggregated data that does not identify you individually, with business partners, investors, or other third parties for research, reporting, or other legitimate business purposes.</p>

              <h2>Cookies and Other Tracking Technologies</h2>
              <p>We may collect non-Personal Information automatically to better understand your interactions and improve our services. This includes information about how, when, and which features you use, and any third-party platforms you connect. We may also collect technical data such as your device’s unique identifier (e.g., UDID or MAC address). We use standard technologies including cookies, local browser storage, and web beacons.</p>

              <h3>Types of Cookies</h3>
              <ul>
                  <li><strong>Strictly Necessary Cookies:</strong> Essential for the operation of the Platform.</li>
                  <li><strong>Performance and Analytics Cookies:</strong> Help understand user interactions and optimize user experience.</li>
                  <li><strong>Functionality Cookies:</strong> Remember your choices and provide enhanced, personalized features.</li>
                  <li><strong>Targeting or Advertising Cookies:</strong> Help tailor advertising and messaging to your interests.</li>
                  <li><strong>Third-Party Cookies:</strong> May be placed by third parties (e.g., social media plugins or embedded content).</li>
              </ul>
              <p>You may control or disable cookies through your browser settings or using in-platform cookie consent tools where available. Disabling certain cookies may affect Platform functionality.</p>

              <h2>Your Rights and Choices About Your Data</h2>
              <p>To access, update, correct, or delete your personal information—or to deactivate or delete your D3 account—please email <a href="mailto:privacy@d3.com">privacy@d3.com</a>. We may ask you to verify your identity before fulfilling your request. Please note that deletion may limit your ability to use certain features.</p>
              <p>To opt out of marketing emails, click the “unsubscribe” link in any marketing message. Allow up to 10 business days for your request to take effect.</p>

              <h2>Children and Minors</h2>
              <p>The Platform is not intended for use by children under 13. We do not knowingly collect Personal Information from anyone under 13. If you believe we might have such information, contact <a href="mailto:privacy@d3.com">privacy@d3.com</a>.</p>

              <h2>Information Security</h2>
              <p>We implement reasonable safeguards to protect your Personal Information. Access is restricted to necessary D3 employees, contractors, and service providers. However, no system is completely secure, and we cannot guarantee 100% security.</p>

              <h2>California Privacy Rights</h2>
              <p>If you are a California resident, you have rights under the CCPA and CPRA, including:</p>
              <ul>
                  <li>Access and deletion of your Personal Information</li>
                  <li>Opt out of sale or sharing of Personal Information (we do not sell your data)</li>
                  <li>Correction of inaccurate Personal Information</li>
                  <li>Limiting use and disclosure of sensitive Personal Information</li>
              </ul>
              <p>Submit requests to <a href="mailto:privacy@d3.com">privacy@d3.com</a>.</p>

              <h2>GDPR Notice</h2>
              <p>If you are in the EU, UK, or Switzerland, GDPR and UK GDPR provide additional rights. Contact:</p>
              <p>
              D3 Global, Inc.<br />
              304 S. Jones Blvd #1115<br />
              Las Vegas, NV 89107<br />
              Email: <a href="mailto:privacy@d3.com">privacy@d3.com</a>
              </p>
              <p>Rights include access, correction, deletion, restriction, data portability, and objection to processing.</p>

              <h2>Third Party Websites</h2>
              <p>The Platform may link to third-party sites. We are not responsible for their privacy policies. Review third-party policies to understand their data practices.</p>

              <h2>Changes to This Policy</h2>
              <p>We may update this Privacy Notice periodically. The “Last Updated” date shows the latest revision. Material changes may be notified via email or website notice.</p>

              <h2>Contact Us</h2>
              <p>For questions or to exercise your rights, contact:</p>
              <p>
              D3 Global, Inc.<br />
              304 S. Jones Blvd #1115<br />
              Las Vegas, NV 89107<br />
              Email: <a href="mailto:privacy@d3.com">privacy@d3.com</a>
              </p>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
