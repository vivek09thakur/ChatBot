[![Deploy with Vercel](https://vercel.com/button)](https://ml-based-chatbot.vercel.app)

# ML Based Chatbot

A Machine Learning based chatbot that can be used to answer questions and provide information to the user. The chatbot is built using the Flask framework and is deployed on Vercel using the Serverless Functions. The bot uses cosine similarity to find the most similar question to the user's question and then provides the answer to the user.

## Live at : [ml-based-chatbot.vercel.app](https://ml-based-chatbot.vercel.app)

## How it Works

The chatbot uses cosine similarity to find the most similar question to the user's question and then provides the answer to the user. The chatbot is built using the Flask framework and is deployed on Vercel using the Serverless Functions.

## Future Scope

- [ ] It can be used to answer questions FAQs of a website, company, or organization by training it on the FAQs.
- [ ] It can be used to provide information about a particular topic by training it on the information.
- [ ] It can be used to provide customer support by training it on the common queries and their answers.


## Running Locally

- Clone the repository
- Run Backend

```bash
    git clone <repo-url>
    cd Chatbot
    cd backend
    python -m venv env
    source env/bin/activate
    pip install -r requirements.txt
    flask run --port 3000
```
- Run Frontend : Open Index.html with Live Server

```bash
    cd Chatbot
    cd frontend
    code .
```

Your Flask application is now available at `http://localhost:3000`.

## Deployed on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://ml-based-chatbot.vercel.app)
