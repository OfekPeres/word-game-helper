"""
This main script is built to help run the anagram helper tool from the 
command line.

Run it as follows:

python main.py <pathToDictionary> <query word>

If you are in the jumble solver directory in terminal, you can run:
python main.py ../dictionaries/corncob_lowercase.txt dog
"""
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

