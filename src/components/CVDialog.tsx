import { FileText, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface CVDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

function CVDialog({ open, onOpenChange }: CVDialogProps) {
    const navigate = useNavigate();

    const handleContact = () => {
        onOpenChange(false);
        navigate("/contact");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <span className="hidden" />
            </DialogTrigger>

            <DialogContent
                className="
                    border-secondary-custom/10
                    bg-background-dark
                    text-secondary-custom
                    sm:max-w-md
                "
            >
                <DialogHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-primary-custom/10 text-primary-custom">
                        <ShieldAlert className="size-5" />
                    </div>

                    <DialogTitle className="text-xl">
                        CV Request
                    </DialogTitle>

                    <DialogDescription className="text-secondary-custom/70">
                        My CV is shared privately. Please email me to request a copy.
                    </DialogDescription>
                </DialogHeader>

                <div className="rounded-xl border border-secondary-custom/10 p-4">
                    <div className="flex gap-3">
                        <FileText className="mt-0.5 size-5 shrink-0 text-primary-custom" />

                        <div>
                            <h3 className="font-medium">
                                Thank You for Your Interest
                            </h3>

                            <p className="mt-1 text-sm opacity-70">
                                For privacy and data protection, CV requests are
                                handled personally. Send me a short email, and
                                I’ll be happy to share my CV with you directly.
                            </p>
                        </div>
                    </div>
                </div>

                <DialogFooter className="flex-col gap-2 sm:flex-row sm:justify-end">
                    <Button
                        type="button"
                        onClick={handleContact}
                        className="w-full bg-primary-custom text-white hover:bg-primary-custom/90 sm:w-auto"
                    >
                        Contact Me
                    </Button>

                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="w-full sm:w-auto"
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CVDialog;
