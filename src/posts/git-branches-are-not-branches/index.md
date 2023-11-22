---
date: 2015-02-28
title: Git branches are not branches?
cover_image: ./trees.jpeg
preview: ./trees.jpeg
lang: en
tags:
  - git
---

UPDATED: Nov 22, 2023

I personally love Git. It is much better than anything else I've used before. However there is one feature I don't like. I'm talking about ability to merge branches in a random way.

You may ask why? Well, lets imagine a tree. Branches grow from it's trunk and never collide. Speaking in terms of graph theory there are no cycles. In Git you can create cycles by merging a branch into trunk (aka _master_) or into another branch. This is because Git represents history not as a [tree](http://en.wikipedia.org/wiki/Tree_%28data_structure%29), but rather as a structure called [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG).

DAG structure for representing version history is common for all [DVCS](http://en.wikipedia.org/wiki/Distributed_revision_control) systems I know. I'm just providing Git as an example of the most popular DVCS system, and the system I personally use. All these systems call it a _branch_ and everyone understands how it works. But in terms of graph theory it's not a branch, since you can create a cycle by eventually merging branch into it's ancestor, or by merging branch into another one.

Representing version history as DAG seems to be logical from DVCS perspective, but it's not always logical from development perspective. I saw projects with poor version history management, resulting into a mess and spaghetti-looking history graph if you visualize it.

Also, most common mistakes I saw were:

- using permanent `dev` branch, which is merged into `master` after each iteration
- creating new branch for each iteration, which is then merged into `master`

The biggest issue with both these approaches is that there must be a dedicated person, who will perform these "big" merges. Sometimes this person will have to resolve potential merge conflicts in the changes he didn't make, which is very error-prone.

That's why there are approaches like GitHub Flow exist, where you develop in incremental way, and temporary branches are created only for making a certain feature/chore/bugfix. And only the person who makes changes is always responsible for resolving potential conflicts before merging changes back into `master`. With this approach `master` becomes the only permanent branch and the single source of truth. Temporary branches might still be created for release management if your project has releases and versioning (apps and libraries). Release branch is removed after release support time ends.

You may notice that with GitHub Flow approach you avoid merging branches between each other in an unpredictable, random way, so your version graph has a clean predefined structure, resembling a "tree" structure as much as possible. Also, this approach plays very well with Continious Delivery and Continious Deploy strategies.

I wish we all understand the power modern DVCS systems provide and use them responsibly, so that team members don't suffer and work efficiently. Key for this is using well-defined branching startegies, avoiding self-invented and experimental branching strategies when working with other people.
