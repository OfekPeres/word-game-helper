# Todo
- publish svelte app to github pages



# Website
The live project can be found here: https://ofekperes.github.io/word-game-helper/
The website is a user friendly way to find anagrams :)


# Finding Anagrams from the command line

If you are interested in testing out the tool from the command line, open up this repo in your favorite terminal and navigate to backend/api/jumblesolver.

From this directory, you can run:

```bash
python main.py <path_to_dictionary_file> <query_word>

# For example, to find the anagrams and subanagrams for the
# word "dog" in the corncob lowercase dictionary file, run:

python main.py ../../dictionaries/corncob_lowercase.txt dog
```
Note that all of the dictionary files are stored in the backend/dictionaries directory, feel free to add a new dictionary there.


# Algorithm Analysis
Let's define a few things.
Let n be the number of words in a given dictionary file and k be the length of any individual word. For the sake of analysis we can treat k as either the worst case (longest word) or the average length of a word in the given dictionary

## Finding anagrams
I was able to find all of the *anagrams* in n*(klogk + k) time. 
I did this by:
- Creating an empty dictionary mapping from a string to a list of strings.
- Iterating through the entire word list
- For each word, sorting the letters in the word lexographically
- Use the sorted word as a key in the dictionary and append to that key's value the original word
- As a preprocessing step for finding sub-anagrams, I also compute the frequency of each character in every word in the dictionary. This takes linear time in the size of the word.

At the end of this loop, I can find any word's anagrams in constant time by sorting the characters in the word and looking up the sorted word in the dictionary I created.

## Finding sub-anagrams
To find a single word's sub-anagram takes, at worst n*k^2 time.

- First, I check if I have already searched for the sub-anagrams for this word and cached the results.
- If results are not cached, I find the frequency of each character in the query word.
- Next, I iterate through all of the words with a length strictly shorter than the query word as words that are the same length would be proper anagrams and have already been found. Longer words are not valid sub-anagrams.
- For each of the shorter words, I loop over all of their characters, check if that character exists in the query word, and that the query word has a higher count of that character than the shorter word. If both of these conditions are true, then the shorter word is a sub-anagram.

An example of this is the word dog. Dog has 1 of each d, o, and g. The word do has one d, and one o. Since dog has at least that many letters, the word "do" is a valid subanagram.
However, the word "boo" is not valid because as soon as I check the letter "b", it does not exist in my frequency count of the original word, so I can safely move on to the next word.

# How it's Built

This project is composed of two main parts, a svelte-kit based front-end application to allow a user to interactively query for anagrams and subanagrams, and a flask based backend server that runs the python code described above to solve for anagrams.





# Running the app locally

## Svelte - the frontend
Make sure you are using the latest version of node (svelte is fairly new and doesn't work on older versions of node)

Once you've cloned the project and navigated into the frontend directory, use `npm install` to install of the required packages (or `pnpm install` or `yarn`).

To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# If you want to see the code changes reflected live on your 
# mobile device, make sure that your computer and phone are 
# connected to the same wifi network
# and instead run the following command
npm run dev -- --host 
```

Note 1: If you want to run the application locally, you will need to define an .env.development file and add to it the following variable:
```bash
# This is the base address for the locally running python 
# flask server
VITE_PUBLIC_BASE_PATH=http://localhost:5000
```

Note 2: If you want to see the app on your phone, you will need to find your computer's ip address which should be displayed in the terminal window where you typed the npm run dev command, but if not, on mac you can find the ip address under advanced wifi settings. Next, navigate in your phone's browser to `http://<computer_ip_address>:<port_of_svelte_app>`.
## Flask - the backend
Once you have cloned the repository and navigated to the backend directory...
```bash
cd backend
```

Make sure you are using python 3.9 or higher. I personally like anaconda for managing python and package versions but use your manager of choice.

In anaconda you can create an environment with the following commands:
```
conda create --name <name_of_environment>
i.e.
conda create --name backend
```
Activate the environment with:

```
conda activate <name_of_environment>
i.e
conda activate backend
```
Last, install pip using:

```
conda install pip
```

Once you have created your virtual environment

Install all of the requirements in the requirements folder

You can use the provided makefile:

```bash
make develop
```

or manually with:
```bash
pip install -r requirements/common.txt
pip install -r requirements/develop.txt
```

Run the local server with:
```
FLASK_APP=api FLASK_ENV=development flask run
```

The app should start on localhost:5000


If you want to run the app in production mode, you can use the makefile to run the startup script which will spin up a gunicorn web server to better handle traffic:

```bash
make start
```


# Deploying

## Containers
Initially, I planned on deploying the backend by containerizing it and sending it to heroku. While I was able to get the container to build and run locally, heroku does not support the way podman builds  images and I therefore did not actually use a container to deploy.

If you have docker or podman installed locally, you can build the image with:

```bash
podman build . -t flask-app
```

and run it with 

```bash
podman run -t -p 8080:8080 flask-app
```

This blog post was helpful in understanding how to put the pieces together: https://mark.douthwaite.io/getting-production-ready-a-minimal-flask-app/



## Flask App on heroku
My initial plan was to deploy my app as a docker container. This ended up not working out because docker did not play well with my mac. I got everything working locally with podman, a docker alternative, but when I went to deploy it to heroku, heroku was unable to understand the format of the podman image. A touch of searching revealed that this is a known issue with heroku. I could have deployed to an alternative cloud provider but heroku hosts some of my other applications for free and I wanted to give it another chance.

Instead, I deployed my actual repo to heroku and had it build and run my flask app with gunicorn. There are a few caveats that I'll mention in the "stuff I learned section"


## Svelte App on Github Pages
To deploy the svelte app to github pages, I had to modify the svelte.config.js file to include the static adapter and update the kit.prerender.default value to true. I also had to add a .nojekyll file to the static directory so github knows not to use the jekyll static site generator.

When the app is built, `npm run build`, the output is all placed in the docs folder. GitHub is able to pick a website out of the docs directory, but only if it is as the root level. So, I appended a `mv` command to run after the build is complete to move the docs directory one level up.


# Stuff I Learned

## About Heroku
Heroku is verrrryyyyy picky. You have to deploy a repo whose code is at the root, so my monorepo with both the frontend and backend was not acceptable. To get around this, I pushed only the backend directory to heroku with the following command:

```bash
git subtree push --prefix backend heroku master
```

Furthermore, heroku identifies projects as Python projects by the existance of a requirements.txt file at the root. When I put my 2 requirement files in the requirements directory, heroku was unpleased. That was fixed by adding a "production" requirements.txt file at the "root" level of the backend directory.

Last, the Procfile also has to be at the "root" level of the backend directory.
