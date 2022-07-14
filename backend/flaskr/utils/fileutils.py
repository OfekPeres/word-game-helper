import sys
def readDictionaryFile(filepath):
    """
    A helper method to read in a potential dictionary file from the input 
    filepath.

    Params:
        filepath: a string representing the path to the dictionary .txt file
    
    Returns:
        The list of strings representing the valid words in a dictionary.
    
    Throws:
        FileNotFoundError if the path to the dictionary is invalid. This error 
        gracefully caught and an error message is displayed to the user.
    """
    file = None
    try:
        file = open(filepath, 'r')
        wordList = file.read().splitlines()
        file.close()
    except FileNotFoundError:
        print("The dictionary file ({}), cannot be found. Please make sure it is saved in the right location".format(filepath))
        sys.exit()

    return wordList