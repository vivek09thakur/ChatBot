from django.shortcuts import render, redirect
from .chatbot import Jern

bot = Jern('./chatbot_app/dataset/intents.json')


def chatbot_view(request):

    try :
        if request.method == 'POST':
            message = request.POST.get('message', '').strip()

            if message:
                response = bot.generate_response(message)
                history = request.session.get('history', [])
                history.append({'message': message, 'response': response})
                request.session['history'] = history

                # Redirect to a new URL after processing the form
                return redirect('home')

            if 'delete_history' in request.POST:
            # Delete the history if the delete button is clicked
                del request.session['history']
                return redirect('home')

        # If the request method is not POST, return the current history without generating a response
        history = request.session.get('history', [])
        response = None
        return render(request, 'chatbot_app/index.html', 
                      {'history': history, 'response': response})
    except Exception:
        return redirect('home')
