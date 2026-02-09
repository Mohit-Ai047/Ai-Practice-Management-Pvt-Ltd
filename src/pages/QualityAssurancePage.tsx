import { AuditCycleSection } from "@/components/sections/AuditCycleSection";
import { AuditContentSection } from "@/components/sections/AuditContentSection";

const QualityAssurancePage = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <AuditCycleSection />
            <AuditContentSection />
        </div>
    );
};

export default QualityAssurancePage;
