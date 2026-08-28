export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "About", href: "/about" },
  { display: "Services", href: "/services" },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the logistics company's real phone number/hours
export const CONTACT_PHONE = "+1 (234) 567-890";
export const OPEN_HOURS = "Mon - Fri: 07:00 - 06:00 PM";
