function format(){
    var b=document.getElementsByTagName("pre");
    for (i=0;i<b.length;i++) {
        hljs.highlightBlock(b[i],null,false)
    }
    
  var eles = document.getElementsByTagName('pre');
  for (i = 0; i < eles.length; i++) {
    var classes = eles[i].className;
    classes.split(' ');
    classes.push('paper');
    classes.join(' ');
    eles[i].className = classes;
  }

}

