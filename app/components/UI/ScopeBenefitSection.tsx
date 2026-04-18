import React from "react";
import { FaCheckCircle } from "react-icons/fa";

type ScopeItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ScopeBenefitSectionProps = {
  scopeTitle: string;
  scopeDescription?: string;
  scopeItems: ScopeItem[];
  benefitTitle: string;
  benefitItems: string[];
  className?: string;
  scopeTitleClassName?: string;
  scopeDescriptionClassName?: string;
  scopeItemClassName?: string;
  scopeItemTitleClassName?: string;
  scopeItemDescClassName?: string;
  benefitContainerClassName?: string;
  benefitTitleClassName?: string;
  benefitListClassName?: string;
  benefitItemClassName?: string;
  benefitIconClassName?: string;
  benefitTextClassName?: string;
};

const ScopeBenefitSection = ({
  scopeTitle,
  scopeDescription,
  scopeItems,
  benefitTitle,
  benefitItems,
  className = "",
  scopeTitleClassName = "text-2xl font-bold text-white",
  scopeDescriptionClassName = "text-white/90",
  scopeItemClassName = "flex items-start gap-4 rounded-xl bg-white/10 p-4",
  scopeItemTitleClassName = "font-semibold text-lg",
  scopeItemDescClassName = "text-sm text-white/90 leading-relaxed",
  benefitContainerClassName = "rounded-2xl bg-[#125ff9] p-4 overflow-hidden flex justify-start items-center flex-col gap-6",
  benefitTitleClassName = "text-2xl font-bold sm:whitespace-nowrap",
  benefitListClassName = "flex flex-col gap-6 h-[80%] justify-start ",
  benefitItemClassName = "flex items-start gap-3 min-w-0",
  benefitIconClassName = "text-white/90 mt-1 shrink-0",
  benefitTextClassName = "font-medium whitespace-nowrap",
}: ScopeBenefitSectionProps) => {
  return (
    <div className={`mx-auto w-full max-w-6xl grid gap-12 rounded-3xl bg-[#0D3C74] p-8 text-white lg:grid-cols-[1fr_1.4fr] md:p-12 ${className}`}>
      <div className="space-y-6">
        <h3 className={scopeTitleClassName}>{scopeTitle}</h3>
        {scopeDescription ? (
          <p className={scopeDescriptionClassName}>{scopeDescription}</p>
        ) : null}

        <div className="space-y-4">
          {scopeItems.map((item, index) => (
            <div key={index} className={scopeItemClassName}>
              {item.icon}
              <div>
                <p className={scopeItemTitleClassName}>{item.title}</p>
                <p className={scopeItemDescClassName}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={benefitContainerClassName}>
        <h3 className={benefitTitleClassName}>{benefitTitle}</h3>
        <ul className={benefitListClassName}>
          {benefitItems.map((text, index) => (
            <li key={index} className={benefitItemClassName}>
              <FaCheckCircle className={benefitIconClassName} />
              <span className={benefitTextClassName}>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScopeBenefitSection;
