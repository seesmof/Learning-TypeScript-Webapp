{
  console.log(eval("3 + 5"));

  function Main() {
    function greetMe(name: string) {
      alert(`Hello ${name}!`);
    }
    greetMe("World");
  }

  Main();
}
{
  const Früh = "Fröhling";

  //   a one line comment
  /*
   * a multi line comment
   */
  //   cannot nest multiline comments

  var x = 42;
  let y = 13;

  let x;
  console.log(x);

  const three: number = 3;
  const pi: number = 3.14;
  const e: number = 2.71;
  const euler: number = 2.71;
  console.log(`pi: ${pi}\ne: ${e}\neuler: ${euler}\nthree: ${three}`);
  //   const x; == error

  let letUsSee: number = 0;
  if (Math.random() < 0.5) {
    letUsSee = 42;
  }
  console.log(letUsSee);

  if (true) {
    var thisIsBlockScoped: string = "Blocks!";
  }
  console.log(thisIsBlockScoped);
}
