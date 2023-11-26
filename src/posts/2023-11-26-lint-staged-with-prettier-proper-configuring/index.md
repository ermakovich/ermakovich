---
title: Lint-staged with Prettier proper configuring
date: 2023-11-26T14:54:44.741Z
preview: ./prettier-error.png
tags:
  - dev
  - nodejs
  - tools
lang: en
cover_image: ./prettier-error.png
slug: lint-staged-prettier-proper-configuring
---

One of the most common use cases for [lint-staged](https://github.com/lint-staged/lint-staged) is formatting files using [Prettier](https://prettier.io). Documentation of lint-staged is full of references to this use case, suggesting you to achive it this way:

```json:title=.lintstagedrc
{
  "*": "prettier --write"
}
```

However, if you just setup it this way, at some point you may encounter an error like this when trying to commit your changes:

> ✖ prettier --write:
> [error] No parser could be inferred for file "..."

It may happen if your changes are including some files with a format not supported by Prettier, like for example a binary file, image, etc. The reason for this is that behind the scene lint-staged invokes Prettier with an _exact file path_, and in this case Prettier assumes that this file _must_ be formatted, despite the format. So, the error from Prettier seems to be logical. This behavior is different compared to when we run Prettier by ourselves, passing it a _glob pattern_ instead of an exact file path, like `prettier --write .`. It will work as expected and will ignore unsupported file formats.

Luckily in case of lint-staged the solution is pretty easy. It is [mentioned](https://github.com/lint-staged/lint-staged#automatically-fix-code-style-with-prettier-for-any-format-prettier-supports) in the lint-staged documentation, but you must be very attentive in order to find it :). The solution is simply adding an [`--ignore-unknown`](https://prettier.io/docs/en/cli.html#--ignore-unknown) flag when running Prettier:

```json:title=.lintstagedrc
{
  "*": "prettier --write --ignore-unknown"
}
```

This flag tells Prettier to ignore unknown files even if it's invoked with an exact file path, which is just what we need.
