import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - MovieDB Explorer",
    description: "Terms of Service for MovieDB Explorer - Read our terms and conditions for using our service.",
};

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-8 md:py-12">
            {/* Header Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                    Terms of Service
                </h1>
                <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-300 leading-relaxed">
                            By accessing and using MovieDB Explorer, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Permission is granted to temporarily access the materials (information or software) on MovieDB Explorer for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or for any public display</li>
                            <li>Attempt to decompile or reverse engineer any software contained on MovieDB Explorer</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            You agree to use MovieDB Explorer only for lawful purposes. You are prohibited from:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Violating any applicable laws or regulations</li>
                            <li>Infringing on the intellectual property rights of others</li>
                            <li>Transmitting any harmful or malicious code</li>
                            <li>Attempting to gain unauthorized access to our systems</li>
                            <li>Interfering with or disrupting the service</li>
                            <li>Using automated systems to access the service without permission</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Content</h2>
                        <p className="text-gray-300 leading-relaxed">
                            MovieDB Explorer uses data from The Movie Database (TMDB). All movie information, images, and related content are provided by TMDB and are subject to their terms of service. We do not claim ownership of any third-party content displayed on our platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer</h2>
                        <p className="text-gray-300 leading-relaxed">
                            The materials on MovieDB Explorer are provided on an 'as is' basis. MovieDB Explorer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitations</h2>
                        <p className="text-gray-300 leading-relaxed">
                            In no event shall MovieDB Explorer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MovieDB Explorer, even if MovieDB Explorer or a MovieDB Explorer authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Accuracy of Materials</h2>
                        <p className="text-gray-300 leading-relaxed">
                            The materials appearing on MovieDB Explorer could include technical, typographical, or photographic errors. MovieDB Explorer does not warrant that any of the materials on its website are accurate, complete or current. MovieDB Explorer may make changes to the materials contained on its website at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Links</h2>
                        <p className="text-gray-300 leading-relaxed">
                            MovieDB Explorer has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by MovieDB Explorer of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Modifications</h2>
                        <p className="text-gray-300 leading-relaxed">
                            MovieDB Explorer may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                        <p className="text-gray-300 leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us at{" "}
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
