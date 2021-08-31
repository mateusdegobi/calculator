class CalcController {
    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
    }

    // Método inicializador
    initialize() {
        // Não deixar a calculadora iniciar em branco
        this.setDisplayDateTime();

        // Atualizar a data e a hora por segundo
        let interval = setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    // Setar a data e hora no display da calculadora
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'short',
            'year': 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this._currentDate = value;
    }

}