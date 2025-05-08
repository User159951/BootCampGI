from datetime import datetime

birth_input = input("Enter your birthdate (DD/MM/YYYY): ")
birth_date = datetime.strptime(birth_input, "%d/%m/%Y")

today = datetime.today()
age = today.year - birth_date.year

if (today.month, today.day) < (birth_date.month, birth_date.day):
    age -= 1


candles = int(str(age)[-1])
candles_str = "i" * candles
space_padding = (11 - len(candles_str)) // 2
candles_line = " " * space_padding + "_" + candles_str + "_" + " " * space_padding


cake = f"""
   {candles_line}
  |:H:a:p:p:y:|
__|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
"""

print(cake)