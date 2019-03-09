## How to digitally and programmatically fill in PDF documents
Developers, like us at KITS and many other developers around the world like to picture themselves working on large scale solutions, solving great engineering challenges that in the end will save the day. Then comes the day where you are asked "can you make us able to export this data, and do it onto a PDF document? We need these fields from the database".

Truth this, from a business perspective, large systems tend to instead give you more convoluted solutions to solve more than one problem, and if you're unlucky they solve each problem poorly. Sometimes the small hacks are simply the best productivity boosters.

Today I'm going to show a quick and simple way to get this type of work done, and I'm going to start off by giving you my complete solution, because you want the solution and I respect that completely.

If being a developer is not your main job, don't worry, I'm going to give you a few prerequisites to get going.

What you need:
* NodeJS (Latest or LTS)
* Git for Windows (unless you're not using Windows)

Here are the steps.
1. Open a git bash console (just open the windows start menu and type `git bash`, it should be there).
2. Type `git clone https://github.com/wbern/hummus-pdf-example.git` to get my example repository
3. Type `cd hummus-pdf-example`

### Ok ok ok, what are we doing? (skippable)
For those who want to know, we are using an enhanced shell bundlded with `git`, a way to 