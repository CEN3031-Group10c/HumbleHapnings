
/*
this function randomly picks a background 
and returns the classname of the background image in css
*/
export function randomImage(){
    var backgroundImages = ['book1-background', 'cathedral1-background', 'field1-background'];
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var randomImg = backgroundImages[randomIndex];
    return randomImg;
}    