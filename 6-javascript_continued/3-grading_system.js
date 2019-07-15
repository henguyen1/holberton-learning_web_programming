var num = process.argv[2];

if(num >= 95){
  console.log("You received an A+");
}
else if(num >= 90){
  console.log("You received an A"));
}
else if(num >= 85){
  console.log("You received a B+");
}
else if(num >= 80){
  console.log("You received a B");
}
else if(num >= 75){
  console.log("You received an C+"));
}
else if(num >= 70){
  console.log("You received a C");
}
else{
  console.log("You received a D");
}
