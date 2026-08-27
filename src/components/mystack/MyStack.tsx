import StackContent from "@/components/mystack/StackContent";
import FrontStack from "@/components/mystack/FrontStack";
import BackStack from "@/components/mystack/BackStack";
import DatabaseStack from "@/components/mystack/DatabaseStack";
import MobileStack from "@/components/mystack/MobileStack";
import CloudStack from "@/components/mystack/CloudStack";

const MyStack = () => {
    return (
        <section id="my-stack" className="mt-10">
            <StackContent />

            <div className="mt-5 px-2 md:px-0">
                <div className="grid grid-cols-3 items-center gap-2 md:block">

                    {/* Frontend */}
                    <div className="w-full md:-translate-x-32">
                        <FrontStack />
                    </div>

                    {/* Backend */}
                    <div className="w-full md:translate-x-32">
                        <BackStack />
                    </div>

                    {/* Database */}
                    <div className="w-full md:-translate-x-32">
                        <DatabaseStack />
                    </div>
                    {/* Mobile */}
                    <div className="ml-18 w-full md:ml-0 md:translate-x-40">
                        <MobileStack />
                    </div>

                    {/* Cloud */}
                    <div className="ml-18 w-full md:ml-0 md:-translate-x-32">
                        <CloudStack />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MyStack;
