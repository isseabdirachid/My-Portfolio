import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function HeroActions() {
    return (
        <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
                asChild
                className="P-2 gap-2 bg-primary-custom text-white hover:bg-primary-custom/90"
            >
                <Link to="/contact">
                    Let´s Connect 🔗
                    <ArrowRight/>
                </Link>
            </Button>

            <Button
                asChild
                variant="outline"
                className="border-secondary-custom/20 text-secondary-custom hover:bg-secondary-custom/5"
            >
                <Link to="/portfolio">
                    View My Work
                </Link>
            </Button>
        </div>
    );
}

export default HeroActions;
