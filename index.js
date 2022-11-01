
function foo() {
  console.group('foo')
  console.log('foo() 1')
  console.log('foo() 2')
  // console.groupEnd()
}

function bar() {
  console.group('bar')
  console.log('bar() 1')
  console.log('bar() 2')
  setTimeout(() => console.log('zz'), 1000)
  setTimeout(() => console.log('zz'), 4000)
  // console.groupEnd()
}

foo()

bar()
