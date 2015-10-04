# git-narrative

This is an experiment for showing the story for a git project.  Visualisation parts are inspired by [gource](http://gource.io/).

It's currently a hard-coded version for the jsoxford site, though if it works okay I might use it as a base for a more generic tool.

## generating initial file

```bash
git log --pretty=format:'%at - %h - %aN - %s' --reverse --raw --encoding=UTF-8 --no-renames > ~/Projects/git-narrative/jsoxford.txt
```
