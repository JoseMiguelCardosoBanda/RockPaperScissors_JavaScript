# JavaScript Rock Paper Scissors Game

To run the code, enter in terminal "node game.js parameters_go_here".
The game can handle 3 to n parameters.

* For example "node game.js rock paper scissors lizard spock".

<img width="1917" height="1031" alt="image" src="https://github.com/user-attachments/assets/4d03c03e-6958-4c3d-a4a9-e3ab0d2c372c" />

* The game will show the options menu, listing the available movements, exit option and the help menu.
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/0b667f71-03f4-4be5-bcf7-771059e77a12" />

* Also there is a HMAC at the top of the options, this is used to validate the computer's move after the game ends.
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/a561c00a-bb40-4b6c-a6a6-1869e30d50e9" />

* By introducing "?" as the selected option, the help menu will display; it contents the win, lose and draw conditions of the game.
<img width="1919" height="1033" alt="image" src="https://github.com/user-attachments/assets/6b0292cb-b61b-4976-9804-bce4e2c31466" />

* After selecting a valid move, the result will show off, by showing also the computer's move.
<img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/49dec373-d40f-44b3-a450-1145659db8ce" />

* The final part includes a HMAC Key and an URL, this is used to validate that the computer didn't changed its move when the user made a choice.
By visiting the website, the computer's move and the HMAC Key will be needed to validate.
<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/b9a0f23a-059e-424b-aa45-0cdf946f7734" />

* Then, the resulting HMAC output will match with the HMAC generated when the game started.
<img width="1434" height="924" alt="HMAC_Comparison" src="https://github.com/user-attachments/assets/8ca0c0a8-046e-4a73-8a3b-f7343bdb062a" />
