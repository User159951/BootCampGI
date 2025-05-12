# Call History

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages =[]

    def call(self, other_phone):
        print(f"Phone {self.phone_number} Called {other_phone.phone_number}")
        self.call_history.append(f"Phone {self.phone_number} Called {other_phone.phone_number}")

    def show_call_history(self):
        print("The Call History is:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to" : other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        print("Incoming Messages:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, other_number):
        print(f"Messages from {other_number}:")
        for msg in self.messages:
            if msg["from"] == other_number and msg["to"] == self.phone_number:
                print(msg)


phone1 = Phone("123-456")
phone2 = Phone("789-000")

phone1.call(phone2)
phone1.send_message(phone2, "Hey, how are you?")
phone2.send_message(phone1, "I'm good, thanks!")

phone1.show_call_history()
phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from("789-000")