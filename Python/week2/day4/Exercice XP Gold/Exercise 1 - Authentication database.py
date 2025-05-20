
users = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3"
}

logged_in = None

while True:
    print("\nEnter 'login' to log in, or 'exit' to quit.")
    choice = input("Choice: ").strip().lower()

    if choice == "exit":
        print("Exiting program.")
        break

    elif choice == "login":
        username = input("Enter username: ").strip()
        password = input("Enter password: ").strip()

        if username in users and users[username] == password:
            print("You are now logged in.")
            logged_in = username
        else:
            print("Invalid username or password.")

    else:
        print("Invalid choice. Please type 'login' or 'exit'.")

if logged_in:
    print(f"\nSession ended. User '{logged_in}' was logged in.")
else:
    print("\nSession ended. No user was logged in.")
