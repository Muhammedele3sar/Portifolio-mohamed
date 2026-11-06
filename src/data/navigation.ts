export interface NavItem {
  name: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Expertise', href: '#expertise', id: 'expertise' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'AI & Innovation', href: '#innovation', id: 'innovation' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

