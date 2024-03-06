---
title: What developers need to know when working with web designers
date: 2023-11-30T11:49:20.095Z
preview: ./bosch.jpg
tags:
  - web
lang: en
cover_image: ./bosch.jpg
---

Any serious project involves a dedicated designer role — a person who will create beautiful, modern design mockups for the product. Designer collaborates with business owners when implementing designs, and then forwards the result to frontend developers. Let's break down what working with designer involves from developer perspective and what you need to pay attention for.

### Grid systems

Designers use grid systems. It's important to understand grid systems and make sure your code utilizes chosen grid system as well and benefits from it. Once you know there is a grid system being used, even if it's not visible in designs (depending on the tool), it gets easier to understand common layout and spacing rules.

It's important to align with your designer regarding base unit for grid system. It's common to use base `font-size` as a base unit. This will allow you to use relative values (`rem`) in your CSS in order to avoid absolute `px` values and make sure layout scales accordingly to the viewport.

### Adaptive markup

Designers cannot provide you with designs for **all** possible viewports. They most commonly provide you designs only for mobile and desktop. Sometimes there may also be design for tablet provided. The reason for having different designs for mobile and desktop is obviously different aspect ratio and available space these devices have, requiring different layouts.

You must use responsive techniques for the web page to scale depending on viewport to match designs. Sometimes it's not clear what the website should look like between breakpoints and how elements should reflow, especially when rendering on large screens. General advice here is to use relative units and scale your base unit gradually depending on screen size. This allows to ensure the website looks as designed on any device.

### Retina displays

Designers, especially those who work on non-retina displays will commonly forget to provide high-res images, which are required for retina displays. This is getting even worse, if developer also works on non-retina display. In this case this issue may get into production unnoticed, and will irritate users with hi-end devices.

Today's smartphones are often "retina", having DPR (Device Pixel Ratio) from 2x and higher. Apple desktop and laptop displays are usually retina displays as well.

When user opens a website on retina display, that has an un-optimized low-res image, it immediately catches attention and causes irritation.

So remember to always double-check provided image sizes, so that they cover supported viewports and retina displays. Remember, that users of high-end devices with retina displays are potentially more payable customers and they require special care ;)

### SVG assets

Designers often use SVG icon libraries. It will be good if you are on the same page regarding icons set being used, so that you can reuse it more comfortably on frontend if possible, rather than exporting from designs each time.

Also designers sometimes will forget to mark SVG assets as exportable. That's easy to fix. Just ask your designer to make certain asset exportable.

### Typography

Typography is one of the most important aspects of the web design, and it can affect overall impression and adoption pretty significantly. `letter-spacing`, `line-height`, `font-weight`, `font-family` — all these properties matter a lot for typography-obsessed designers and they often fine-tune these properties from element to element. It's common that headings and paragraphs may have slightly different font families and other typography properties.

It's important to understand the semantics, discuss with designers common text styles used in the designs. You should create corresponding primitives for these styles in frontend codebase, rather than blindly copy-pasting CSS from place to place.

### Pixel Perfect

Designers love when resulting website looks exactly as designed! There are "pixel perfect" techniques and tools allowing to achieve this when developing.

Additional benefit of "pixel perfect" approach is that it not only allows to achieve best match between designed and actual webpage, but it also lets you notice subtle, hard-to-detect changes to the page.
These changes may be intentional or unintentional, so you should always speak to designer regarding them in order to maintain consistency (see next point).

### Consistency

Sometimes, when getting new designs for some new feature or simply a redesign, you may notice changes to reusable components, like buttons, text elements, etc. You should always clarify with your designer whether these changes are intentional or are made by mistake. If they are intentional, should they apply globally, or be context-specific for this particular page / component, or whether there is any additional semantics involved.

Usually designers make such changes intentionally, assuming they will propagate globally. But depending on the tool being used by designers, they are not always able to update the rest of designs quickly to make them consistent. So, they may make changes only to the mockup representing particular new feature, and you, as a developer, should make sure these changes propagate globally over the website.

### Accessibility, UX, web standards

Goal of any designer is to create beautiful, well-looking designs, matching business goals and product vision. But sometimes it has trade-offs. As a developer your responsibility is to notify designer when you see certain design decisions affecting UX or not playing well with web standards. Most common areas are forms and any elements involving user interaction.

## Final word

I hope you find these tips helpful, and as a developer you will be better prepared in terms of what to expect and where to see when working with designers. Finally, I must admit they are usually very nice people and I personally never had any issues or conflicts with them :) Developers and designers mindsets may be slightly different, so communication is the key.
