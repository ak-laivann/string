# Print a word letter by letter on click (and Enter)

used Ant Design for the first time

npm install --save antd

------- in App.js -----------------------

import 'antd/dist/antd.css'

-------- in the component in which antd should be used ----------

import { component } from 'antd'

--------------------------------------------------------------

### Steps

put a Button element and Input element after importing them from antd

the button element has the onClick function set to handleClick function

the handleClick function will not be returning any value mind you...

the handle click function is used to change the setState...

previously the useStateshould be used in counter and input element....

the input element will have the placeholder andd onChange attribute which corresponds to handleChange function which can set the input value

the setState values are called separately in the synntaax following

{text.length > 0 ? <strong><li key={text}>{text}</li></strong> : "suma"}

.map method can be used if a separate array is used to searate the letters or split method is used....

.split method will separate the letters and create an array

a counter is also used so that they can be used in charAt method to call the letters separately...

onPressEnter is also used...

in order to use two functions in the same event handler ------------>

onEventHandler={() => {function1();function2();}} must be used...

mind you that the function must have parenthesis in this method....

now the pictures....

## <------------ initial state ----------->

![1](https://user-images.githubusercontent.com/110388514/186926882-c501716c-6614-40a3-89ae-64026c58ded9.PNG)

## <----------- after adding the element -----------> 

![2](https://user-images.githubusercontent.com/110388514/186927030-68ef72a3-6e12-4f0a-b3e8-a9ae5d9ca411.PNG)

## <------- after first enter ------>

![3](https://user-images.githubusercontent.com/110388514/186927136-148945c0-f16e-421c-9d7e-b444b6890040.PNG)

## <--------- after the next enter ---------->

![4](https://user-images.githubusercontent.com/110388514/186927188-257eb475-b052-4c65-bff7-9a4f79b448b1.PNG)

## <--------- final element ----------->

![5](https://user-images.githubusercontent.com/110388514/186927252-08370b8b-698e-43fd-9d37-10cff2517ed2.PNG)
