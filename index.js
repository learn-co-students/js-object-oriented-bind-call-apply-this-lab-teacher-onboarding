//Your code here
justInvoke = (fn) => fn()

setThisWithCall = (fn, thisValue, arg) => fn.call(thisValue, arg)

setThisWithApply = (fn, thisValue, arg) => fn.apply(thisValue, arg)

returnNewFunctionOf = (functionToBeCopied, thisValue) => functionToBeCopied.bind(thisValue)



