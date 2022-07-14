# A bit of a circular import, but because the app is small:
# First, create the app using the 2 lines below
from flask import Flask
from flask_cors import CORS
from .jumblesolver.src.anagramhelper import AnagramHelper
from .utils.fileutils import readDictionaryFile
app = Flask(__name__)
CORS(app)

# Create Two Anagram solvers, one for each of the valid word lists
pathToCorncobWords = "./flaskr/dictionaries/corncob_lowercase.txt"
pathToWiki100KWords = "./flaskr/dictionaries/wiki-100k.txt"
corncobWordList = readDictionaryFile(pathToCorncobWords)
wiki100kwords = readDictionaryFile(pathToWiki100KWords)
corncobAnagramHelper = AnagramHelper(corncobWordList)
wikiAnagramHelper = AnagramHelper(wiki100kwords)

# Import all of the python files need from the directory name
# These files can in turn import app from the __init__.py file
# and therefore add routes and methods

from flaskr import anagrams

if  __name__ == "__main__":
    app.run(debug=True)