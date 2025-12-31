import {
  Email,
  Facebook,
  FooterBg,
  FooterLogo,
  Instagram,
  LinkedIn,
  Location,
  Phone,
  Twitter
} from "@/helpers/ImageHelper";
import ContainerWidget from "../widgets/ContainerWidget";
import ImageWidget from "../widgets/ImageWidget";
import LinkWidget from "../widgets/LinkWidget";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    href: "",
    icon: Facebook,
    alt: "Facebook",
  },
  {
    id: "twitter",
    href: "",
    icon: Twitter,
    alt: "Twitter",
  },
  {
    id: "instagram",
    href: "",
    icon: Instagram,
    alt: "Instagram",
  },
  {
    id: "linkedin",
    href: "",
    icon: LinkedIn,
    alt: "LinkedIn",
  },
];

const QUICK_LINKS = [
  { id: "home", url: "/", label: "Home" },
  { id: "about", url: "/", label: "About Us" },
  { id: "buyers", url: "/", label: "Buy" },
  { id: "sellers", url: "/", label: "Sell" },
  { id: "contact", url: "/", label: "Contact Us" },
];

const COURSES = [
  {
    id: "Kanyakumari",
    label: "kanyakumari",
  },
  {
    id: "nagercoil",
    label: "Nagercoil",
  },
  {
    id: "marthandam",
    label: "Marthandam",
  },
  {
    id: "tirunelveli",
    label: "Tirunelveli",
  },
];

const RESOURCES = [
  { id: "blog", url: "/", label: "Blog" },
  { id: "faq", url: "/", label: "FAQ's" },
];

const ADDRESS_LINES = [
  { id: "address-line-1", text: "8a, sathyajothy apartment," },
  { id: "address-line-2", text: "Henry road, Vetturunimadam," },
  { id: "address-line-3", text: "Nagercoil 629001." },
];

const linkTextClass =
  "text-[16px] md:text-[16px] lg:text-[14px] 3xl:text-[18px] font-normal";
const sectionTitleClass =
  "text-[18px] md:text-[20px] 3xl:text-[24px] font-normal font-urbanist";
const dividerClass = "border-b border-white opacity-30 w-full h-px mt-3";

const FooterSection = ({
  title,
  links,
  className = "",
}: {
  title: string;
  links: Array<{ id: string; url?: string; label: string }>;
  className?: string;
}) => (
  <div className={`flex flex-col items-start justify-start gap-3 ${className}`}>
    <h6 className={sectionTitleClass}>{title}</h6>
    <ul
      className={`flex flex-col items-start justify-start gap-2 ${linkTextClass} leading-7`}
    >
      {links.map((link) => (
        <li
          key={link.id}
          className={
            link.label.includes("Diploma") ? "max-w-full md:max-w-[250px]" : ""
          }
        >
          {link?.url ? (
            <LinkWidget
              href={link?.url}
              className="hover:text-[#E97451] transition-colors duration-300"
            >
              {link.label}
            </LinkWidget>
          ) : (
            <p className="hover:text-[#E97451] transition-colors duration-300">
              {" "}
              {link.label}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const WebFooter = () => {
  return (
    <footer
      className="relative z-50 md:z-auto w-full bg-cover bg-bottom bg-no-repeat min-h-[1950px] md:min-h-[600px] bg-black text-white py-8 md:py-12 lg:py-22"
      style={{ backgroundImage: `url(${FooterBg?.src})` }}
    >
      <ContainerWidget>
        <div className="flex flex-col items-start justify-start gap-5 md:gap-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-5 py-3 pb-0 w-full">
            <div className="flex flex-col items-start justify-start gap-6 w-full md:w-auto">
              <ImageWidget src={FooterLogo} alt="Logo" className="w-40 h-auto" />

              <div className="flex flex-row items-start justify-start gap-6">
                <p className={`${linkTextClass} w-[300px]`}>
                  Sell Widely Real Estate is a trust-driven property growth 
                  platform connecting verified developers with genuine buyers. 
                  We simplify real estate through transparent guidance, ethical selling, 
                  and performance-based partnerships. Our mission is to turn property 
                  decisions into confident investments and lasting relationships that 
                  create value for families, communities, and future generations.
                </p>
              </div>

              <ul className="flex items-center justify-start gap-4 md:gap-6">
                {SOCIAL_LINKS.map((socialLink) => (
                  <li key={socialLink.id}>
                    <LinkWidget
                      href={socialLink.href}
                      target="_blank"
                      className="hover:opacity-70 transition-opacity duration-300"
                    >
                      <ImageWidget
                        src={socialLink.icon}
                        alt={socialLink.alt}
                        className="w-6 h-5 md:w-7 md:h-6"
                      />
                    </LinkWidget>
                  </li>
                ))}
              </ul>
            </div>

            <div className="block md:hidden">
              <div className={dividerClass} />
              <div className="flex flex-row gap-6 w-full mt-7">
                <FooterSection
                  title="Quick Links"
                  links={QUICK_LINKS}
                  className="flex-1"
                />
                <FooterSection
                  title="Courses"
                  links={COURSES}
                  className="flex-1"
                />
              </div>
            </div>

            <FooterSection
              title="Quick Links"
              links={QUICK_LINKS}
              className="hidden md:flex md:min-w-[180px]"
            />
            <FooterSection
              title="Location"
              links={COURSES}
              className="hidden md:flex md:min-w-[180px]"
            />
            <div className={`flex flex-col items-start justify-start gap-3`}>
              <h6 className={sectionTitleClass}>Contact Info</h6>
               <div className="flex flex-row gap-2">
                  <ImageWidget
                    src={Location}
                    alt="Location"
                    className="w-6 h-5 md:w-7 md:h-6"
                  />
                  <div>
                    {ADDRESS_LINES.map((addressLine) => (
                      <p key={addressLine.id} className={linkTextClass}>
                        {addressLine.text}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <ImageWidget
                    src={Email}
                    alt="Email"
                    className="w-6 h-5 md:w-6 md:h-5"
                  />
                  <div>
                      <p className={linkTextClass}>
                        enquire@sellwidely.in
                      </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <ImageWidget
                    src={Phone}
                    alt="Phone"
                    className="w-6 h-5 md:w-6 md:h-5"
                  />
                  <div>
                      <p className={linkTextClass}>
                        +91 90473 73373
                      </p>
                  </div>
                </div>
            </div>
          </div>

          <div className={dividerClass} />

          <div className="block md:hidden">
            <div className={dividerClass} />
          </div>

          <p className={`text-center ${linkTextClass} w-full`}>
            © {new Date().getFullYear()} JESA NextGen All Rights Reserved
          </p>
        </div>
      </ContainerWidget>
    </footer>
  );
};

export default WebFooter;
