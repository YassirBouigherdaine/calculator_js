const hist = document.getElementById('hist');
const res = document.getElementById('res');
const keyboard = Array.from(document.querySelectorAll('[data-button]'));

keyboard.map(button => {

    button.onclick = (e) => {

        switch (e.target.textContent) {
            case 'CE':
                hist.textContent = '';
                res.textContent = '';
                break;
            case '=':
                if (hist.textContent == '' && res.textContent != '') {

                    hist.textContent = res.textContent;
                    res.textContent = eval(hist.textContent);
                }
                else {
                    alert("Enter new numbers");
                }
                break;
            case 'C':
                if (res.textContent) {
                    hist.textContent = '';
                    res.textContent = res.textContent.slice(0, -1);
                }
                break;
            default:
                res.textContent += e.target.textContent;
        }
    };
});