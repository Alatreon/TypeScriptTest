class CreateContent
{
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    div: HTMLElement;
    timerDiv: number;
    incre: number;

    constructor(element: HTMLElement)
    {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        this.incre = 0;
        this.start();
    }

    start()
    {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 200);
        this.appendDiv();
    }

    appendDiv()
    {
        this.div = document.createElement('div');
        this.element.appendChild(this.div)
    }

    innerDiv(person:string)
    {
        if (this.incre <= 10) {
            this.div.innerHTML += person + this.incre + " ";
            this.incre++;
        }
        else
        {
            this.incre = 0;
        }
    }

    startAappendDiv()
    {
        this.timerDiv = setInterval(() => this.innerDiv("Hello World "), 2000);
    }

    stop()
    {
        clearTimeout(this.timerToken);
    }
}

window.onload = () => {
    let el: HTMLElement = document.getElementById('content');
    let createContent = new CreateContent(el);
    createContent.startAappendDiv();
};