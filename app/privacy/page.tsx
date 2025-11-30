import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - MovieDB Explorer",
    description: "Privacy Policy for MovieDB Explorer - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-8 md:py-12">
            {/* Header Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                    Privacy Policy
                </h1>
                <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Welcome to MovieDB Explorer. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Identity Data: name and username</li>
                            <li>Contact Data: email address</li>
                            <li>Technical Data: IP address, browser type, device information</li>
                            <li>Usage Data: information about how you use our website</li>
                            <li>Marketing Data: your preferences in receiving marketing from us</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We use your personal data for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>To provide and maintain our service</li>
                            <li>To notify you about changes to our service</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information to improve our service</li>
                            <li>To monitor the usage of our service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We use The Movie Database (TMDB) API to provide movie information. Please review TMDB's privacy policy to understand how they handle data. We do not share your personal information with TMDB beyond what is necessary to provide our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Request access to your personal data</li>
                            <li>Request correction of your personal data</li>
                            <li>Request erasure of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request restriction of processing your personal data</li>
                            <li>Request transfer of your personal data</li>
                            <li>Right to withdraw consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Privacy Policy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">
                                our contact page
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
