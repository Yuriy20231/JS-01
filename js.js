function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

 firstArray.forEach(function (element, index){
   if(secondArray.includes(firstArray(element))){
commonElements.push(firstArray(element))
   }
 })

  return commonElements;
  // Change code above this line
}
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])