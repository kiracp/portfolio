# Deploying a page on Github Pages

This portfolio site is hosted on Github Pages. Here's how you host your own. 

## Basic setup
### Step 1: Set up our development tools
Open up Terminal app
Download XCode using `gcc` command in Terminal

### Step 2: Setting up our repository
Log into Github. Click *New Repository*. Give it a name and a description, and check "Initialize with a README"
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

### Step 5: Deploying our site
Now we want to tell Github to turn our `index.html` file into an actual webpage. Click over to *Settings* and scroll down to *Github Pages*.

Switch *Source* over to *master branch* in the dropdown and Save. Now, when we scroll back down, we'll see a message that our site is published! Woohoo!

### Step 6: Adding more content and world domination
Awesome! So our website is live! Now how do we make changes?

It's easy. Every time we `git push` changes that we make to our local files up to the repository, the GitHub pages site will rebuild with those changes. The only danger here is that we need to make sure not to push files that are broken. Test test test!

Next steps: adding images to the `public/images/...` file, making changes to our `style.css` file and adding all the content to our HTML page. 

## Nice to haves
On the docket: 
* Adding a favicon
* Adding top nav with a logo
* Hover color on links
* Flexbox gallery
* Changing the width of the website
* Add a gitignore

### Adding a favicon
* Create your Favicon file. This should be a png (so it'll have a transparent background). It should be a square, and small (I recommend 100px x 100px). 
* Save the png in your repository, in the same folder as the `index.html` file. Now go to Finder, and rename the file `favicon.ico`. It will warn you about changing the extension, but you can override it.
* Next, go into your `index.html` file. In the `<head>`, add the following line: 
```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```
* Push your changes!

### Hover color on links
* Go to your stylesheet file. Add a tag that looks like `a:hover`, right below your `a` definition. 
* Here's an example of what the css should look like
```css
a { 
  color: #0000ff;
}
a:hover { 
  color: #ff0000;
}
```
* You can use this same syntax (the `tag:hover`) for any of your css definitions to change the hover behavior!

### Clean code
*Adding a gitignore file*
* In the root folder of your repository, create a file called `.gitignore`
* In that file, you can list out anything that you have on your local machine that you don't want to include in the remote repository. For example, the `.DS_Store` file is automatically generated on Mac machines, but isn't useful to have in our repository. 
* We can also add `**/.DS_Store` will ignore any files with that name in any subdirectory, too.

*Tabs or spaces!*
* One of the most controversial questions in programming! [I'm serious!](https://www.youtube.com/watch?v=SsoOG6ZeyUI)
* But really, using tabs to format your code is one of the best ways to keep your documents readable! Here is a great and comprehensive style guide from Google: https://google.github.io/styleguide/htmlcssguide.html. Some highlights: 
  * Use spaces to indent anything contained in a tag
  * Use only lowercase in your markup
  * Comment the code where necessary
  * Mark action items with `TODO` 
  * Add plenty of space in your css, and make sure that there's a `;` after every single line

### Class vs ID? Padding vs Margin?
*Class vs ID*

![class id](http://www.pxleyes.com/blog/wp-content/uploads/2010/03/idclass.jpg)

* `.class` Classes are NOT unique: You can use the same class on multiple elements, and you can use multiple classes on the same element. Use classes when you are applying styling to multiple elements on the page. 
* `#id` IDs are unique: Each element can have only one ID, and each page can have only one element with that ID. Use the id to call out a specific item 
* Elements can have BOTH a class and an id (`<h1 class="blue" id="about">About</h1>`)
* Only use class/id when they're changing an element! So don't apply them to comment your code, or if they're not changing its state. 

*Using multiple selectors*
* You can chain selectors in your stylesheet! 
  * Using the tag `p.content` will select all `<p>` items that also have the class `.content`
  * Using the tag `p#about` will select the `<p>` item that has the `#about` id
  * Using `.content p` implies DESCENDENCE! So, any `<p>` tags underneath anything with the class `.content` will be affected
  * Using two class selectors like `.content .small` will select only the items that have both classes

*Padding vs margin*

![padding margin](https://i.stack.imgur.com/PeSIJ.gif)

![padding margin 2](http://smad.jmu.edu/shen/webtype/imgs/margin2.png)

* Padding is internal space
* Margin is space outside of your tags
    * The best way to think of this is in terms of a "card" layout"
* For both margin and padding, the number of specifications will determine top/bottom/left/right amounts
  * 1: All - `{margin: 10px}` means 10px of margin all the way around
  * 2: Top/bottom, Left/right - `{margin: 20px 0}` means 10px top/bottom, and 0px left/right
  * 3: Top, Left/right, Bottom - `{margin: 10px 0 20px}` means 10px top, 0px left/right, 20px bottom
  * 4: Top, left, bottom, right -`{margin: 5px 10px 15px 20px}` means 5px top, 10px left, 15px bottom, 20px right
    
*Resources*
* Check out this article to learn some more [css tricks](https://css-tricks.com/little-css-stuff-newcomers-get-confused-about/)
* I love this guide to [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Otherwise, googling (!!) and looking at other folks' code is a good way to get your questions answered
