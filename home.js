/* JS for home page */

var factList = ["One in 5 American adults have experienced a mental health issue.",
"One in 10 students have suffered a period of depression.",
"One in 25 Americans lived with a serious mental illness, such as schizophrenia, bipolar disorder, or major depression.",
"Suicide is the 10th leading cause of death in the United States.",
"Around 20% of the world’s children and adolescents have mental disorders or problems.",
"About 800,000 people commit suicide each year.",
"War and disasters have a large impact on mental health.",
"Mental disorders are important risk factors for other diseases, as well as unintentional and intentional injury.",
"Stigma and discrimination against patients and families prevent people from seeking mental health care.",
"Globally, there is huge inequity in the distribution of skilled human resources for mental health.",
]

var button = $('.factButton')
var output = $('.fastFacts')

button.on("click", doSomething)

function doSomething() {
  event.preventDefault();
console.log("you clicked the button!");
var fact = Math.floor(Math.random() * factList.length);
var factOutput = factList[fact];
output.text(factOutput);
}
