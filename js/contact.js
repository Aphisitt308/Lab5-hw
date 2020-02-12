let firebaseConfig = {
    apiKey: "AIzaSyC1IaZrfjwsSJpu4GuwL12ijQip68lCRS8",
    authDomain: "localhost",
    projectId: "lab-5-hw",
    
  };
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let id = [];

$('#save').click(() => {
    // if ($('#name').val() == ''){
    //     $('#name').focus();
    // }else if($('#email').val() == ''){
    //     $('#email').focus();
    // }else if ($('#detail').val() == ''){
    //     $('#detail').focus();
    // }else if(Number($('#phone').val()) == ''){
    //     Number($('#phone').focus())
    // }else{
    // if (!validateText('name')) $('#name').focus()
    //     else if (!validateText('email')) $('#email').focus()
    //     else if (!validateText('detail')) $('#detail').focus()
    //     else if (!validatePhone('phone')) $('#phone').focus()
    //     else {
    db.collection("contact").add({
        
        Name: $('#name').val(),
        Gender: getGender(),
        Email: $('#email').val(),
        Detail: $('#detail').val(),
        Phone: Number($('#phone').val()),
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#name').val('')
        $('#gender').val('1')
        $('#email').val('')
        $('#detail').val('')
        Number($('#phone').val(''))

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
// }
alert('a');
    console.log($('#name').val()),
    console.log($('#email').val()),
    console.log(getGender()),
    console.log($('#detail').val())
})
    
    
    


$('#reset').click(() => {
    // db.collection('contact').add({
    //     Name : $('#name').val(),
    //     Gender : $('#gender').val(),
    //     grade: Number($('#grade').val()),
    // })
    $('#name').val() = '',
    $('#email').val() = '',
    $('#detail').val()= '',
    Number($('#phone').val()) = ''
})



// db.collection("contact").orderBy("name").onSnapshot(doc => {
//     let table = $('tbody')[0]
//     $("tbody tr").remove()
//     doc.forEach(item => {
//         let row = table.insertRow(-1)
//         let firstCell = row.insertCell(0)
//         let secoundCell = row.insertCell(1)
//         let tirdCell = row.insertCell(2)
        
//         firstCell.textContent = item.data().Name
//         secoundCell.textContent = item.data().Gender
//         tirdCell.textContent = item.data().Email

        // let Namecell = document.createTextNode(item.data().Name)
        // let Gendercell = document.createTextNode(item.data().Gender)
        // let Emailcell = document.createTextNode(item.data().Email)
        // firstCell.appendChild(Namecell)
        // secoundCell.appendChild(Gendercell)
        // tirdCell.appendChild(Emailcell)


        
        // gpa += (item.data().grade * item.data().credit)
        // credit += Number(item.data().credit)
        

        // let subjectCell = document.createTextNode(item.data().subject)
        // let gradeCell = document.createTextNode(item.data().grade)
        // firstCell.appendChild(subjectCell)
        // secoundCell.appendChild(gradeCell)
        
//     });
    
// })

function getGender() {
    let radios = document.getElementsByName('gender');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return i + 1;
        }
    }
}