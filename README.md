# My Portfolio

Welcome to my personal portfolio repository!

<!-- TOC -->

- [My Portfolio](#my-portfolio)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Customisation](#customisation)
  - [To do](#to-do)

## Features

- **Dynamic UI**: Created using React and Next.js, with smooth animations powered by Framer Motion.
- **Custom Layout**: A unique spotlight effect and custom sections for: About, Skills, Projects, Contact.
- **Responsive Design**: Fully responsive for a seamless experience across all devices.
- **Contact Form**: Includes a custom contact form with animations and error handling.
- **Skills Tabs**: Tabs to showcase skills.
- **Projects Section**: A dedicated section to display a variety of projects with spotlight and animation effects.

## Technologies

- **Framework**: [Next.js](https://nextjs.org)
- **UI Components**: [Tailwind CSS](https://tailwindcss.com), [React Bootstrap](https://react-bootstrap.github.io)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Images**: [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)

## Installation

To run this project locally:

1. Clone this repository:

   ```zsh
   git clone https://github.com/jediahjireh/my-portfolio.git
   ```

2. Install dependencies:

   ```zsh
   npm install
   ```

3. Run the development server:

   ```zsh
   npm run dev
   ```

4. Open the [default localhost](http://localhost:3000) to view it in the browser.

## Usage

- Navigate through sections such as **About**, **Skills**, **Projects** **Contact**.
- Use the Contact form to send a message.
- Explore the **Skills** section through the interactive tabs.

## Customisation

You can easily modify the content:

- **Name and Bio**: Update the header and About section.
- **Skills**: Add or remove skills in the Tabs section.
- **Projects**: Modify the projects displayed in the Projects section.
- **Contact details**: Switch out my contact card image and name on the contact form for yours. Include your own `ACCESS_KEY` in a `.env` file from [Web3Forms](https://web3forms.com/platforms/nextjs-contact-form).

## To do

- [ ] Add a smaller grid background in [page.tsx](/app/page.tsx), behind the [Hero](/components/sections/Hero.tsx) (but below the lamp's light source) and stopping just before the [About](/components/sections/About.tsx) content. Ideally, it should extend to behind the [About](/components/sections/About.tsx) section heading.
