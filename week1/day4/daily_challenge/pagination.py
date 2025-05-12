# Daily Challenge: Pagination
import math

class Pagination():
    def __init__(self, items=None, page_size=10):
        """
        Initializes the Pagination class with a list of items and a page size.
        """
        self.items = items if items is not None else []
        self.page_size = page_size # Number of items per page
        self.current_idx = 0 # Start at the first page
        self.total_pages = math.ceil(len(self.items) / self.page_size) # Calculate total pages
        
    def get_visible_items(self):
        """
        Returns the items on the current page.
        """
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        """
        Navigate to a specific page.
        """
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range.")
        self.current_idx = page_num - 1
        return self.get_visible_items()
    
    def first_page(self):
        """
        Navigate to the first page.
        """
        self.current_idx = 0
        return self.get_visible_items()
    
    def last_page(self):
        """
        Navigate to the last page.
        """
        self.current_idx = self.total_pages - 1
        return self.get_visible_items()
    
    def next_page(self):
        """
        Navigate to the next page.
        """
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self.get_visible_items()
    
    def previous_page(self):
        """
        Navigate to the previous page.
        """
        if self.current_idx > 0:
            self.current_idx -= 1
        return self.get_visible_items()

    def __str__(self):
        """
        Returns a string representation of the current page and its items.
        """
        return '\n'.join(str(item) for item in self.get_visible_items())

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)


print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(7)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Raises ValueError