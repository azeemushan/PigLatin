function translatePigLatin(str) {
  let l=str.length;
  let a="";
  let v="aeiou";
  let ns="";
  if(v.includes(str[0])){
    console.log("includes vowel");
    ns=str+"way";
    console.log(ns);
    return ns;
  }
  else{
    let counter=0;
    console.log("no vowel");
    ns=str;
    while(!v.includes(ns[0])){
    let x=ns[0];
    console.log("adding "+x);
    a=a+x;
    console.log("a: "+a);
    ns=ns.slice(1,str.length);
    console.log("updated");
    console.log(ns);
    counter++;
    if(counter==l){
      ns=str+"ay";
      return ns;
    }
    }
    
    console.log(ns);
    ns=ns+a+"ay";
    console.log(ns);
    return ns;
  }
  
  return str;
}

translatePigLatin("glove");
