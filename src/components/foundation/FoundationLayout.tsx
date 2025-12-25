import FoundationHeader from "./FoundationHeader";
import FoundationFooter from "./FoundationFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

interface FoundationLayoutProps {
  children: React.ReactNode;
}

const FoundationLayout = ({ children }: FoundationLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <FoundationHeader />
      <main className="flex-grow">{children}</main>
      <FoundationFooter />
      <WhatsAppButton />
    </div>
  );
};

export default FoundationLayout;
