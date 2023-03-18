//student grade generator
// const grade= number;
function gradeGenerator(number){
    if(number>79){
        return 'A';
    }else if(number>=60&&number<79){
        return 'B';
    }else if(number>=49&&number<60){
        return 'C';
    }else if(number>=40&&number<49){
        return 'D';
    }else if(number>=0&&number<40){
        return 'E';
    }else{
        return 'Please input a number'
    }
}
gradeGenerator();
//end of program
//speed detector
//const speed=num;
const speedDetector=function(num){
    if (num<=70){
        return "Ok.";
    }else if(num>70){
      diff= num-70;
      point= diff/5;
      return Math.ceil(point);
    }
}
const licenseCheck=function(fn){
  if(point>=12){
    return 'License suspended.'
  }else{
    return fn;
  }
}
licenseCheck(speedDetector());
//end of program
