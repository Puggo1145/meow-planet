import { PropsWithChildren } from "react";

import Navigation from "./_components/navigation";

const MarketingLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="h-screen flex flex-col">
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout;