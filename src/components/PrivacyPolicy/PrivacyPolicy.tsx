
import { useTranslation } from "react-i18next";
import LegalPageLayout from "@/components/PrivacyPolicy/LegalPageLayout";

function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <LegalPageLayout
            title={t("legal.privacyTitle")}
            subtitle={t("legal.privacySubtitle")}
        >
            {/* Qoraalka Datenschutz gadaal ayaa lagu dari doonaa. */}
        </LegalPageLayout>
    );
}

export default PrivacyPolicy;
