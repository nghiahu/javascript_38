document.addEventListener('DOMContentLoaded', () => {
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const passwordLength = document.getElementById('password-length');
    const generatePassword = document.getElementById('generate-password');
    const generatedPassword = document.getElementById('generated-password');
    const copyPassword = document.getElementById('copy-password');
  
    generatePassword.addEventListener('click', () => {
      const hasUppercase = uppercase.checked;
      const hasLowercase = lowercase.checked;
      const hasNumbers = numbers.checked;
      const hasSymbols = symbols.checked;
      const passwordLengthValue = parseInt(passwordLength.value, 10);
  
      if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
        alert('Please select at least one character set.');
        return;
      }
  
      generatedPassword.value = generateRandomPassword(
        hasUppercase,
        hasLowercase,
        hasNumbers,
        hasSymbols,
        passwordLengthValue
      );
    });
  
    copyPassword.addEventListener('click', () => {
      generatedPassword.select();
      document.execCommand('copy');
    });
  });
  
  function generateRandomPassword(
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    length
  ) {
    let charset = '';
  
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    if (charset.length === 0) {
      throw new Error('At least one character set must be enabled');
    }
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
    return password;
  }