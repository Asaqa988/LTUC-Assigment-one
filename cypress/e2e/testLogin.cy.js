/// <reference types= "cypress" />

function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
  const domain = "example.com"; // Replace with your desired domain
  return `${randomString}@${domain}`;
}

const randomEmail = generateRandomEmail();

let FirstNames = ["ahmad", "mohammad", "ali", "998876"];
let lastNames = ["mahmoud", "anas", "omar", "58564"];

let RandomIndex = Math.floor(Math.random() * FirstNames.length);

// describe("Login and Sign up process", () => {
//   it("sign up process", () => {
//     cy.visit("https://www.automationteststore.com/");

//     // cy.get("#customer_menu_top").click();

//     // cy.contains("Continue").click();

//     // cy.get("#AccountFrm_firstname").type(FirstNames[RandomIndex]);

//     // cy.get("#AccountFrm_lastname").type(lastNames[RandomIndex]);

//     // cy.get("#AccountFrm_email").type(randomEmail);

//     // cy.get("#AccountFrm_country_id").select("Jordan")

//   });
// });

// describe('Print the name of the first item and the last item ', () => {
//   it('first category - FEATURED', () => {
//         cy.visit("https://www.automationteststore.com/");

//         cy.get('#featured > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//           cy.log("first item inside the Featured Category is : ",the_text)
//         })

//         cy.get('#featured > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//           cy.log("last item inside the Featured Category is : ",the_text)

//         })
//   });

//   it('second category - latest products', () => {
//     cy.visit("https://www.automationteststore.com/");

//     cy.get('#latest > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//       cy.log("first item inside the latest Category is : ",the_text)
//     })

//     cy.get('#latest > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//       cy.log("last item inside the latest Category is : ",the_text)

//     })
// });
// });

// describe("this is to see the price multiply by 10 ", () => {
//   it("hey we need to see the price multiply by 10 for the first item inside best seller category", () => {
//     cy.visit("https://www.automationteststore.com/");
//     cy.get("#bestseller > .container-fluid")
//       .find(".oneprice")
//       .first()
//       .invoke("text")
//       .then((the_text) => {
//         // cy.log(the_text.replace("$", "") * 10);
//         let ModifiedPrice = (the_text.replace("$",""))*10
//         cy.log(ModifiedPrice)

//         // alert(`the price of the element multiplied by 10 is ${ModifiedPrice}`)


//         let myage = 30

//         myage+=myage

//         cy.log(myage)
//       });
//   });
// });


describe('assigment ', () => {
  it('bla bla ', () => {
        cy.visit("https://www.automationteststore.com/");

        cy.get('#special > .container-fluid').find('.pricenew').invoke('text').then((new_price)=>{
          cy.log(new_price)
        })
        cy.get('#special > .container-fluid').find('.priceold').invoke('text').then((old_price)=>{
          cy.log(old_price)
        })



  });
});