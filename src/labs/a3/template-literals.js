function TemplateLiterals(){
  let loggedIn=false;
    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    console.log(result1);
    
    const result2 = `2 + 3 = ${2 + 3}`;
    console.log(result2);
    
    const username = "alice";
    const greeting1 = `Welcome home ${username}`;
    console.log(greeting1);
    
    loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
    console.log(greeting2)
  
  
    return (
      <div>
        <h3>Template Literals</h3>
        result1 = {result1}<br />
        result2 = {result2}<br/>
        greeting1 = {greeting1}<br/>
        greeting2 = {greeting2}<br/>
      </div>
    );
  
  }
  
  export default TemplateLiterals;