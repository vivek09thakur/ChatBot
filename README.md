[![Deploy with Vercel](https://vercel.com/button)](https://mlbot.vercel.app/)

# ChatBot

A Machine Learning ChatBot using Flask

# Getting Started
- [How it Works](#how-it-works)
- [Running Locally](#running-locally)
- [How to use this chatbot as a FAQ/Support/Helpdesk chatbot for your website](#how-to-use-this-chatbot-as-a-faq-support-helpdesk-chatbot-for-your-website)

## How it Works

This bot uses a cosine similarity to find the most similar prompt to the user's prompt and then returns the response to that prompt. The bot uses a pre-defined list of prompts and responses to generate the responses.

## Running Locally

- [ ] **Run Backend**

```bash
    # Clone the repository
    $ git clone <repo-url>
    # Navigate to the repository
    $ cd <repo-name>
    # Navigate to backend directory
    $ cd backend
    # Install the required packages
    $ pip install -r requirements.txt
    # Run flask api
    $ flask -app api/index.py run
```
- Then you'll be able to access the API at `http://localhost:3000/predict`
- Make sure to replace the `http://localhost:3000` with the correct URL in the frontend code

- [ ] **Run Frontend**

```bash
    # Navigate to the repository
    $ cd <repo-name>
    # Navigate to frontend directory
    $ cd frontend
    # Install the required packages
    $ npm install
    # Run the frontend
    $ npm run dev
```

## How to use this chatbot as a FAQ/Support/Helpdesk chatbot for your website
- Create a new json file in the `backend/` directory with the name `intents.json`
- Add data in your json with following structure:
```json
    {
        "prompt1": ["response1", "response2", "response3"],
        "prompt2": ["response1", "response2", "response3"],
        "prompt3": ["response1", "response2", "response3"],
    }
```
- Go to [backend/api/index.py](backend/api/index.py) and change the path of the `intents.json` file to the new file you created

 ```python 
    chatbot = ChatBot()
    chatbot.load_data(path='Intents.json')
    chatbot.train()
```

- Run the backend and frontend as mentioned in the [Running Locally](#running-locally) section
- You can now use the chatbot as a FAQ/Support/Helpdesk chatbot for your website