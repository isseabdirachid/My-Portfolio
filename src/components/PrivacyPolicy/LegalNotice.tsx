
import { useTranslation } from "react-i18next";
import LegalPageLayout from "@/components/PrivacyPolicy/LegalPageLayout";

function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <LegalPageLayout
            title={t("legal.impressumTitle")}
            subtitle={t("legal.impressumSubtitle")}
        >
            {/* Qoraalka Impressum gadaal ayaa lagu dari doonaa. */}
        </LegalPageLayout>
    );
}

export default PrivacyPolicy;
