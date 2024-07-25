document.addEventListener('securitypolicyviolation', function(e) {
    console.log('CSP Violation:', e);
    console.log('Blocked URI:', e.blockedURI);
    console.log('Violated Directive:', e.violatedDirective);
    console.log('Original Policy:', e.originalPolicy);
    console.log('Source File:', e.sourceFile);
    console.log('Line Number:', e.lineNumber);
    console.log('Column Number:', e.columnNumber);
});