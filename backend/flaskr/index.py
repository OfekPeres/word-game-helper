from flask import Flask
from flask_cors import CORS
from flaskr.jumblesolver.src.anagramhelper import AnagramHelper
from .jumblesolver.src.utils.fileutils import readDictionaryFile

# First, create the app using the 2 lines below
app = Flask(__name__)
CORS(app)

# Create Two Anagram solvers, one for each of the valid word lists
pathToCorncobWords = "./flaskr/dictionaries/corncob_lowercase.txt"
pathToWiki100KWords = "./flaskr/dictionaries/wiki-100k.txt"
corncobWordList = readDictionaryFile(pathToCorncobWords)
wiki100kwords = readDictionaryFile(pathToWiki100KWords)
corncobAnagramHelper = AnagramHelper(corncobWordList)
wikiAnagramHelper = AnagramHelper(wiki100kwords)


# Import the API routes 
from flaskr import anagrams

if  __name__ == "__main__":
    app.run(debug=True)