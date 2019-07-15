<button onclick="multiplication_table()">Add multiplication table</button>

<script>
function multiplication_table()
{
  var x = 1;
  var y = 1;
  var text = "";
  for(x <= 12)
  {
    for(y < = 12)
    {
      text += x * y;
      y++;
    }
    x++;
    text = "";
  }
}
</script>
