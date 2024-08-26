import random
computer_choises = ["rock", "paper", "scissors"]
computer_choise = ""
player_choise = input("rock, paper or scissors:")
rand_idx = random.randrange(len(computer_choises))
computer_choise = computer_choises[rand_idx]
print(computer_choise)

if computer_choise == player_choise:
    print("it a tei")
elif player_choise == "rock":
    if computer_choise == "scissors":
        print("you win")
    else:
        print("you loss")
elif player_choise == "paper":
    if computer_choise == "scissors":
        print("you loss")
    else:
        print("you win")
elif player_choise == "scissors":
    if computer_choise == "rock":
        print("you loss")
    else:
        print("you win")
