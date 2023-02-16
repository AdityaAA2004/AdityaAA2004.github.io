#Create a django web app to accept two numbers and add them?
def add(request):
    context = []
    form = InputForm(request.POST or None)
    if request.method == 'POST':
        form = InputForm(request.POST or None)
        if form.is_valid():
            cd = form.cleaned_data
            input1 = cd['x']
            input2 = cd['y']
            print(output)
            # You should see the number in your terminal
            context['output'] = output
            # remove return
    else:
        form = InputForm()

return render(request, 'home.html', context)


{{ output }}




#Source: https://stackoverflow.com/questions/52139953



