/**
 * @param {string} s
 * @return {string}
 */

var removeAndReverseParentheses = function(s) {
    if(s.length === 0) return '';
    let stack = [[]];
    for(let i = 0; i < s.length; i++) {
    
        if(s[i] === '('){
            stack.push('');
        } 
        else if(s[i] === ')') {
        
            let tmp = stack.pop();
            tmp = tmp.split('').reverse().join('');
            
            if(stack.length === 0){
                stack.push(tmp);
            }
            else{
                stack[stack.length-1] = stack[stack.length-1] + tmp;
            }
        }
        else {
            stack[stack.length-1] = stack[stack.length-1] + s[i];
        }
    }
    return stack.join('');
};

console.log(removeAndReverseParentheses('foo(bar)'));
console.log(removeAndReverseParentheses('(bar)'));
console.log(removeAndReverseParentheses('foo(bar)blim'));
console.log(removeAndReverseParentheses('foo(foo(bar))blim'));
