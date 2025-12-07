import { useCallback } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import NavLinks from "@/components/NavLinks";
import { personalInfo } from "@/data/portfolioData";
import cvPdf from "@/assets/files/NazaZuhairCV.pdf";

const Index = () => {
  const handleDownloadPDF = useCallback(() => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "NazaZuhairCV.pdf";
    link.target = "_blank";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [cvPdf]);

  return (
    <>
      {/* SEO Meta */}
      <title>{`${personalInfo.name} | ${personalInfo.role}`}</title>

      <div className="min-h-screen bg-background">
        <ThemeToggle />
        <NavLinks />

        <div className="flex flex-col lg:flex-row">
          <Sidebar onDownloadPDF={handleDownloadPDF} />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Index;
