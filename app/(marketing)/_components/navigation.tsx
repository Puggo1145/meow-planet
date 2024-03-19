import Image from "next/image";

import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between border-b px-6">
        <section className="flex items-center gap-x-2">
            <Image src="/icons/LOGO.svg" sizes="100" width={48} height={48} alt="logo"/>
            <h1 className="text-lg font-bold text-primary">猫猫星球</h1>
        </section>
        <section className="space-x-4">
            <Button variant="secondary">先逛逛</Button>
            <Button>登录</Button>
        </section>
    </header>
  );
};

export default Navigation;