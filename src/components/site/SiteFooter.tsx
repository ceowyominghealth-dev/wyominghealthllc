import logo from "@/assets/wyoming-health-logo.png";
import { CONTACT } from "./data";
import { Linkedin, Mail, Phone } from "lucide-react";

const COMPANY = ["Services", "How it works", "Why us", "About", "Contact"];
const SERVICE_LINKS = [
  "Medical coding",
  "Medical billing",
  "Accounts receivable",
  "Denial management",
  "Patient scheduling",
  "Provider credentialing",
];

export function SiteFooter() {
  return (
    <footer className="text-primary-foreground" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="Wyoming Health LLC logo"
              width={128}
              height={72}
              loading="lazy"
              className="h-11 w-auto rounded-md bg-white p-1"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              Coding-led revenue cycle management, billing, denial management and scheduling for
              healthcare providers across the United States.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-brand-gold">COMPANY</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {COMPANY.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="transition-colors hover:text-brand-gold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-brand-gold">SERVICES</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {SERVICE_LINKS.map((item) => (
                <li key={item}>
                  <a href="#services" className="transition-colors hover:text-brand-gold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-brand-gold">GET IN TOUCH</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li>{CONTACT.address}</li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
              >
                <Linkedin className="h-4 w-4 text-brand-gold" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
                className="rounded-lg bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
              >
                <Mail className="h-4 w-4 text-brand-gold" />
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                aria-label="Call us"
                className="rounded-lg bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
              >
                <Phone className="h-4 w-4 text-brand-gold" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Wyoming Health LLC. All rights reserved.</p>
          <p>HIPAA-compliant operations · Sheridan, Wyoming</p>
        </div>
      </div>
    </footer>
  );
}
// import logo from "@/assets/wyoming-health-logo.png";
// import { CONTACT } from "./data";
// import { Linkedin, Mail, Phone } from "lucide-react";

// const COMPANY = ["Services", "How it works", "Why us", "About", "Contact"];
// const SERVICE_LINKS = [
//   "Medical coding",
//   "Medical billing",
//   "Accounts receivable",
//   "Denial management",
//   "Patient scheduling",
//   "Provider credentialing",
// ];

// export function SiteFooter() {
//   return (
//     <footer className="text-primary-foreground" style={{ backgroundImage: "var(--gradient-hero)" }}>
//       <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           <div>
//             <img
//               src={logo}
//               alt="Wyoming Health LLC logo"
//               width={128}
//               height={72}
//               loading="lazy"
//               className="h-11 w-auto rounded-md bg-white p-1"
//             />
//             <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
//               Coding-led revenue cycle management, billing, denial management and scheduling for
//               healthcare providers across the United States.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xs font-semibold tracking-[0.18em] text-brand-gold">COMPANY</h3>
//             <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
//               {COMPANY.map((item) => (
//                 <li key={item}>
//                   <a
//                     href={`#${item.toLowerCase().replace(/ /g, "-")}`}
//                     className="transition-colors hover:text-brand-gold"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xs font-semibold tracking-[0.18em] text-brand-gold">SERVICES</h3>
//             <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
//               {SERVICE_LINKS.map((item) => (
//                 <li key={item}>
//                   <a href="#services" className="transition-colors hover:text-brand-gold">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xs font-semibold tracking-[0.18em] text-brand-gold">GET IN TOUCH</h3>
//             <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
//               <li>
//                 <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-gold">
//                   {CONTACT.email}
//                 </a>
//               </li>
//               <li>
//                 <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand-gold">
//                   {CONTACT.phone}
//                 </a>
//               </li>
//               <li>{CONTACT.address}</li>
//               <li>
//                 <a
//                   href={CONTACT.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-brand-gold"
//                 >
//                   LinkedIn
//                 </a>
//               </li>
//             </ul>
//             <div className="mt-6 flex gap-3">
//               <a
//                 href={CONTACT.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="rounded-lg bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
//               >
//                 <Linkedin className="h-4 w-4 text-brand-gold" />
//               </a>
//               <a
//                 href={`mailto:${CONTACT.email}`}
//                 aria-label="Email us"
//                 className="rounded-lg bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
//               >
//                 <Mail className="h-4 w-4 text-brand-gold" />
//               </a>
//               <a
//                 href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
//                 aria-label="Call us"
//                 className="rounded-lg bg-primary-foreground/10 p-2.5 transition-colors hover:bg-primary-foreground/20"
//               >
//                 <Phone className="h-4 w-4 text-brand-gold" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
//           <p>© 2026 Wyoming Health LLC. All rights reserved.</p>
//           <p>HIPAA-compliant operations · Sheridan, Wyoming</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
