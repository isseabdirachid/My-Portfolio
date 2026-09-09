import React from "react";
import { useTranslation } from "react-i18next";
import WorldMap from "@/assets/images/world-map.jpg";

const ContactMap: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-map">
            <img
                src={WorldMap}
                alt={t("contact.map.ariaLabel")}
                className="contact-map__image"
            />
        </div>
    );
};

export default ContactMap;
