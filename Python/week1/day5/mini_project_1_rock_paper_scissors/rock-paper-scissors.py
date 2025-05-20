from game import Game

def get_user_menu_choice():
    """Get the user menu choice for the game.
    g : Play a new game
    x : Show scores and exit
    keep asking until the user enters a valid choice"""
    choice = input("Enter your choice (g/x): ").lower()
    while choice not in ["g", "x"]:
        print("Invalid choice. Please try again.")
        choice = input("Enter your choice (g/x): ").lower()
    return choice

def print_results(result):
    """Print the game result.
    result is in the forme {'win': 0, 'lose': 0, 'draw': 0}
    """
    print("Game Results:")
    print(f"   You won: {result['win']} times")
    print(f"   You lost: {result['lose']} times")
    print(f"   You drew: {result['draw']} times")
    print("Thanks for playing!")

def main():
    """Main function to run the game.
    Play the game until the user chooses to exit.
    Show the scores when the user chooses to exit.
    """
    
    result = {'win': 0, 'lose': 0, 'draw': 0}
    while True:
        choice = get_user_menu_choice()
        if choice == "g":
            game = Game()
            game_result = game.play()
            if game_result == "win":
                result['win'] += 1
            elif game_result == "lose":
                result['lose'] += 1
            else:
                result['draw'] += 1
        else:
            print_results(result)
            break

if __name__ == "__main__":
    main()