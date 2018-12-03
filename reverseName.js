function reverseName(fullName) {
  let splitted = fullName.split(" ");
  let reversed = splitted.reverse();
  let joined = reversed.join(", ");
  return joined;
}

reverseName("Micheal Scowfield");
