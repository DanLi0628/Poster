let slider1;

function setup(){
    createCanvas(550,800);
}

function draw(){
    background("#314286");
//circles
    fill('#DBB447');
    circle(350,490,30);
    circle(230,495,18);
    circle(100,460,18);
    circle(50,350,18);
    triangle(40,370,25,390,50,395);
    triangle(40,370,20,410,49,415);
    triangle(40,370,18,430,47,435);
    circle(110,290,13);
    circle(140,80,18);
    circle(180,0,10);
    circle(230,80,8);
    circle(320,100,13);
    circle(420,50,18);
    circle(300,450,10);
    circle(170,480,10);
    circle(500,400,10);
    circle(490,300,20);
    circle(520,260,10);
    circle(450,200,10);
    circle(70,230,10);
    circle(200,160,10);
    circle(70,700,8);
    circle(120,650,10);
    circle(170,670,17);
    circle(250,660,8);
    circle(310,690,10);
    circle(350,675,8);
    circle(380,640,18);
    circle(450,670,10);

//merry
    textAlign(LEFT);
    textFont('Chalkboard');
    textSize(60);
    fill('white');
    stroke("gold");
    strokeWeight(3);
    text("Merry",200,200);
//christmas
    textAlign(LEFT);
    textFont('Chalkboard');
    textSize(65);
    fill('white');
    stroke("gold");
    strokeWeight(3);
    text("Christmas",140,300);
//join party
    textAlign(LEFT);
    textFont('Chalkboard');
    textSize(17);
    fill('white');
    noStroke();
    strokeWeight(3);
    text("Come and join us!",210,330);
//details
    stroke('white');
    strokeWeight(2.5);
    line(230,550,230,600);
    line(125,600,425,600)
//7pm
    textAlign(LEFT);
    textFont('Comic Sans MS');
    textSize(15);
    fill('white');
    noStroke();
    strokeWeight(3);
    text("7 P M.",130,570);
//sat
    textAlign(LEFT);
    textFont('Comic Sans MS');
    textSize(15);
    fill('white');
    noStroke();
    strokeWeight(3);
    text("SATURDAY",130,595);
//rsvp
    textAlign(LEFT);
    textFont('Comic Sans MS');
    textSize(20);
    fill('white');
    noStroke();
    strokeWeight(3);
    text("R S V P",250,570);
//name
    textAlign(LEFT);
    textFont('Comic Sans MS');
    textSize(13);
    fill('white');
    noStroke();
    strokeWeight(2);
    text("name@yourmail.com",250,590);
//address
    textAlign(LEFT);
    textFont('Comic Sans MS');
    textSize(13);
    fill('white');
    noStroke();
    strokeWeight(2);
    text("Add your address here",200,620);
//date
    noStroke();
    rect(125,500,300,50);
    textAlign(LEFT);
    textFont('GILL SANS');
    textSize(30);
    fill('#314286');
    noStroke();
    text(" 2 5    D E C     2 0 2 0",130,537);

   


}