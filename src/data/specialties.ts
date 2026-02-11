import {
    Stethoscope,
    Activity,
    Pill,
    Syringe,
    Zap,
    Microscope,
    Scissors,
    Crosshair,
    Package,
    Building2,
    LucideIcon,
    Brain,
    FlaskConical,
    Baby,
    FileSearch
} from "lucide-react";

import painMedicine from "@/assets/pain-medicine.png";
import gastroenterology from "@/assets/gastro.png";
import spineSurgery from "@/assets/spine-surgeon (2).png";
import orthopedics from "@/assets/orthopedics.jpg";
import neurosurgery from "@/assets/neurosurgeon.png";
import chiropractic from "@/assets/chiropractic.png";
import dmeEquipment from "@/assets/dme.png";
import hospitalBilling from "@/assets/hospital-billing.png";
import internalmedicine from "@/assets/internalmedicine.png";
import urgentCare from "@/assets/urgent_care.jpg";
import endoscopy from "@/assets/endoscopy.png";
import gynecologist from "@/assets/gynecologist.png";
import pathalogy from "@/assets/pathalogy.png";
import psychiatrist from "@/assets/psychiatrist.png"

export interface Specialty {
    id: string;
    icon: LucideIcon;
    name: string;
    description: string;
    fullDescription?: string | string[];
    image: string;
}

export const specialties: Specialty[] = [
    {
        id: "pain-medicine-specialist",
        icon: Pill,
        name: "Pain Medicine Specialist",
        description: "Optimized RCM for complex interventional procedures.",
        fullDescription: [
            "Pain medicine billing requires navigating a complex landscape of interventional procedures, medication management, and ever-changing payer policies. We focus on ensuring medical necessity is clearly documented for high-value procedures like epidural steroid injections, nerve blocks, and radiofrequency ablations, significantly reducing the risk of pre-payment audits and denials.",
            "Our team are experts in handling the nuances of spinal cord stimulator (SCS) and intrathecal pump trials and implants. These high-cost devices require precise authorization and coding coordination to ensure you are reimbursed for both the device and the procedure. We meticulously track the global periods and modifiers to prevent bundling errors.",
            "Additionally, we streamline the prior authorization process for urine drug testing (UDT) and other frequent ancillary services. By implementing rigorous front-end checks, we ensure that frequency limits are respected and that all necessary clinical indications are present before the claim is even submitted."
        ],
        image: painMedicine
    },
    {
        id: "gastroenterologists",
        icon: Microscope,
        name: "Gastroenterologists",
        description: "Accelerating revenue for high-volume endoscopic services.",
        fullDescription: [
            "Gastroenterology RCM is defined by high case volumes and the critical distinction between screening and diagnostic procedures. We strictly manage the 'screening turned diagnostic' coding scenarios to ensure patient benefits are applied correctly while maximizing provider reimbursement. This attention to detail prevents common denials related to procedure coding mismatches.",
            "We also manage the complexities of billing for ancillary services often performed in GI centers, such as anesthesia and pathology. Our integrated approach ensures that professional fees, facility fees, and technical components are all captured and billed with the correct place-of-service codes and modifiers.",
            "For practice-owned ambulatory surgery centers (ASCs), we optimize the revenue cycle by focusing on contract management and proper fee schedule application. We regularly audit payments to ensure that commercial payers are reimbursing according to contracted rates for high-volume procedures like colonoscopies and EGDs."
        ],
        image: gastroenterology
    },
    {
        id: "endoscopy-colonoscopy",
        icon: FileSearch,
        name: "Endoscopy & Colonoscopy",
        description: "Maximizing facility and professional fee reimbursement.",
        fullDescription: [
            "Endoscopy centers face unique billing challenges where facility fees and professional fees must be perfectly aligned. Our RCM process ensures that technical components are billed with the appropriate revenue codes for ASCs or hospital outpatient departments, securing the facility's financial health.",
            "We specialize in navigating the bundling rules associated with multiple scope procedures. When multiple techniques are used (e.g., biopsy vs. snare polypectomy) or distinct lesions are treated, we utilize the correct modifiers (like 59, XS, or XU) to unbundle services legitimately and capture full reimbursement for the work performed.",
            "Furthermore, we aggressively manage the accounts receivable for endoscopic procedures, focusing on rapid claim scrubbing to catch issues like missing referring provider information or invalid diagnosis codes before submission. This proactive stance significantly lowers days in A/R."
        ],
        image: endoscopy
    },
    {
        id: "spine-surgeon",
        icon: Scissors,
        name: "Spine Surgeon",
        description: "Precision RCM for high-value spinal procedures.",
        fullDescription: [
            "Spine surgery billing is among the most high-stakes in medical RCM due to the high dollar value of claims. One error can delay tens of thousands of dollars. We perform detailed reviews of potential coding for spinal fusions, decompressions, and instrumentations, verifying that the operative report supports every code submitted.",
            "We are experts in managing denials related to 'experimental/investigational' flags often used by payers for newer spinal technologies or multi-level procedures. Our appeals team is skilled in drafting medical necessity letters that reference clinical guidelines to overturn these denials effectively.",
            "In addition to professional fees, we manage the reimbursement for expensive biologicals and implants used during surgery. We ensure that invoices are properly documented and that mark-ups are calculated according to payer contracts to prevent revenue leakage on hard costs."
        ],
        image: spineSurgery
    },
    {
        id: "doctor-of-orthopedics",
        icon: Crosshair,
        name: "Doctor of Orthopedics",
        description: "Robust revenue cycle strategies for musculoskeletal care.",
        fullDescription: [
            "From sports medicine to total joint replacements, orthopedics requires a versatile RCM strategy. We handle global surgical packages with precision, ensuring that pre-op and post-op casting, splinting, and X-rays are billed correctly (or excluded) based on the global period rules of the specific surgery.",
            "We systematically manage the reimbursement for Durable Medical Equipment (DME) dispensed in the office, such as braces and crutches, which often face stringent documentation requirements. By automating the validation of letters of medical necessity (LMN), we protect this ancillary revenue stream.",
            "Our team also focuses on maximizing collections for physical therapy and rehabilitation services often integrated into ortho practices. We monitor therapy caps and authorization requirements to ensure a seamless revenue flow from the operating room to full recovery."
        ],
        image: orthopedics
    },
    {
        id: "neurosurgeons",
        icon: Zap,
        name: "Neurosurgeons",
        description: "Expert revenue management for critical neurosurgical cases.",
        fullDescription: [
            "Neurosurgery billing demands an exceptional level of anatomical and procedural knowledge. We specialize in the intricate coding of cranial procedures, aneurysms, and complex spinal disorders. Our certified coders review operative notes to capture additional levels of complexity that generic coding software might miss.",
            "Assistant surgeon fees (Modifier 80/81/82) are a significant revenue component for neurosurgery groups. We ensure that these claims are submitted with the necessary supporting documentation to prove the medical necessity of a second surgeon, a common pain point for denials.",
            "We also maintain a rigorous follow-up process for high-dollar claims. Neuro claims are frequently subjected to intense payer scrutiny and medical records requests. Our team proactively manages these audits to minimize payment delays and defend your revenue."
        ],
        image: neurosurgery
    },
    {
        id: "doctor-of-chiropractic",
        icon: Activity,
        name: "Doctor of Chiropractic (D.C.)",
        description: "Streamlined billing for therapeutic and adjustment services.",
        fullDescription: [
            "Chiropractic billing often struggles with medical necessity denials for maintenance care. We implement systems to clearly distinguish 'active treatment' from 'maintenance therapy' (AT modifier usage) in your documentation and claims, ensuring Medicare and commercial payers reimburse for valid acute care.",
            "We also manage the strict visit limits imposed by many insurance plans. Our eligibility verification team tracks benefit caps in real-time, alerting your front desk when a patient is approaching their limit so that financial arrangements can be made in advance.",
            "Additionally, we optimize the billing of physical medicine modalities (like electrical stimulation or traction) performed alongside adjustments, ensuring that bundling edits (CCI) are navigated correctly with appropriate modifiers."
        ],
        image: chiropractic
    },
    {
        id: "gynecologist",
        icon: Baby,
        name: "Gynecologist",
        description: "Comprehensive RCM for women's health and obstetrics.",
        fullDescription: [
            "Changes in women's health coding require constant vigilance. We expert manage global maternity billing, ensuring that the initial prenatal visit, delivery, and postpartum care are billed according to the patient's specific insurance plan—whether bundled or itemized.",
            "We focus on capturing reimbursement for in-office procedures such as colposcopies, IUD insertions, and ultrasounds. We ensure that the cost of devices (like LARC) is fully reimbursed effectively, managing the buy-and-bill process to protect practice cash flow.",
            "Preventive care is a cornerstone of gynecology. We ensure that annual well-woman exams are coded correctly to trigger 100% coverage where applicable, while separately billing for problem-oriented services addressed during the same visit (Modifier 25) to capturing the full value of the encounter."
        ],
        image: gynecologist
    },
    {
        id: "psychiatrist",
        icon: Brain,
        name: "Psychiatrist",
        description: "Navigating mental health parity for better reimbursement.",
        fullDescription: [
            "Behavioral health RCM is unique due to the 'carve-out' nature of many mental health benefits. We specialize in verifying specific mental health coverage, which often differs from medical benefits, to prevent surprise denials for non-covered services.",
            "We manage the authorization requirements for recurring therapy sessions and psychological testing. Our team tracks unit counts and date ranges, proactively requesting extensions to prevent gaps in payment for ongoing treatment plans.",
            "Telehealth has become vital in psychiatry. We ensure that all tele-psychiatry sessions are billed with the correct place-of-service codes and modifiers (95/GT) to ensure parity reimbursement with in-person visits, as regulations continue to evolve."
        ],
        image: psychiatrist
    },
    {
        id: "pathology-lab",
        icon: FlaskConical,
        name: "Pathology Lab",
        description: "High-throughput RCM for accurate lab reimbursement.",
        fullDescription: [
            "Pathology labs operate on high volume and thin margins, making efficiency paramount. Our automated RCM solutions rapidly process thousands of claims, checking for valid diagnosis codes that support the specific lab panels ordered, reducing 'medical necessity' rejections.",
            "We aggressively manage the professional component (Modifier 26) vs. technical component (Modifier TC) billing to ensure accurate payment splits. This is crucial for hospital-based pathologists and independent labs alike.",
            "Our team also handles the complex appeals process for molecular pathology and genetic testing claims, which often face initial experimental denials. We prepare dossiers of clinical utility evidence to support these high-value claims."
        ],
        image: pathalogy
    },
    {
        id: "dme",
        icon: Package,
        name: "DME (Durable Medical Equipment)",
        description: "Automating RCM for equipment and supply claims.",
        fullDescription: [
            "DME billing is notoriously paperwork-intensive. We streamline the collection and validation of Certificates of Medical Necessity (CMNs) and Detailed Written Orders (DWOs) before the claim is submitted, eliminating the primary cause of DME denials.",
            "We manage the entire rental cycle for capped-rental items (like oxygen or wheelchairs), ensuring that modifiers (RR, KH, KI, KJ) change correctly over time and that maintenance and servicing payments are captured when the title transfers.",
            "Our system also tracks the resupply schedules for recurring items (like CPAP supplies or diabetic testing materials), ensuring that refill claims are generated at the earliest billable date to maximize recurring revenue."
        ],
        image: dmeEquipment
    },
    {
        id: "hospital-billing",
        icon: Building2,
        name: "Hospital Billing",
        description: "Institutional RCM optimizing DRG and APC payments.",
        fullDescription: [
            "Hospital RCM requires a holistic view of the patient journey. We work with Clinical Documentation Improvement (CDI) teams to ensure that the severity of illness and risk of mortality are accurately reflected in the medical record, directly impacting DRG assignment and reimbursement tiers.",
            "We focus on reducing Discharged Not Final Billed (DNFB) days by accelerating the coding process and resolving 'stop-bills' caused by missing discharge summaries or conflicting data. Speeding up this cycle directly improves hospital liquidity.",
            "Our team also manages complex payer contracts, auditing payments against expected reimbursement for outliers, stop-loss provisions, and pass-through payments for high-cost drugs and devices, recovering underpayments that often go unnoticed."
        ],
        image: hospitalBilling
    },
    {
        id: "doctor-of-internal-medicine",
        icon: Stethoscope,
        name: "Doctor of Internal Medicine",
        description: "Enhancing practice revenue through chronic care management.",
        fullDescription: [
            "In internal medicine, volume and variety are key. We ensure that Evaluation and Management (E&M) levels are supported by documentation, preventing down-coding by payers. We also educate providers on the criteria for time-based vs. complexity-based coding to optimize levels.",
            "We unlock new revenue streams by managing the billing for Chronic Care Management (CCM) and Transitional Care Management (TCM). These services require specific timing and documentation tracking, which our team handles to ensure you are paid for non-face-to-time patient coordination.",
            "Preventive services often have zero cost-sharing for patients but strict coding rules. We ensure that annual wellness visits are billed correctly and that any concurrent problem-focused visits are separately identified with Modifier 25 to capture the full scope of your work."
        ],
        image: internalmedicine
    },
    {
        id: "urgent-care-emergency-medicine",
        icon: Syringe,
        name: "Urgent Care / Emergency Medicine",
        description: "Fast-track RCM for high-volume acute care.",
        fullDescription: [
            "Urgent care centers function on speed. We automate the front-end eligibility and copay collection verification to minimize bad debt. Our coding teams are experts in distinguishing between 'new' vs. 'established' patient rules which often vary by payer in the urgent care setting.",
            "We specialize in 'case rate' contracts vs. fee-for-service billing. Our team audits claims to ensure that if a contract pays a flat rate, we are not leaving money on the table for services that might be carved out, such as vaccines, labs, or x-rays.",
            "For emergency medicine groups, we expertly handle the professional component billing, ensuring that critical care time is accurately captured and billed when distinct from standard ED visits, significantly increasing revenue per high-acuity encounter."
        ],
        image: urgentCare
    },
];
