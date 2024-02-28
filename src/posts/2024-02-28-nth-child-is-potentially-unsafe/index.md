---
title: '":nth-child" is potentially unsafe when doing SSR'
date: 2024-02-28T09:53:03.096Z
preview: ./emotion-error.png
draft: true
tags:
  - web
  - tools
  - dev
lang: en
cover_image: ./emotion-error.png
---

After some changes in the project I'm working on I noticed error in the console:

> The pseudo class ":nth-child" is potentially unsafe when doing server-side rendering. Try changing it to ":nth-of-type"

This sounds scary. But what exactly is potentially unsafe and how it can be exploited? Let's investigate.

The error comes from the Emotion library. The problem the library is complaining about, is that selectors such as `:nth-child`, `:first-child` or `:last-child` are not specific enough and sometimes they may select some unexpected elements. For example, elements such as `<style>` elements, which are common in case of SSR. So, the wording in definitely not optimal here, since it has nothing to do with "safety", but is rather about reliability.

Why Emotion library cares so much about this (very rare, actually) use case and why it throws an error is a mystery for me. Moreover, it seems to throw this error even in production mode!

I tried to do some research regarding how to disable this behavior, but there seems to be no trivial solution to do this. So in my case the easiest solution was to replace `:nth-child` with `:nth-of-type` as library suggests. Luckily in my case it was equivalent and didn't require any additional changes.
