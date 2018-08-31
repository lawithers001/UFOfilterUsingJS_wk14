// // from data.js
// var tableData = data;

// // YOUR CODE HERE!

// // Load the Table:

// const inputData = data; // from the file addresswhatever js

// // Build the table
// function renderTable(input_data) {
//         input_data.forEach(element => {
//             let newTr = d3.select('table').append('tr')
//                 newTr.append('td').text(element.datetime)
//                 newTr.append('td').text(element.city)
//                 newTr.append('td').text(element.state)
//                 newTr.append('td').text(element.country)
//                 newTr.append('td').text(element.shape)
//                 newTr.append('td').text(element.durationMinutes)
//                 newTr.append('td').text(element.comments)              
//         })
// } // end renderTable

// renderTable(inputData) // render it from the global data variable


// function filterTable(e) {
//     e.preventDefault();
//     console.log(e.target.value)
    
//     var filter = e.target.value;
//     console.log(filter, 'IS THE FILTER')
//     let rows = document.getElementById("ufo-table").rows
    
//     for (var i = 0; i < rows.length; i++) {
//         var firstCol = rows[i].cells[0].textContent;
//         var secondCol = rows[i].cells[1].textContent;
// 		// Extend it here
//         if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
//             rows[i].style.display = "";
//         } else {
//             rows[i].style.display = "none";
//         }      
//     }
// }


// // Assumes the text input has an id called filterValue
// document.getElementById('filterValue').addEventListener('keyup', filterTable, false); 


var tableData = data;

function renderTable(filter_text){
   let newTr = d3.select("#ufo-table").append("tr")
   newTr.append("th").text(filter_text.datetime)
   newTr.append("th").text(filter_text.city)
   newTr.append("th").text(filter_text.state)
   newTr.append("th").text(filter_text.country)
   newTr.append("th").text(filter_text.shape)
   newTr.append("th").text(filter_text.durationMinutes)
   newTr.append("th").text(filter_text.comments)
   //return
}

tableData.forEach(x => {
   renderTable(x);
});

function filterTable(filter_value) {
   let rows = document.getElementById("ufo-table").rows

   for (var i = 0; i < rows.length; i++) {
       var firstCol = rows[i].cells[0].textContent;
       var secondCol = rows[i].cells[1].textContent;
       var thirdCol = rows[i].cells[2].textContent;
       var fourthCol = rows[i].cells[3].textContent;
       var fifthCol = rows[i].cells[4].textContent;
       var sixthCol = rows[i].cells[5].textContent;
       var seventhCol = rows[i].cells[6].textContent;
        // Extend it here
       if (firstCol.indexOf(filter_value) > -1 || secondCol.indexOf(filter_value) > -1 ||
           thirdCol.indexOf(filter_value) > -1 || fourthCol.indexOf(filter_value) > -1 ||
           fifthCol.indexOf(filter_value) > -1 || sixthCol.indexOf(filter_value) > -1 //||
           //seventhCol.indexOf(filter_value) > -1
   ) {
           rows[i].style.display = "";
       } else {
           rows[i].style.display = "none";
       }
   }
}

d3.select("#filter-btn").on('click', function() {
   d3.event.preventDefault();
   var input_val = d3.select('#datetime').node().value;
   console.log(input_val);
   filterTable(input_val);

})