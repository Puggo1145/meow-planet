import { PropsWithChildren } from "react";

const MarketingLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="">
            <main>
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout;