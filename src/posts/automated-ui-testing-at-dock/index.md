---
date: '2018-06-03'
title: 'Automated UI Testing at Dock'
tags: ['web']
lang: 'en'
image: ./picture.png
preview: ./picture.png
---

At [Dock](https://www.dock.io) we rely heavily on automated UI testing as a primary way of ensuring quality and preventing regressions in our web apps and satellite projects. We have found it to be an excellent method of testing by simulating how our web applications are supposed to work for our end users. In light of this, we've continuously noticed significant improvements in quality as we've introduced more tests.

## Puppeteer + Cucumber = ❤️

We rely on a couple technologies for running UI tests. The first technology is [Puppeteer](https://pptr.dev), which is a high-level API for headless Chromium. We used Puppeteer starting from very early 0.x versions and noted that it evolved and became more powerful and mature with each iteration. Our biggest issue in the beginning, however, was to make it work properly inside of a Docker container. But their project has pretty good documentation now on how to [troubleshoot](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker) possible issues.

The second technology is [Cucumber](https://cucumber.io), which is a runner for BDD tests. It uses its own [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax to express requirements in the form of a human-readable set of executable specifications. You create a feature, then describe different scenarios for this feature. Each scenario consists of steps, and you can write arbitrary JavaScript behind each step. This is called "step definition" and it is the place where we typically communicate with Puppeteer's page object. Cucumber is a perfect match for UI tests, since it allows us to express requirements exactly in UI terms without exposing technical details.

Here is an example of a test scenario:

<iframe
  width="100%"
  height="400"  
  style="border: none;"
  src="data:text/html;charset=utf-8,
  <head><base target='_blank' /></head>
  <body style='margin: 0; padding: 0'><script src='https://gist.github.com/ermakovich/5762a7dba764db0e2a9542336c6fd1b6.js'></script></body>">
</iframe>

One powerful feature of Cucumber is that once you define a step, you can use it in multiple scenarios. In the example above you can see the steps: `I navigate to ""` or `I submit form`. These steps are generic and are used in many different scenarios.

## Testing in isolation

Obviously when normally loading a web app into Puppeteer, it doesn't work in an isolated environment. It performs requests to our backend and reacts to responses. Initially we tried running tests against our real staging api, but we faced multiple issues:

- "Deep" scenarios require setting up a lot of context to execute. Basically any scenario for a logged in user requires registering this user first in the backend. This results into a ridiculous amount of boilerplating code and test complexity.
- Tests run really slow due to communication with the real backend and due to the need to set up context for "deep" scenarios.
- There is a lot of "trash" data generated in the staging database.
- Network connection to api is required when running tests locally.

## Backendless testing

We quickly found that testing with the real backend was not viable and decided that tests should run against a mock backend. This significantly simplifies the process, especially if you think of your web app as a classic program, which gets input and provides output. Backend responses are essentially an input for our app and there is no reason to have complex test setup just to provide this input.

When we realized this there were two options:

- Create a custom HTTP server that can return mock responses and point our app to this server instead of real backend.
- Use a library like [Pretender](https://github.com/pretenderjs/pretender) to intercept requests on the page and provide mock responses.

We initially tried the first approach, but it wasn't adequate since we couldn't distinguish the same requests made from different scenarios. It was necessary for us to be able to define mock responses in an isolated manner per scenario, so we decided to stick with Pretender.

This has worked well but also required the injection of Pretender into our web page during tests, which was not a trivial task. For example, this required us to keep two dev servers running locally: one with "normal" app, which can be opened in a browser, and the second "test" one with Pretender injected, so that we can develop and test in parallel.

## Request interception with Puppeteer

Our process improved dramatically after the release v0.13 of Puppeteer, where there was `request.respond()` method introduced. With request interception done on browser internal level, we managed to completely separate our app from the testing environment. Now we have a running local instance of the app opened in a browser, which is convenient for development, and at the same time we can load the app into Puppeteer! Thanks to request interception, requests can now be mocked without any changes needed in the app itself or the server running it. It also comes with a blazing fast performance.

## pptr-mock-server

As I mentioned before, we use UI testing in several projects so it was natural to split some of the common logic into a separate library and share it between the projects. We created and open sourced a tiny **[pptr-mock-server](https://github.com/ermakovich/pptr-mock-server)** library. Currently it's lacking api documentation and unit tests, but at least it provides an idea about how to implement backend-less testing using Puppeteer.

## Conclusion

Even though automated UI testing is a great way to keep a high quality bar for our apps, we went through a thorny path of getting our tests up and running for it to start providing value for us.

We hope that you will find this article helpful when implementing UI tests for your own app or upgrading your existing setup.
