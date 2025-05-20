import psycopg2
import bcrypt

HOSTNAME = 'localhost'
USERNAME = 'admin'
PASSWORD = 'admin'
DATABASE = 'authentication_cli'
PORT = "5432"

connection = psycopg2.connect(
    host=HOSTNAME,
    user=USERNAME,
    password=PASSWORD,
    dbname=DATABASE,
    port=PORT
)
cursor = connection.cursor()


def read_user(username):
    """Read a user from the database by username."""
    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    return cursor.fetchone()


def write_user(username, password):
    """Write a new user to the database with a hashed password."""
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    cursor.execute(
        "INSERT INTO users (username, password) VALUES (%s, %s)",
        (username, hashed_password)
    )
    connection.commit()


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

        user = read_user(username)

        if user:
            stored_hash = user[2].encode()
            if bcrypt.checkpw(password.encode(), stored_hash):
                print("You are now logged in.")
                logged_in = username
            else:
                print("Incorrect password.")
        else:
            print("Username not found. Would you like to sign up? (yes/no)")
            if input().strip().lower() == "yes":
                while True:
                    new_username = input("Enter a new username: ").strip()
                    if read_user(new_username):
                        print("Username already exists. Try another.")
                    else:
                        break

                new_password = input("Enter a new password: ").strip()
                write_user(new_username, new_password)
                print("Registration successful. You can now log in.")

    else:
        print("Invalid choice. Please type 'login' or 'exit'.")

if logged_in:
    print(f"\nSession ended. User '{logged_in}' was logged in.")
else:
    print("\nSession ended. No user was logged in.")

cursor.close()
connection.close()
