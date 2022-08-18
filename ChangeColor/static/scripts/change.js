function hexToRgb(color) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  color = color.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });
  
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : {
      r: 0,
      g: 0,
      b: 0
  };
}

function colorImage(imgId,hexaColor) {
  // create hidden canvas (using image dimensions)
  var imgElement = document.getElementById(imgId);
  
  var canvas = document.createElement("canvas");
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(imgElement,0,0);
  
  var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
  
  var data = imageData.data;

  // convert image to grayscale
  var rgbColor = hexToRgb(hexaColor);
  
  for(var p = 0, len = data.length; p < len; p+=4) {
      //if(data[p+3] == 0)
      //   continue;
      data[p + 0] = rgbColor.r;
      data[p + 1] = rgbColor.g;
      data[p + 2] = rgbColor.b;
      //data[p + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);

  // replace image source with canvas data
  imgElement.src = canvas.toDataURL();
}


document.getElementById('sel_top').onchange = function(){
  colorImage('img_top', this.value);
}
document.getElementById('ortaResim').onclick = function(){
  document.getElementById('img_mid').style.backgroundImage = "url('https://i.pinimg.com/736x/c8/83/5a/c8835a6e6574327ef5b033a66098ecce.jpg')"

}
document.getElementById('ilkResim').onclick = function(){
  document.getElementById('img_bottom').style.backgroundImage = "url('https://www.gezginfoto.com.tr/images/makaleler/etkili_manzara_11.jpg')"
}

