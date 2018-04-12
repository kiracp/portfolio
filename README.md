# Deploying a page on Github Pages

### Step 1: Set up our development tools
Open up Terminal app
Download XCode using `gcc` command in Terminal

### Step 2: Setting up our repository
Log into Github. Click `New Repository`. Give it a name and a description, and check "Initialize with a README"
Click "Clone or download" and copy the URL, then switch to Terminal.


Use `ls + ENTER` to list out the files and `cd directory_name + ENTER` to change into the directory you want the repository (for example: `cd Documents`).

Enter `git clone https://github.com/[repositoryyoujustcopied]` which will copy the remote code onto your local machine. Do `ls` (you should see the name that you gave the Repo) and `cd repo_name` to transfer into it.

### Step 3: Our first commit!
Go over to Finder and navigate into your folder. Open up the `README.md` file in your text editor. Add some text to that file.

Now, we're going to add these changes to our remote repository using the following commands:
* `git add .` to add all the directory files 
* `git commit -m “first commit”` to stage them for commit 
* `git pull` juuust in case - gets the most recent version of the directory
* `git push` to push up your changes!
These are the steps you will go through every time you make a change. 

NOTE: The first time we do this, we may see the following:
* After we do the `commit` command, we may get a not about the config file. Use that command `git config --global --edit` to set your Github information.
* `push` command may look like this `git push --set-upstream origin master` to tell the repository what branch you are pushing to
* `push` command may also prompt you to log in using your Github credentials

### Step 4: Adding a page!
We'll create a page called `index.html` and styling in a `style.css` file. This will house all the content that we want on our GitHub Pages site. This repository contains some examples of those files. 

Once we add some content, let's follow the git commands in Step 3 to add it to our repository. 