from flask import request, make_response, Blueprint
import json
from .jumblesolver.src.anagramhelper import AnagramHelper
from .jumblesolver.src.utils.fileutils import readDictionaryFile

# Create Two Anagram solvers, one for each of the valid word lists
pathToCorncobWords = "./dictionaries/corncob_lowercase.txt"
pathToWiki100KWords = "./dictionaries/wiki-100k.txt"
corncobWordList = readDictionaryFile(pathToCorncobWords)
wiki100kwords = readDictionaryFile(pathToWiki100KWords)
corncobAnagramHelper = AnagramHelper(corncobWordList)
wikiAnagramHelper = AnagramHelper(wiki100kwords)

anagrams = Blueprint("anagrams", __name__, url_prefix="/api")

@anagrams.route('/get-anagrams', methods=["GET"])
def get_anagrams():
    """
    Define an api route to get the anagrams of a query word from one of the two 
    available installed dictionaries.
    An example request would be /api/get-anagrams?query=dog&dictionary=corn
    """
    bad_response = make_response(json.dumps("Invalid Request"))
    bad_response.status = 400
    
    if request.method != "GET":
        bad_response

    args = request.args

    if args['dictionary'] is None or args['query'] is None:
        print(args)
        print("missing a key")
        return bad_response

    if args['dictionary'] == "corn":
        anagrams = corncobAnagramHelper.GetAnagramsandSubAnagrams(args['query'])
    elif args['dictionary'] == "wiki":
        anagrams = wikiAnagramHelper.GetAnagramsandSubAnagrams(args['query'])
    response = make_response(json.dumps(anagrams))
    response.content_type = 'application/json'
    return response

@anagrams.route('/api/get-word-list', methods=["GET"])
def get_word_list():
    """
    Define an api route to get the word list of a specific dictionary.
    An example request would be /api/get-word-list?dictionary=corn
    """
    if request.method != "GET":
        response = make_response(None)
        response.status = "400"
        return response
    args = request.args
    if args['dictionary'] == "corn":
        wordList = corncobAnagramHelper.wordList
    elif args['dictionary'] == "wiki":
        wordList = wikiAnagramHelper.wordList
    response = make_response(json.dumps(wordList))
    response.content_type = 'application/json'
    return response
