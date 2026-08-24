/**
 * Configuration centrale du site — modifiable sans toucher au reste du code.
 */
export const site = {
  name: "Atelier Kipos",
  email: "contact@atelierkipos.com",
  phone: "07 71 18 15 19",
  phoneHref: "tel:+33771181519",
  zone: "Arles & France entière",
  delay: "Sous 48 h ouvrées",
  instagram: "https://www.instagram.com/",
  /**
   * Endpoint du formulaire de contact (indépendant de toute plateforme).
   * Créez un formulaire gratuit sur https://formspree.io (ou Formsubmit / Basin)
   * avec l'adresse contact@atelierkipos.com, puis collez l'URL ci-dessous.
   * Exemple : "https://formspree.io/f/xxxxxxx"
   * Tant que la valeur est vide, l'envoi bascule automatiquement sur le client mail.
   */
  formEndpoint: "",
} as const;

export const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;
