# Meraki Captive Portal with Cloudflare

*Cloudflare: WiFi Captive Portal*  
An Open-Source Meraki Captive Portal using Cloudflare Pages.

## Overview

The Meraki Captive Portal with Cloudflare is an open-source and freely accessible solution for creating customized Captive Portals tailored to Cisco Meraki wireless networks.

Utilizing Cloudflare Pages and the open-source framework of this project, you can effortlessly redirect users to your customized Splash Page, interact with them, and manage internet access as necessary.

Thanks to Cloudflare's reliable usage models, there are no associated fees, subscription costs, or ongoing maintenance requirements, making this solution equally accessible to individuals, small businesses, and organizations.

### Example and Live Demo

Test it out in real-time in your environment! Configure the following link as your WiFi Splash-Page for a non-production access point or ssid, and try it out! ```https://meraki-splash-flare.pages.dev```

## Easy Setup and Installation

1. Create a Cloudflare account at www.cloudflare.com
2. Create a GitHub account at https://github.com/
3. Fork this repository to your GitHub account.
4. Rename the forked repository to be what you want the live page URL to start with.
5. Make as many modifications to the front end as you'd like!
6. Log into Cloudflare to view the Home dashboard.
7. Select the "Workers & Pages" tab on the sidebar.
8. Select the "Create Application" in the Overview section.
9. Select the "Pages" tab beneath the "Create an application" section.
10. Select the "Connect to Git" button and sign in as prompted.
11. Select the repository you forked from Step 3.
12. Select the "Begin setup" button at the bottom of the page.
13. Select the "Save and Deploy" button at the bottom of the page.
14. Wait around 5 minutes for the initial build to build and deploy.
15. Success! Check out your live site at ```https://<forked-repo-name>.pages.dev```

## Optional: Setup a custom domain name

Setting up a custom domain requires the domain to be added to Cloudflare under the "Websites" tab, as this process will add a new CNAME attribute to the domain's DNS configurations.

1. Select the "Workers & Pages" tab on the sidebar.
2. Select the pages project you want to set up a custom domain for.
3. Select the "Custom domains" tab in the main section.
4. Select the "Setup a custom domain" button.
5. Enter the domain you want to configure as the custom domain name.
6. Select the "Activate Domain" button at the bottom of the page.
7. Success! Check out your new domain in a few minutes at ```https://<custom-domain>```

## Updating Your Deployment

Updating your deployment is as easy as it comes!  
Simply commit your changes to the repository used to create the page, and Cloudflare will automatically build and deploy the next version for you! This can be altered, though, to only automatically deploy to a preview branch rather than production.

## Screenshot
![Screenshot of Live Demo](screenshot.png)

### Created By
*Adam Spera & Brey Rivera*  
Find us at the links below!  
www.adamspera.dev
www.breyr.dev


## LICENSE
Apache 2.0 (see [LICENSE](./LICENSE) and [NOTICE](./NOTICE)).
