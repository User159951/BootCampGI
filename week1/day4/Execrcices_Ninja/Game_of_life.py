import time
import os
from copy import deepcopy

class Cell:
    def __init__(self, alive=False):
        self.alive = alive

    def __repr__(self):
        return '█' if self.alive else ' '

class Grid:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = [[Cell() for _ in range(cols)] for _ in range(rows)]
        if initial_state:
            self.set_initial_state(initial_state)

    def set_initial_state(self, initial_state):
        for r, c in initial_state:
            if 0 <= r < self.rows and 0 <= c < self.cols:
                self.grid[r][c].alive = True

    def get_neighbour_count(self, row, col):
        directions = [(-1, -1), (-1, 0), (-1, 1),
                      ( 0, -1),          ( 0, 1),
                      ( 1, -1), ( 1, 0), ( 1, 1)]
        count = 0
        for dr, dc in directions:
            nr, nc = row + dr, col + dc
            if 0 <= nr < self.rows and 0 <= nc < self.cols:
                if self.grid[nr][nc].alive:
                    count += 1
        return count

    def next_generation(self):
        new_grid = deepcopy(self.grid)
        for r in range(self.rows):
            for c in range(self.cols):
                live_neighbors = self.get_neighbour_count(r, c)
                if self.grid[r][c].alive:
                    if live_neighbors < 2 or live_neighbors > 3:
                        new_grid[r][c].alive = False
                else:
                    if live_neighbors == 3:
                        new_grid[r][c].alive = True
        self.grid = new_grid

    def display(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        for row in self.grid:
            print(' '.join(str(cell) for cell in row))
        print()

    def is_stable(self, previous_state):
        return previous_state == [[cell.alive for cell in row] for row in self.grid]

class GameOfLife:
    def __init__(self, rows, cols, initial_state, max_generations=100):
        self.grid = Grid(rows, cols, initial_state)
        self.max_generations = max_generations

    def run(self):
        prev_state = None
        for gen in range(self.max_generations):
            current_state = [[cell.alive for cell in row] for row in self.grid.grid]
            if prev_state == current_state:
                print(f"Stable configuration reached at generation {gen}.")
                break
            self.grid.display()
            self.grid.next_generation()
            prev_state = current_state
            time.sleep(0.3)

# Example Initial States
GLIDER = [(1, 2), (2, 3), (3, 1), (3, 2), (3, 3)]
BLOCK = [(1, 1), (1, 2), (2, 1), (2, 2)]
BLINKER = [(1, 2), (2, 2), (3, 2)]

# Run the Game
game = GameOfLife(rows=10, cols=10, initial_state=GLIDER, max_generations=50)
game.run()
