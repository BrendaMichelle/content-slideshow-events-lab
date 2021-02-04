# JS Event Handling Practice

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

In this challenge, we're going to be working on a site that allows our user to view random content. For the bored users out there! We're going to be using data from an array of objects inside the `data.js` file. We're going to give our users the ability to:

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
In global scope, define a variable currentImage to keep track of the currentImage - when the page first loads, the currentImage is an object full of null values
Write a method renderImage to populate appropriate methods in the contentContainer according to whatever the currentImage is
Write a method loadRandomImage that defines an array of possibleImages (exclusive of the currentImage, if there is one) and picks a random image from possibleImages using Math.random
Finally, once a random image is chosen, call renderImage to update the DOM
```


## Deliverable 2: "Show random picture" button

**When a user clicks the "Show random picture" button**, new random content should be displayed.

**YOUR NOTES**
```
Because of the way loadRandomImage is defined, it can also be used to show a user a randomImage
When the page initially loads, it will pick from all images in contentArray because possibleImages filters out the currentImage (i.e., does nothing when currentImage.id === null)
After the page initially loads (i.e., when a user clicks the random image button), it will filter the currentImage out of the array of possibleImages - ensuring the user never sees the same image twice in a row
```

## Deliverable 3: "Like" button

**When a user clicks the "Show random picture" button**, the likes count of the currently displayed content should increase by 1 and should be updated in the array. The likes won't persist (if you refresh the page, they'll reset to their original value) - we'll add persistence in a future challenge. Consider using a dataset attribute to store the ID of the content object on the element.

#### Some things to keep in mind:

- Consider using dataset attributes in order to uniquely identify which content object you are currently displaying to the user on the page

**YOUR NOTES**
```
Increments currentImage.likes by one, then calls renderImage to update the updated currentImage's display in the DOM
```



## Deliverable 4: Add Content

**When a user submits the form to add content**, the new content should be added to the `contentArray` array and should be displayed in the content slideshow section on the page.

The data won't persist (when you refresh the page, the new content won't be available anymore) - we'll see how to fix this later on. For now, focus on getting the new content on the page when the form is submitted!

**YOUR NOTES**
```
Prevent the default behavior of an addForm submission (i.e., reloading the page)
Define id, photo, description and likes according to the user's input, then update currentImage with an object defined using shorthand and .push( currentImage ) onto contentArray so it shows up (possibly) when a user asks to see a random image
Finally call renderImage to display the new currentImage on the DOM
```

## Deliverable 5: Edit Content

**When a user submits the form to edit the currently displayed content**, the content that is currently displayed on the page should be updated with the information from the user input in the `contentArray` and the update should also be reflected on the page. 

The data won't persist (when you refresh the page, the content won't have the updates anymore) - we'll see how to fix this later on. For now, focus on getting the new content on the page when the form is submitted!

#### Some things to keep in mind:

- Make sure you're using the form *submit* event, not the *click* event.
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.

**YOUR NOTES**
```
Prevent the default behavior of an editForm submission (i.e., reloading the page)
pdate currentImage with values according to a user's entries in the editForm input fields
Finally call renderImage to display the newly updated currentImage on the DOM
```
