function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400)
    return "This one is on me!"
  if (distance > 2500)
    return "No can do."
  if (distance > 2000)
    return "I will gladly take your thirty bucks."

}


function ternaryCheckCity(city) {
  // Write your code here!
  if (city === "NYC")
    return "Ok, sounds good."
  else (city === "Pitsburgh")
    return "No go."


}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  if (tip === "generous")
    return "Thank you so much."
  else if (tip !== "generous")
    return "Thank you."
  else if (tip == "anything else")
    return "Bye."
}