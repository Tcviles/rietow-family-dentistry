import { SvgIconComponent } from '@mui/icons-material';

export type ServiceListItem = {
  primary: string;
  secondary: string;
};

export type ServiceSection =
  | {
      type: 'list';
      title?: string;
      listItems: ServiceListItem[];
    }
  | {
      type: 'paragraph';
      title?: string;
      content: string;
    };

export type ServiceDetail = {
  title: string;
  id: string;
  subtitle: string;
  icon: SvgIconComponent;
  buttonText: string;
  description: string;
  sections: ServiceSection[];
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: SvgIconComponent;
  services: ServiceDetail[];
};

export type ServicesPageContent = {
  heading: string;
  intro: string;
  servicesContent: ServiceCategory[];
};

export type HomePageContent = {
  welcomeTitle: string;
  aboutDentistry: {
    heading: string;
    description: string;
  };
};

export type TeamContent = {
  drJoe: {
    name: string;
    clinic: string;
    quote: string;
    headshot: string;
  };
};
