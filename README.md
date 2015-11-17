# rwebd
Responsive web design

### Assets Link
<https://drive.google.com/folderview?id=0B8dhM5T0p6H9dlJIdThLWUdDYU0&usp=sharing>


##How to safely update our commits to master branch

Aftermaking changes to your file Add them to let git track
your files using: 

`git add`

Next, Stash the added files using: 

`git stash`

After that, the repo will go back to its original state. You can now pull from the master branch

`git pull --rebase`

this kind of pulling gets all the file from master and overrides any changes you've made to your repo. 

Now,after the pull is done, we can now apply our stashed changes

`git stash apply`

and all your latest changes will be applied to the currently updated repo. 

you can now commit these changes and make a push

`git commit -m "updates"`

`git push`

and you're done. orayt! 
