import {
  faGithub,
  faTwitter,
  faLinkedin,
  faWordpress,

//https://fontawesome.com/v5.15/icons/stack-overflow?style=brands
} from '@fortawesome/free-brands-svg-icons';

import {
  faHome,
  faInbox,
  faComments,
  faTerminal,

// https://fontawesome.com/v5.15/icons?d=gallery&p=1&q=&s=solid&m=free
} from '@fortawesome/free-solid-svg-icons';

module.exports = {
  url: "https://aubreypwd.com",
  title: "aubreypwdOS",
  author: "Aubrey Portwood",
  gravatar: "https://www.gravatar.com/avatar/09601923fd59a7433892711376c37e41/",
  initialIconSize: 96 * 4,
  icons: [
    {
      href: "https://twitter.com/aubreypwd",
      icon: faTwitter,
      newWindow: true,
      title:"Twitter",
      fileName: "twitter" // For Terminal
    },
    {
      href: "https://github.com/aubreypwd",
      icon: faGithub,
      newWindow: true,
      title:"Github",
      fileName: 'github' // For Terminal
    },
    {
      href: "https://linkedin.com/in/aubreypwd",
      icon: faLinkedin,
      newWindow: true,
      title:"LinkedIn",
      fileName: 'linkedin' // For Terminal
    },
    {
      href: "https://profiles.wordpress.org/aubreypwd/",
      icon: faWordpress,
      newWindow: true,
      title:"WordPress.org",
      fileName: 'wordpress' // For Terminal
    },
    {
      href: "https://tlk.io/aubreypwd",
      icon: faComments,
      newWindow: true,
      title:"Chat",
      fileName: 'chat' // For Terminal
    },
    {
      href: "/terminal",
      icon: faTerminal,
      newWindow: true,
      title:"Terminal",
      fileName: 'terminal' // For Terminal
    }
  ]
};
