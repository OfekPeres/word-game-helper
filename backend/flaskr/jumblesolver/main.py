from src.anagramhelper import AnagramHelper
import sys
from src.utils.fileutils import readDictionaryFile
if __name__ == "__main__":

    # Parse command Line Arguments
    programName, filePath, targetWord = sys.argv
    
    # Read in the file
    wordList = readDictionaryFile(filePath)

    # Initialize the anagram helper and find all anagrams and subangrams
    anagramhelper = AnagramHelper(wordList)
    print(anagramhelper.GetAnagramsandSubAnagrams(targetWord))

