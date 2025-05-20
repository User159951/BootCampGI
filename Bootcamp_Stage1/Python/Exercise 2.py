test_value = [10, 1, 2]

for val in test_value:
    print(f"human_years = {val}")

    if val == 1:
        cat_years = dog_years = 15
    elif val == 2:
        cat_years = dog_years = 15 + 9
    else:
        cat_years = 15 + 9 + (val - 2) * 4
        dog_years = 15 + 9 + (val - 2) * 5
    
    print(f"#output: [{val}, {cat_years}, {dog_years}]")