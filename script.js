


const linkmenu = document.getElementsByClassName('menu')[0]

const hammenu = document.querySelector('.hamburger')



hammenu.addEventListener('click', () => {

   

  var links = document.getElementsByClassName("menu");

  Array.from(links).forEach((x) => {

    if (x.style.display == "none") {

      x.style.display = "block";

    } else {

      x.style.display = "none";

    }

  })

})


  const ctx = document.getElementById('myChart');
  
  new Chart(ctx, {
    type: 'doughnut',
    data: data = {
      
      datasets: [{
        label: 'My First Dataset',
        data: [29, 71],
        backgroundColor: [
          'teal',
          '#974a6d'
        ],
        hoverOffset: 4
      }]
    }
  });


  const ctx2 = document.getElementById('myChart2');
  new Chart(ctx2, {
    type: 'doughnut',
    data: data = {

      datasets: [{
        label: 'My second Dataset',
        data: [20, 80],
        backgroundColor: [
          'teal',
          '#974a6d'
        ],
        hoverOffset: 4
      }]
    }
  });

  const ctx3 = document.getElementById('myChart3');
  new Chart(ctx3, {
    type: 'doughnut',
    data: data = {
      
      datasets: [{
        label: 'My third Dataset',
        data: [12, 88],
        backgroundColor: [
          'teal',
          '#974a6d'
        ],
        hoverOffset: 1
      }]
    }
  });