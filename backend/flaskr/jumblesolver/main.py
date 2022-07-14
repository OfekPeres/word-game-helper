from src.anagramhelper import AnagramHelper
import sys

if __name__ == "__main__":

    # Parse command Line Arguments
    programName, filePath, targetWord = sys.argv
    
    # Read in the file
    file = None
    try:
        file = open(filePath, 'r')
        wordList = file.read().splitlines()
        file.close()
    except FileNotFoundError:
        print("The dictionary file ({filePath}), cannot be found. Please make sure it is saved in the right location".format(filePath))
        sys.exit()

    # Initialize the anagram helper and find all anagrams and subangrams
    anagramhelper = AnagramHelper(wordList)
    print(anagramhelper.GetAnagramsandSubAnagrams(targetWord))

