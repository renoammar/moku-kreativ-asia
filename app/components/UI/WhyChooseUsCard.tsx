import { FaBolt, FaUsers } from "react-icons/fa";

type WhyChooseUsCardProps = {
  showLogo?: boolean;
};

const WhyChooseUsCard = ({ showLogo = false }: WhyChooseUsCardProps) => {
  return (
    <div className="rounded-2xl border border-[#125ff9]/15 bg-white p-8">
      <h3 className="mb-6 text-xl font-bold text-[#0D3C74]">Mengapa Memilih Kami?</h3>
      <div className="space-y-6">
        {showLogo ? (
          <div className="flex items-center justify-start gap-4">
            <img
              src="/images/licensed_assurance_provider_logo.png"
              alt="AA1000 Licensed Assurance Provider"
              className="h-16 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}
        <div className="flex gap-4">
          <FaUsers className="mt-1 shrink-0 text-xl text-[#125ff9]" />
          <div>
            <p className="font-bold leading-tight">Tim Berpengalaman</p>
          </div>
        </div>
        <div className="flex gap-4">
          <FaBolt className="mt-1 shrink-0 text-xl text-[#125ff9]" />
          <div>
            <p className="font-bold leading-tight">Proses Efisien</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
