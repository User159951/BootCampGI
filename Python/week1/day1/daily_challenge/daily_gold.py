# Birthday Cake


user_dob = input("What is your birthday. Please use the format DD/MM/YYYY\n")
day, month, year = user_dob.split("/")

user_dob = datetime.datetime(int(year), int(month), int(day))
today = datetime.datetime.now()

user_age = today.year - user_dob.year

candles_number = user_age % 10

def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def print_cake(candle_count):
    candles = "i" * candle_count
    print(f"       ___{candles}___")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

print_cake(candles_number)

if is_leap_year(user_dob.year):
    print_cake(candles_number)