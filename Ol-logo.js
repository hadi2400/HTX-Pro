  function setup() {
  createCanvas(400, 400);
  console.log("hej fra setup");
}

function draw() {
  background(255, 255, 255); // jeg har sat baggrunden til hvid
  noFill(); // nofill gør så der ikke er fyld i midten af en figur
  stroke(226, 223, 21); // Den farver rundt om cirklen
  ellipse(100, 130, 40, 40); // ellipse commandoen former en cirkel og de to første tal er x, og y aksen og de to andre tal er størrelsen på cirklen
  stroke(21, 177, 233);
  ellipse(80, 107, 40, 40);
  stroke(0);
  ellipse(125, 107, 40 ,40);
  stroke(2, 222, 11);
  ellipse(150, 130, 40, 40);
  stroke(255, 0, 0);
  ellipse(170, 107, 40, 40);
  
  
  
  
  console.log("hej fra draw")
}
