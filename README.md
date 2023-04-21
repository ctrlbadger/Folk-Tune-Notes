# Folk Tune Notes

This is my personal Obsidian Vault to track what tunes I want to play and help me find interesting sets to play. In general this is effectively my folk brain 

Using obsidian and heavily relying on the `Templater`, `Tasks` & `Obsidian Git` community plugins allows me to fill in a whole bunch of metadata in no time and track my tunes!

## What does this look like?
Here's a screenshot of a what it looks like:

![Obsidian Desktop Screenshot](https://github.com/ctrlbadger/Folk-Tune-Notes/blob/main/Templates/screenshot.png?raw=true)

# Hey I want to use this too!
Brilliant! I think the best way to get started would be to fork this repository, clone the directory and then create a new obsidian directory in that vault. Install the community plugins `Templater`, `Tasks` & `Obsidian` and follow their guides for setup.

The way I create a new tune is to create a new file, name it the tune I want to add, and then use `templater` to add the contents of the file with the `Tune Templater.md` template. 
I've written (ChatGPT has written) a script that queries the file title on the session and returns the url of the first tune result.

Using tasks, `Folk Tunes to Learn.md` should automatically show all tunes that are known and not known to help you sort check off tunes. This is handled by the template including a `- [ ] ` line in each tune file.

## Things that would be cool to add:
Even more support from the template by adding more user functions, it would be cool to have the abc directly in the file!
As a general proof of concept I think this works quite well.

