const tinderUser = new Object()
// console.log(tinderUser);
tinderUser.id = "123idabc"
tinderUser.name = "Sonam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sonam@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Raunak",
            lastname:"Sahni"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1  = {1: "A",2:"B"}
const obj2  = {3: "K",4: "W"}
const obj3  = {5: "K",6: "W"}
const obj4  = {7: "K",8: "W"}
// const obj3 = {obj1,obj2}
//  const obj5 = Object.assign({},obj1,obj2,obj3,obj4)
// console.log(obj5)
const obj5 = {...obj1,...obj2,...obj3,...obj4}
// console.log(obj5);

// user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename:"JS in Hindi",
    price: "999",
    Teacher:"Hitesh Sir"
}
const {Teacher} = course
console.log(Teacher);

// const navbar =({company}) =>{

// }

// navbar(company = "Raunak") //destructuring
// {
//     "name":"Raunak",
//     "City" : "Pune"
// }  //JSON

//JSON API

//{RANDOMUSERME}

// {"results":[{"gender":"female","name":{"title":"Mrs","first":"Christina","last":"Falch"},"location":{"street":{"number":4218,"name":"Gäbleins vei"},"city":"Bekkjarvik","state":"Vest-Agder","country":"Norway","postcode":"2116","coordinates":{"latitude":"44.8990","longitude":"165.9381"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"christina.falch@example.com","login":{"uuid":"3359640e-8422-467a-9004-f2a8de89e09a","username":"crazyzebra262","password":"1225","salt":"sjizDPeb","md5":"6c3943ae1d2adbc24240a197e04a5ed6","sha1":"19d7a9d0493f909d1c0868d155bcc17bbfcf3d3b","sha256":"2c490533b43095dfb8d998d04edc16edbed99512248c3ab856fde6ad213d43f8"},"dob":{"date":"1982-06-01T21:37:40.495Z","age":44},"registered":{"date":"2012-12-22T23:13:29.645Z","age":13},"phone":"85680564","cell":"47180073","id":{"name":"FN","value":"01068218477"},"picture":{"large":"https://randomuser.me/api/portraits/women/82.jpg","medium":"https://randomuser.me/api/portraits/med/women/82.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/82.jpg"},"nat":"NO"}],"info":{"seed":"bb2029116bb9359e","results":1,"page":1,"version":"1.4"}}

// [JSON FORMATTER]
// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Mrs",
//         "first": "Christina",
//         "last": "Falch"
//       },
//       "location": {
//         "street": {
//           "number": 4218,
//           "name": "Gäbleins vei"
//         },
//         "city": "Bekkjarvik",
//         "state": "Vest-Agder",
//         "country": "Norway",
//         "postcode": "2116",
//         "coordinates": {
//           "latitude": "44.8990",
//           "longitude": "165.9381"
//         },
//         "timezone": {
//           "offset": "+4:00",
//           "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
//         }
//       },
//       "email": "christina.falch@example.com",
//       "login": {
//         "uuid": "3359640e-8422-467a-9004-f2a8de89e09a",
//         "username": "crazyzebra262",
//         "password": "1225",
//         "salt": "sjizDPeb",
//         "md5": "6c3943ae1d2adbc24240a197e04a5ed6",
//         "sha1": "19d7a9d0493f909d1c0868d155bcc17bbfcf3d3b",
//         "sha256": "2c490533b43095dfb8d998d04edc16edbed99512248c3ab856fde6ad213d43f8"
//       },
//       "dob": {
//         "date": "1982-06-01T21:37:40.495Z",
//         "age": 44
//       },
//       "registered": {
//         "date": "2012-12-22T23:13:29.645Z",
//         "age": 13
//       },
//       "phone": "85680564",
//       "cell": "47180073",
//       "id": {
//         "name": "FN",
//         "value": "01068218477"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/82.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
//       },
//       "nat": "NO"
//     }
//   ],
//   "info": {
//     "seed": "bb2029116bb9359e",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }
