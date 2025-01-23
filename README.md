Link - https://garuinja.github.io/workshop-task-9/

### Brief Account of Experimentation
- I wanted to to do something with moving rectangles like putting them on a loop and having them bounce from one end to the other so thats what I applied to the code. I also put in a particle system like from workshop 7. For both of these, I made their fill the video camera pixels.

### Problem Solving
- When trying to apply the moving rectangles, I ran into quite a bit of trouble. I couldn't make it bounce off the wall as it would instead reach the end of the canvas and stop. I had something like `if(blocks.x > width - 20){x--;}else if(blocks.x < 0){x++;}else{x++;}` but in then I changed it to `if(this.x == 0){this.modifier = 1;}else if(this.x >= width - 20){this.modifier = -1;}` the modifier affecting the move function of the blocks while that code is the checkEdges function. I will say that yes this code is shown in the workshop video but I just want to say that I worked this out on my own although it could be said that rewatching the video helped provide inspiration.

### Future Development
- I want to take parts of the camera image and place into blocks and have those blocks bounce around. For example, one eye could be in one retangle and it could be bouncing around while the other eye is in another rectangle and also bouncing around.
