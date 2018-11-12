---
date: '2015-02-28'
title: 'Git branches are not branches?'
cover_image: './trees.jpeg'
---

I personally love Git. It is much better than anything else I've used before. However there is one feature I don't like. I'm talking about ability to merge branches.

You may ask why? Well, lets imagine a tree. Branches grow from it's trunk and never collide. Speaking in terms of graph theory there are no cycles. In Git you can create cycles by merging a branch into trunk (aka _master_) or into another branch. This is because Git represents history not as a [tree](http://en.wikipedia.org/wiki/Tree_%28data_structure%29), but rather as a structure called [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG).

DAG structure for representing version history is common for all [DVCS](http://en.wikipedia.org/wiki/Distributed_revision_control) systems I know. I'm just providing Git as an example of the most popular DVCS system, and the system I personally use. All these systems call it a _branch_ and everyone understands how it works. But in terms of graph theory it's not a branch, since you can create a cycle by eventually merging branch into it's ancestor.

Representing version history as DAG seems to be a design error, because it breaks logical flow of history and conflicts with the idea of incremental development. Advice: if you are aimed to develop software in the most logical and efficient way – **avoid** DAGs for representing version history. Just stick with normal tree structure and use branches **only** for release management.

I will try to tell more about this in some time in future.

Peace!
