from collections import defaultdict, Counter

class AnagramHelper:

    def __init__(self, wordList: list[str]) -> None:
        """
        Args:
            wordList: A list of strings representing the corpus of valid words 
        
        Returns:
            An instance of the AnagramHelper class

        """
        # Initialization
        # The list of valid words
        self.wordList: list[str]  = wordList
        # A dictionary mapping from a word whose letters are in sorted order to all
        # valid anagrams from the word list as well as the character frequency of each letter in the word
        self.sortedWordToAnagram: dict[str, dict[str, list[str]]] = defaultdict(lambda: {"anagrams": [], "letterCount": None})
        
        # A dictionary mapping from a word whose letters are in sorted order to all
        # subanagrams from the word list as well as whether or not this word has already been queried and cached
        self.sortedWordToSubAnagram: dict[str, dict[str, list[str]]] = defaultdict(lambda: {"subanagrams": [], "isCached": False})
        # A dictionary mapping from an integer representing the length of a word to all of the words in the words list of that length
        self.wordLenToWords: dict[int, list[str]] = defaultdict(list)

        self.__InitalizeDictionaries()




    def __AddWordToAnagramsDict(self, word) -> None:
        """
        Method to help initialize the anagram dictionary containing a mapping of
        each sorted word to all valid anagrams as well as the frequency of each
        character in that specific anagram

        
        Args:
            word: the string to be added
        Returns:
            None
        """
        sortedWord = "".join(sorted(word, key=str.lower))
        self.sortedWordToAnagram[sortedWord]["anagrams"].append(word)
        self.sortedWordToAnagram[sortedWord]["letterCount"] = Counter(sortedWord)

    def __AddWordToLenDict(self, word) -> None:
        """
        Method to help initialize the word length to words dictionary

        Args:
            word: the string to be added

        Returns:
            None
        """
        self.wordLenToWords[len(word)].append(word)


    def __InitalizeDictionaries(self) -> None:
        """
        Method to help faciliate the initialization of all of the helper
        dictionaries

        Args:
            None

        Returns:
            None
        """
        for word in self.wordList:
            self.__AddWordToAnagramsDict(word)
            self.__AddWordToLenDict(word)

    def __GetSubAnagrams(self, word):
        """
        A method to search for all subanagrams of the inputted word.

        Params:
            word: a string representing the query word
        
        Returns:
            A list of all found subanagrams
        
        """
        # Approach the subanagram problem via the frequency of letters approach
        # A word is a subanagram if it has a subset of the letters in the query
        # word (i.e. a smaller count of every letter than counts of letters of
        # the query word)
        charFreq = Counter(word)
        sortedWord = "".join(sorted(word, key=str.lower))

        # Check if the word has already been queried, if it has, don't recompute
        if self.sortedWordToSubAnagram[sortedWord]["isCached"]:
            return self.sortedWordToSubAnagram[sortedWord]["subanagrams"]
        # This nested for loop guarantees that only the words that are
        # shorter than the query word are even inspected as options for 
        # subanagrams
        for wordLen in range(1, len(word)):
            for shorterWord in self.wordLenToWords[wordLen]:
                sortedShorterWord = "".join(sorted(shorterWord, key=str.lower))
                shorterWordCharFreq = self.sortedWordToAnagram[sortedShorterWord]["letterCount"]
                shorterWordIsSubAnagram = True
                # Compare the character frequencies of the shorter word with the
                # query word frequencies
                for char, count in shorterWordCharFreq.items():
                    if char not in charFreq or count > charFreq[char]:
                        shorterWordIsSubAnagram = False
                        break
                if shorterWordIsSubAnagram:
                    self.sortedWordToSubAnagram[sortedWord]["subanagrams"].append(shorterWord)
        self.sortedWordToSubAnagram[sortedWord]["isCached"] = True
        return self.sortedWordToSubAnagram[sortedWord]["subanagrams"]

    def GetAnagramsandSubAnagrams(self, word: str) -> list[str]:
        """
        A method to find all anagrams and subangrams of a target word

        Params:
            word: A string whose anagrams need to be found

        Returns:
            A list of all found anagrams. The list will be empty if no 
            anagrams are found
        """
        subanagrams = self.__GetSubAnagrams(word)
        anagrams = self.sortedWordToAnagram[''.join(sorted(word, key=str.lower))]["anagrams"]
        allAnagrams = [*subanagrams, *anagrams]
        # Remove the target word from the list of all anagrams, if the target word existed in the original dataset
        if word in allAnagrams:
            allAnagrams.remove(word)
        return allAnagrams


