# JS Mini Challenge: Event Handling

## Instructions

Fork this repo, then run `git clone` to download your fork locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.

## Assignment

In this challenge, we're going to be working on a site that allows our user to view random content. For the bored users out there! We're going to give our users the ability to:

- View some intitial random content on page load
- Click on the "show random picture" button to view random content from our `contentArray` array
- 'Like' content
- Submit content
- Edit the currently displayed content

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Intitial random content on page load

**When a user loads the page**, the page should display some random content on the page including the image, description, and number of likes. 

#### Some things to keep in mind:
- For coming up with a random number to use as the index of the array (to get a random content object to display), consider using JavaScript's [`Math.random()`](https://www.w3schools.com/js/js_random.asp)

**YOUR NOTES**
```

```


## Deliverable 2: "Show random picture" button

**When a user clicks the "Show random picture" button**, new random content should be displayed.

**YOUR NOTES**
```

```

## Deliverable 3: "Like" button

**When a user clicks the "Show random picture" button**, the likes count of the currently displayed content should increase by 1 and should be updated in the array. The likes won't persist (if you refresh the page, they'll reset to their original value) - we'll add persistence in a future challenge. Consider using a dataset attribute to store the ID of the content object on the element.

#### Some things to keep in mind:

- Consider using dataset attributes in order to uniquely identify which content object you are currently displaying to the user on the page

**YOUR NOTES**
```

```



## Deliverable 4: Add Content

**When a user submits the form to add content**, the new content should be added to the `contentArray` array and should be displayed in the content slideshow section on the page.

The data won't persist (when you refresh the page, the new content won't be available anymore) - we'll see how to fix this later on. For now, focus on getting the new content on the page when the form is submitted!

**YOUR NOTES**
```

```

## Deliverable 5: Edit Content

**When a user submits the form to edit the currently displayed content**, the content that is currently displayed on the page should be updated with the information from the user input in the `contentArray` and the update should also be reflected on the page. 

The data won't persist (when you refresh the page, the content won't have the updates anymore) - we'll see how to fix this later on. For now, focus on getting the new content on the page when the form is submitted!

#### Some things to keep in mind:

- Make sure you're using the form *submit* event, not the *click* event.
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.

**YOUR NOTES**
```

```





