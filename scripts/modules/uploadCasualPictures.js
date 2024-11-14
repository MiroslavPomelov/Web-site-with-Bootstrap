export function loadCasualPictures(goodKey) {
    let totalInfo = document.getElementsByClassName("row row-cols-1 row-cols-md-4 g-4");

    fetch(`http://localhost:36155/good-search/${goodKey}`)
      .then(responce => responce.json())
      .then(data => {
         for (let i = 0; i < data.length; i++) {
            let col = document.createElement('div');
            col.className = 'col';

            let card = document.createElement('div');
            card.className = 'card  h-100';

            let image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = `http://localhost:36155/good-cards/${data[i].Image}`;

            let descriptionBlock = document.createElement('div');
            descriptionBlock.className = 'card-body';

            let header = document.createElement('h5');
            header.className = 'card-title';
            header.textContent = data[i].Title;

            let paragraph = document.createElement('p');
            paragraph.className = 'card-text';
            paragraph.textContent = data[i].Description;

            let priceLine = document.createElement('p');
            priceLine.className = 'card-text';
            let price = data[i].Price;
            priceLine.textContent = `Цена: ${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB'})}`;


            let a = document.createElement('a');
            a.className = 'btn btn-primary';
            a.href = '#';
            a.textContent = "Подробнее";

            document.body.appendChild(col);
            col.appendChild(card);

            card.appendChild(image);

            descriptionBlock.appendChild(header);
            descriptionBlock.appendChild(paragraph);
            descriptionBlock.appendChild(priceLine);
            descriptionBlock.appendChild(a);

            card.appendChild(descriptionBlock);

            totalInfo[0].appendChild(col);
         }
      });
}


export function loadSpecialPicture(goodKey) {

   let container = document.getElementsByClassName('info');

      fetch(`http://localhost:36155/good-search/${goodKey}`)
        .then(responce => responce.json())
        .then(data => {
           
          let chapters = data[0].Description.split('\r\n');
          console.log(chapters);
          

          let image = document.createElement('img');
          image.className = 'img-fluid';
          image.src = `http://localhost:36155/good-cards/${data[0].Image}`;

              
          container[0].appendChild(image);

          let badgeCon = document.createElement('div');
          badgeCon.className = "d-flex justify-content-center mt-5";

          let header = document.createElement('h2');
          header.textContent = data[0].Title;

          let span = document.createElement('span');
          span.className = "badge text-bg-secondary";

          header.appendChild(span);

          badgeCon.appendChild(header);

          container[0].appendChild(badgeCon);

          let priceLine = document.createElement('p');
          priceLine.style.textAlign = 'center';
          priceLine.className = 'card-text';
          let price = data[0].Price;
          priceLine.textContent = `Цена: ${price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB'})}`;

          container[0].appendChild(priceLine);

          for (let i = 0; i < chapters.length; i+=3) {
              let head = document.createElement('h3');
              head.className = 'lead text-center mt-3';

              let mark = document.createElement('mark');
              mark.textContent = chapters[i];

              head.appendChild(mark);
              // head.textContent = chapters[i];
              let descr = document.createElement('p');
              descr.className = 'text-center';

              let innerText = document.createElement('em');
              innerText.textContent = chapters[i + 1];
              
              descr.appendChild(innerText);

              container[0].appendChild(head);
              container[0].appendChild(descr);
            }           
          }
        );
      }

export function searchGood() {

  let seacrhBox = document.getElementById('searchBox');
  let seacrhButton = document.getElementById('searchButton');


  seacrhButton.addEventListener('click', () => {
    

    fetch(`http://localhost:36155/good-search/${seacrhBox.value}`)
    .then(response => response.json())
    .then(data => localStorage.setItem('2', seacrhBox.value));
  });
}