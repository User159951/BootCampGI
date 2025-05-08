data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def run_quiz(data):
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item['question'] + ' ').strip()
        if user_answer.lower() == item['answer'].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({
                'question': item['question'],
                'your_answer': user_answer,
                'correct_answer': item['answer']
            })

    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print("\nQuiz Results:")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}\n")

    if wrong_answers:
        print("Questions you answered incorrectly:")
        for wa in wrong_answers:
            print(f"Q: {wa['question']}")
            print(f"Your answer: {wa['your_answer']}")
            print(f"Correct answer: {wa['correct_answer']}\n")

    if incorrect > 3:
        print("You got more than 3 answers wrong. Would you like to play again?")

if __name__ == "__main__":
    correct, incorrect, wrong_answers = run_quiz(data)
    show_results(correct, incorrect, wrong_answers)
