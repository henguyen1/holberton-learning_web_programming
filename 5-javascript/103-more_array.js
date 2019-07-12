function even_only(){
  var array = [];

  for(var i = 0; i < 100; i++)
  {
    array[i] = i+1;
  }

  for(var x = 1; x<= 99; x+=2)
  {
    console.log(array[x]);
  }
}
