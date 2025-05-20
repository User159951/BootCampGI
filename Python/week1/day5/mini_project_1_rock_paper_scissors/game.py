class Game():
    """A class to represent a game of Rock, Paper, Scissors."""
    def __init__(self):
        pass

    def get_user_item(self):
        """Get the user item for the game.
        rock / paper / scissors
        keep asking until the user enters a valid item
        return the user item
        """

        item = input("Enter your item (rock, paper, scissors): ").lower()
        while item not in ["rock", "paper", "scissors"]:
            print("Invalid item. Please try again.")
            item = input("Enter your item (rock, paper, scissors): ").lower()
        return item
    
    def get_computer_item(self):
        """Get the computer item for the game
        rock / paper / scissors
        return the computer item
        """
        import random
        items = ["rock", "paper", "scissors"]
        item = random.choice(items)
        return item
    
    def get_game_result(self, user_item, computer_item):
        """Get the game result.
        win / lose / draw
        return the game result
        """

        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "paper" and computer_item == "rock") or \
             (user_item == "scissors" and computer_item == "paper"):
            return "win"
        else:
            return "lose"
    
    def play(self):
        """Play the game.
        get the user item
        get the computer item
        get the game result
        print the game result
        """
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        
        print(f"You selected: {user_item}, The computer selected: {computer_item}, You {result}!")
        return result

if __name__ == "__main__":
    game = Game()
    game.play()