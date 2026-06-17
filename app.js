// 1. Create a layout stack (container) to hold things vertically
const layout = new VerticalStackLayout();

// 2. Create a real Android button using JavaScript
const myButton = new Button();
myButton.text = "Click Me!";

// 3. Make the button do something when you tap it
myButton.on("tap", function() {
    alert("You clicked the button using pure JavaScript!");
});

// 4. Put the button inside your layout container
layout.addChild(myButton);
