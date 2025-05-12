# Exercise 1: Bank Account

class BankAccount():
    """A class representing a bank account."""
    def __init__(self, username, password, balance ,authenticated=False):
        self.username = username
        self.password = password
        self.authenticated = authenticated
        self.balance = balance
    
    def deposit(self, amount):
        """Deposit money into the account."""
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise Exception("Deposit amount must be positive.")
        self.balance += amount
        return f"Deposited {amount}. New balance: {self.balance}"

    def withdraw(self, amount):
        """Withdraw money from the account."""
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise Exception("Withdraw amount must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient funds.")
        self.balance -= amount
        return f"Withdrew {amount}. New balance: {self.balance}"
        
    def authenticate(self, username, password):
        """Authenticate the user."""
        if self.username == username and self.password == password:
            self.authenticated = True
            return "Authentication successful."
        else:
            return "Authentication failed."



class MinimumBalanceAccount(BankAccount):
    """A class representing a bank account with a minimum balance requirement."""
    def __init__(self, username, password, balance, min_balance=0):
        super().__init__(username, password, balance)
        self.min_balance = min_balance
    
    def withdraw(self, amount):
        """Withdraw money from the account with a minimum balance check."""
        try:
            if amount > 0 and (self.balance - amount) >= self.min_balance:
                self.balance -= amount
                return f"Withdrew {amount}. New balance: {self.balance}"
            elif amount > self.balance:
                return "Insufficient funds."
            elif (self.balance - amount) < self.min_balance:
                return f"Cannot withdraw. Minimum balance of {self.min_balance} required."
        except TypeError:
            return "Invalid amount. Please enter a valid amount."
    
class ATM:
    def __init__(self, account_list, try_limit):
        if not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("All accounts must be instances of BankAccount or its subclasses.")
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try limit. Defaulting to 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- ATM Main Menu ---")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option: ")

            if choice == '1':
                username = input("Username: ")
                password = input("Password: ")
                self.log_in(username, password)
            elif choice == '2':
                print("Goodbye!")
                break
            else:
                print("Invalid choice. Try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            if account.username == username and account.password == password:
                account.authenticate(username, password)
                print("Login successful.")
                self.show_account_menu(account)
                return

        self.current_tries += 1
        print("Login failed.")
        if self.current_tries >= self.try_limit:
            print("Max login attempts reached. Shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\n--- Account Menu ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select an option: ")

            if choice == '1':
                amount = int(input("Amount to deposit: "))
                try:
                    print(account.deposit(amount))
                except Exception as e:
                    print(e)
            elif choice == '2':
                amount = int(input("Amount to withdraw: "))
                try:
                    print(account.withdraw(amount))
                except Exception as e:
                    print(e)
            elif choice == '3':
                print("Logging out...")
                break
            else:
                print("Invalid choice.")

# Example usage
if __name__ == "__main__":
    account1 = BankAccount("user1", "pass1", 1000)
    account2 = MinimumBalanceAccount("user2", "pass2", 2000, 500)

    atm = ATM([account1, account2], 3)