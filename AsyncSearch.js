// ------> CHECK SHOPPINGLIST app (the one on (mine) async weather app) on how to choose a single item

function searchFunction() {
  let input, filter, ul, li, item, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("stateList");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    item = li[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().includes(filter)) {
      //the variable below automatically becomes global if I don't specify declaration
      //- it's as if I used var. So this is bad implementation. Maybe declare at top
      innerItem1 = li[i];
      // Displays list items that are a match, and nothing if no match
      //explanation for line below -> https://stackoverflow.com/questions/7420109/what-does-style-display-actually-do
      //this empty string resets the element in css, causing it to re-appear (in case it is blocked by something, such as "none")
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }

    document
      .getElementById("stateList")
      .addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "LI") {
          document.getElementById("displayScreenCenter").innerHTML =
            innerItem1.innerText;
        }
      });
    //the above lines and the commented out ones above them do the same thing -
    //get a specific LI elemenet clicked (without adding id to each one).
  }
}
