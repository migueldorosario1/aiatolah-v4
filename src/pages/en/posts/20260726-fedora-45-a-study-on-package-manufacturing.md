---
layout: ../../../layouts/PostLayout.astro
title: 'Fedora 45: A Study on Package Manufacturing'
date: 2026-07-26
category: 'Development'
lang: "en"
excerpt: "An inside look at the creation process of Fedora 45 artifacts, from the package commit to the final installable version."
source: 'https://supakeen.com/weblog/the-fedora-45-sausage-factory/'
heroImage: "/hero/fedora-45-um-estudo-sobre-a-fabricacao-dos-pacotes.jpg"
---
Fedora 45, the latest version of the popular Linux operating system, is coming, and with it, an update in understanding the process of creating its packages. This article walks through step by step how Fedora transforms source code and packages into artifacts for download and installation, from a packager's `git push` to the composition of the final release, which includes ISOs, cloud images, container images, and OSTree deployments.

**Start of the Line: dist-git**
The journey begins with a packager doing a `git push` of a commit in a package. Fedora stores the source definition of each package in individual Git repositories at src.fedoraproject.org. Each repository contains an RPM spec file, patches for downstream, and a sources file that points to upstream tarballs stored in a separate lookaside cache. While large binary files stay out of Git, the other files, including version control, remain within it.

Packagers typically interact with these repositories through `fedpkg`, a command-line interface that encapsulates common operations like cloning repositories, uploading source tarballs, submitting builds, and creating updates. `fedpkg build` is crucial because it constructs a URL pointing to a specific commit in the Git repository and delivers it to Koji, the build system. The build is fully reproducible from that commit hash.

**Build System Architecture: Koji**
When `fedpkg build` submits that Git URL, Koji takes over. Koji is Fedora's build system, responsible for building practically everything since Fedora 7. Following a hub-and-spoke architecture, the hub is a passive XML-RPC server in front of a PostgreSQL database, while builder daemons poll the hub for jobs, create a fresh Mock chroot environment for each build, execute the build, and send back results. Each build starts in a clean environment, ensuring reproducibility.

**Update Control: Bodhi**
New RPM builds in Koji do not reach users automatically. For branched releases (any version that is not Rawhide), they go through Bodhi, Fedora's update management system. Bodhi controls the release of updates through a feedback and testing cycle. A packager submits an update containing one or more builds, which go through a sequence of states: pending, test, stable. Users and automated tests provide karma (+1 / -1). When an update reaches +3 karma or passes enough days in test, it is automatically pushed to stable.

**Composing a Release: Pungi**
Individually, RPMs, even with Bodhi's control, are just packages. Turning them into something we can download and install, like ISOs, cloud images, or repositories, is Pungi's job. Pungi is the compose orchestrator. Instead of doing the heavy lifting, it coordinates the tools that do, ensuring everything is built from the same consistent set of packages.

A compose begins when `pungi-koji` is run, triggered by cron for nightly Rawhide composes or manually for milestone releases. It loads a configuration file (for Fedora, this is `fedora.conf` in the `pungi-fedora` repository) and goes through a sequence of phases.

The first real work Pungi does is snapshot the package set from a Koji tag. This is the Pkgset phase and is crucial: every subsequent phase works from this frozen set. If someone submits a new build to Koji while the compose is in progress, it will not enter the compose. The tag-based snapshot makes the entire compose auditable.

**Conclusion**
With Fedora 45, the open source community can be proud of a transparent and auditable packaging process, which ensures the quality and reliability of the packages that are made available to end users.