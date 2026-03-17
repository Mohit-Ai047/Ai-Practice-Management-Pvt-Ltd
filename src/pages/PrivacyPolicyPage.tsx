
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-black text-[#FEFAE0] pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 text-[#FEFAE0]">Privacy Policy</h1>
                    <h2 className="text-xl text-[#24c9c0] mb-8">Ai Practice Management LLC</h2>

                    <div className="space-y-8 text-[#FEFAE0] leading-relaxed">
                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Introduction</h3>
                            <p className="opacity-90">
                                Ai Practice Management LLC ("Ai Practice Management" or "we") is a healthcare support organization that
                                provides services and solutions to medical and dental providers across major states in the United States. We
                                are committed to protecting the privacy and personal information of our clients, website visitors, and those
                                who engage with our communication platforms, including SMS messaging. This Privacy Policy outlines how we
                                collect, use, and protect personal data in accordance with applicable laws and regulations.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Scope</h3>
                            <p className="mb-4 opacity-90">
                                This Privacy Policy applies to all personal data collected by AI Practice Management LLC, including but not
                                limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 opacity-90">
                                <li>Healthcare professionals and practice managers who use our services</li>
                                <li>Clients who engage with us through our website or other communication platforms</li>
                                <li>Individuals who subscribe to SMS updates or communicate with us electronically</li>
                                <li>
                                    Visitors to our website:{" "}
                                    <a href="https://aipracticemanagement.us" className="text-[#24c9c0] hover:underline" target="_blank" rel="noopener noreferrer">
                                        https://aipracticemanagement.us
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">SMS Consent (Required 10DLC Text)</h3>
                            <p className="mb-4 opacity-90">
                                We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you
                                with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent
                                status, with third parties that help us provide our messaging services, including but not limited to platform
                                providers, phone companies, and any other vendors who assist us in the delivery of text messages.
                            </p>
                            <p className="opacity-90">
                                All of the above categories exclude text messaging originator opt-in data and consent; this information
                                will not be shared with any third parties.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Types of Personal Data Collected</h3>
                            <p className="mb-4 opacity-90">Ai Practice Management LLC may collect the following categories of personal data:</p>
                            <ul className="list-disc pl-6 space-y-2 opacity-90">
                                <li>
                                    <strong className="text-[#FEFAE0]">Contact Information:</strong> name, phone number, email address, office address
                                </li>
                                <li>
                                    <strong className="text-[#FEFAE0]">Business Information:</strong> practice name, specialty, licensing or credential data
                                </li>
                                <li>
                                    <strong className="text-[#FEFAE0]">Service Preferences:</strong> service interests, support needs, communication preferences
                                </li>
                                <li>
                                    <strong className="text-[#FEFAE0]">Payment or Billing Information:</strong> invoicing or transaction-related data
                                </li>
                                <li>
                                    <strong className="text-[#FEFAE0]">Technical Data:</strong> IP address, device data, browser type, and site interaction
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">How We Collect Personal Data</h3>
                            <p className="mb-4 opacity-90">We collect data through:</p>
                            <ul className="list-disc pl-6 space-y-2 opacity-90">
                                <li>Contact forms on our website</li>
                                <li>Phone, SMS, or email communication</li>
                                <li>Third-party tools for secure online scheduling, messaging, or billing</li>
                                <li>Information you voluntarily provide when requesting services</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">How We Use Personal Data</h3>
                            <p className="mb-4 opacity-90">We use personal data for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 opacity-90">
                                <li>To provide and manage administrative and operational support to healthcare practices</li>
                                <li>
                                    To communicate appointment reminders, updates, and relevant service information via SMS, email, or phone
                                </li>
                                <li>To personalize and improve our services</li>
                                <li>To manage billing and transactions</li>
                                <li>To comply with legal and regulatory requirements</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Opt-Out Process</h3>
                            <p className="opacity-90">
                                You may choose to stop receiving text messages from Ai Practice Management LLC at any time. To opt out, simply
                                reply to any text message you receive from us or text (332) 254-9771 with the word 'STOP' or 'UNSUBSCRIBE.'
                                Once we receive your opt-out request, we will promptly remove your number from our messaging list.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">How We Disclose Personal Data</h3>
                            <p className="mb-4 opacity-90">Ai Practice Management LLC may disclose personal data:</p>
                            <ul className="list-disc pl-6 space-y-2 opacity-90">
                                <li>To service providers and vendors strictly for operational purposes</li>
                                <li>To government or regulatory authorities, if required by law</li>
                                <li>In the case of a business transaction, such as a merger or acquisition</li>
                            </ul>
                            <p className="mt-4 opacity-90">
                                We do not sell or share your personal data with third parties for their marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Security Measures</h3>
                            <p className="mb-4 opacity-90">
                                We implement industry-standard technical and organizational safeguards to ensure your personal data remains
                                secure, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 opacity-90">
                                <li>Secure website encryption (HTTPS)</li>
                                <li>Role-based access control</li>
                                <li>Data backup and recovery protocols</li>
                                <li>Secure payment processing platforms</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Data Retention</h3>
                            <p className="opacity-90">
                                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When no longer needed, we securely delete or anonymize the data.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Your Rights</h3>
                            <p className="mb-4 opacity-90">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 opacity-90">
                                <li>Request access to your personal data</li>
                                <li>Request correction or deletion of your data</li>
                                <li>Withdraw consent or object to data use for specific purposes</li>
                                <li>File a complaint with a data protection authority, if applicable</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Updates to this Privacy Policy</h3>
                            <p className="opacity-90">
                                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on our website, and continued use of our services indicates your acceptance of those changes.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#FEFAE0] mb-4">Contact Us</h3>
                            <p className="mb-4 opacity-90">
                                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                            </p>
                            <div className="space-y-2 opacity-90">
                                <p className="font-bold">Ai Practice Management LLC</p>
                                <p>
                                    <a href="mailto:info@aipracticemanagement.com" className="text-[#24c9c0] hover:underline">
                                        info@aipracticemanagement.com
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:3322549771" className="text-[#24c9c0] hover:underline">
                                        (332) 254-9771
                                    </a>
                                </p>
                                <p>
                                    <a href="https://aipracticemanagement.us" className="text-[#24c9c0] hover:underline" target="_blank" rel="noopener noreferrer">
                                        https://aipracticemanagement.us
                                    </a>
                                </p>
                            </div>
                            <p className="mt-4 opacity-90">
                                We are committed to ensuring that your privacy is protected and that your personal information is handled with care, transparency, and in full compliance with applicable regulations.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
