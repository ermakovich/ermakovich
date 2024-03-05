---
title: Why you should not use Gatsby Link by default
date: 2024-03-05T17:36:43.560Z
preview: ./gatsby-link.png
tags:
  - web
  - dev
  - gatsby
lang: en
cover_image: ./gatsby-link.png
---

Many people, including me, initially choose Gatsby, because it helps to create static sites using React quite easily. I know that there are many new frameworks came up for this in the last few years, but coming back in 2020s, there were not so many options.

However, when creating sites using Gatsby many people don't realize, that they do actually convert their websites into SPAs (single page applications) by using `<Link>` component from [Gatsby Link API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/). This component is so widely adopted and propagated in so many Gatsby starters and templates, so that it's really temptating to start using it, especially for newcomers.

Let me just quote Gatsby documentaion about this component:

<blockquote>
The &lt;Link\&gt; component drives a powerful performance feature called preloading. Preloading is used to prefetch page resources so that the resources are available by the time the user navigates to the page. We use the browser’s Intersection Observer API to observe when a <Link> component enters the user viewport and then start a low-priority request for the linked page’s resources. Then when a user moves their mouse over a link and the onMouseOver event is triggered, we upgrade the fetches to high-priority.

This two stage preloading helps ensure the page is ready to be rendered as soon as the user clicks to navigate.

Intelligent preloading like this eliminates the latency users experience when clicking on links in sites built in most other frameworks.

</blockquote>

This sounds cool, and I believe it's a good feature for some web apps. But it creates a whole bunch of issues for regular websites.

## Client-side navigation

Client-side navigation requires custom progress indication/transition to be implemented. Gatsby doesn't come with any by default. Despite preloading, navigation can still require some time. If you don't implement custom progress indication, site may feel like it's stuck or freezing when user clicks on a link and nothing happens.

On the other hand, if preloading completes in time, and navigation is instant, it also doesn't feel very good. The thing is that navigation runs TOO fast in this case and most web users are simply not used to such behavior. So, custom transition logic is needed in any case.

Also, client-side navigation relies on client-side rendering, and there might be browser-specific bugs and other issues. In my experience client-side rendering issues due to script caching are quite often in Gatsby, and sometimes they are hard to solve.

Additionally, if you use analytics scripts, be prepared that the won't track pageviews properly if you use Gatsby Link and client-side navigation. You need to use corresponding plugins or implement custom tracking using Gatsby's browser APIs.

And another small note. If you want to implement custom drop-down navigation menu, or modal component, you will need to listen to client-side navigation events to make sure menu doesn't stay open after user clicked on a link in the component.

## Preloading

Preloading itself can cause many redundant network calls, especially if you have many links in a viewport. If user performs quick scroll over your website, there will be MANY preloading calls. This can of course cause unnecessary waste of data plan and device battery for mobile users. It may also add up to your web hosting bills if you pay for network usage.

## Other possible issues

To add to that list, developers often get stuck with styling `<Link>` component and it's various states, especially when using CSS-in-JS libraries, or when integrating with third-party UI components.

Finally, just imagine how many links and possible variations can be on a website, and you always need to remember to use `<Link>` under the hood. It definitely adds extra complexity. That's probably why there are so many Gatsby sites out there, which are using a mix of regular `<a>` tags and Gatsby's `<Link>`s.

## So, should I avoid using Gatsby Link completely?

Preloading and client-side navigation features are so deeply integrated into Gatsby core, so that there is even no option to disable them completely. Even if you are not using Gatsby Link at all, there will still be page files generated for Preloading during build. There will still be react-router related code required for client-side navigation in a resulting JS bundle.

I think preloading is a nice feature, but I believe it must be implemented by browsers first with ability to be turned off or configured by users. To be done properly it should take many things into account, like user's device connection type, device settings, battery status, and others.

Using it as part of Gatsby seems to be an overkill for me, and I highly recommend not using `<Link>` unless you definitely know what you are doing and you are OK with the issues mentioned above.
