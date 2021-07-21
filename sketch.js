var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 10, {isStatic: false});
  
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);


}

function draw() {
  background("gray"); 
  bullet.shapeColor = color(255, 255, 255);
 
  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = 223;
  if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage > 10)
{
  wall.shapeColor = color(255, 0, 0);
}
if(damage < 10)
{
  wall.shapeColor = color(0,0,0);
}
}
bullet.display();
wall.display();
hasCollided();
  drawSprites();
}

function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet + bullet;
  wallLeftEdge = wall;
  if(bulletRightEdge >= wallLeftEdge)
{
  return true
}
return false;
}
