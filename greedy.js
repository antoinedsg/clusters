
$(document).ready(function () {
  // Write code here which runs upon loading

});

//////////////////
function greedyElement() {
  var greedyElement;
  var b = document.getElementById("bValue").value;
  var c = document.getElementById("cValue").value;
  var d1 = document.getElementById("d1Value").value;
  var d2 = document.getElementById("d2Value").value;

  // If d1 and d2 are negative, the greedy element is a cluster monomial in the initial cluster
  if (d1 <= 0 && d2 <= 0) {
    var exponent1 = -d1;
    var exponent2 = -d2;

    // For rendering purposes, we distinguish the cases d1 =0, d2 = 0 and the rest
    if (d1 == 0 && d2 == 0) {
      greedyElement = 1;
    }
    else if (d1 == 0 && d2 < 0) {
      greedyElement = `x_2^{${-d2}}`;
    }
    else if (d1 < 0 && d2 == 0) {
      greedyElement = `x_1^{${-d1}}`;
    }
    else {
      greedyElement = `x_1^{${exponent1}} x_2^{${exponent2}}`;
    }
    
    // Add HTML to display the greedy element 
    document.getElementById("greedyElementOutput").innerHTML = "The greedy element at (\\(d_1,d_2\\)) = (" +d1 +"," + d2 +  ") is \\[" + greedyElement + ".\\]";
    // Ask MathJax to render the newly created code in LaTeX
    MathJax.typeset([greedyElementOutput]);
  }

  // In all other cases, the greedy element is not a cluster monomial in the initial cluster.
  else {
    document.getElementById("greedyElementOutput").innerHTML = "Currently not supported."
  }


}

