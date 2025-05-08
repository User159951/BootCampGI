import random

def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(10, 22)
    elif season == "summer":
        return random.randint(20, 40)
    else:
        return random.randint(-10, 40)


# def main():
#     temp = get_random_temp()
#     print(f"The temperature right now is {temp} degrees Celsius")

#     if temp < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today")
#     elif 0 <= temp <= 16:
#         print("Quite chilly! Don’t forget your coat")
#     elif 16 <= temp <= 23:
#         print("its normal weather dw")
#     elif 24 <= temp <= 32:
#         print("thats a little hot")
#     elif 32 <= temp <= 40:
#         print("go to the beach man")
#     else:
#         print("idk whats going on")

# main()

def main():
    season = input("Please enter a season (winter, spring, summer, autumn): ")
    temperature = get_random_temp(season)
    print(f"The temperature right now in {season.capitalize()} is {temperature}°C.")

main()