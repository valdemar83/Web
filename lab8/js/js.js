const { from, interval, merge } = rxjs;
const { filter, map, flatMap, switchMap, share, tap } = rxjs.operators;


const symbols = [`MA`,
`MHK`,
`MLR`,
`WBS`,
`ZBH`,
`F`,
`RACE`
,`XIACF`];
const table = document.getElementById('main');
const info = document.getElementById('info');


document.querySelector('#token').addEventListener('click', () => {
    const token = document.querySelector('input').value;
    document.querySelector('input').value = '';
    document.querySelector('input').style.border = '1px solid springgreen'


    function collection(field) {
        const url = `` +
            `https://cloud.iexapis.com/stable/stock/market/batch` +
            `?symbols=${symbols.join()}` +
            `&types=quote` +
            `&filter=${field.join()}` +
            `&token=${token}`;
        return from(fetch(url).then(res => res.json()).catch(error => {
            console.error(error)
        }));
    }

    (function () {

        const updateInfo =
            merge(
                collection(['companyName', 'symbol', 'latestPrice', 'change']),
                interval(20000)
                    .pipe(
                        switchMap(() => collection(['latestPrice', 'change'])),
                        share()
                    )
            );



        for (let i = 0; i < symbols.length; i++) {
            const tr = document.createElement('tr');


            const NameOfCompany = document.createElement('td');
            const Symbol = document.createElement('td');
            const Price = document.createElement('td');
            const Change = document.createElement('td');

            tr.appendChild(NameOfCompany);
            tr.appendChild(Symbol);
            tr.appendChild(Price);
            tr.appendChild(Change);
            table.appendChild(tr);

            const columns = {
                'companyName': NameOfCompany,
                'symbol': Symbol,
                'latestPrice': Price,
                'change': Change
            };

            updateInfo
                .pipe(flatMap(res => Object.entries(res[symbols[i]]['quote'])))
                .subscribe(val => columns[val[0]].innerHTML = val[1]);
        }


        updateInfo
            .pipe(
                switchMap(() => interval(100))
            )
            .subscribe(val => {
                info.innerHTML = `Оновлено : ${(val * 0.1).toFixed(1)}секунд`;
            });

    })();
})

