# JS Event Handling Practice

## Set Up

Fork this repo, then run `git clone` to download your fork locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`. Run `json-server --watch db.json`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.

## Assignment

In this challenge, we're going to be working on a site that allows our user to view random content. For the bored users out there! We're going to be using data from an array of objects inside the `data.js` file. We're going to give our users the ability to:

- View one intitial random item on page load in the `div#content-container`
- Click on the "show random picture" button to view one new item in the `div#content-container`
- Like an item, which should update the number of likes displayed and should persist 
- Submit new content, which should persist and should be displayed in the `div#content-container`
- Edit the currently displayed content, which should persist and be reflected in the `div#content-container`

There's a section in this README file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Intitial random content on page load

**When a user loads the page**, the page should display some random content on the page including the image, description, and number of likes. 

#### Some things to keep in mind:
- For coming up with a random ID to use in your fetch request (to get a random content object to display), consider using JavaScript's [`Math.random()`](https://www.w3schools.com/js/js_random.asp).
- Start with the ID of `1` if you're having trouble creating a random ID between 1 - 6 (current total number of content items). OR fetch all the content objects and display the first item in the array.

**YOUR NOTES**
```

```


## Deliverable 2: "Show random picture" button

**When a user clicks the "Show random picture" button**, new random content should be displayed. If you're having trouble with creating the random ID again, challenge yourself to come up with another work around.

**YOUR NOTES**
```

```

## Deliverable 3: "Like" button

**When a user clicks the "Show random picture" button**, the likes count of the currently displayed content should increase by 1 and should be persisted.

#### Some things to keep in mind:

- Consider using data attributes in order to uniquely identify which content object you are currently displaying to the user on the page

**YOUR NOTES**
```

```



## Deliverable 4: Add Content

**When a user submits the form to add content**, the new content should be persisted and should be displayed in the content slideshow section on the page.


**YOUR NOTES**
```

```

## Deliverable 5: Edit Content

**When a user submits the form to edit the currently displayed content**, the updates should persist and the update should also be reflected on the page. 


#### Some things to keep in mind:

- Make sure you're using the form *submit* event, not the *click* event.
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.

**YOUR NOTES**
```

```





