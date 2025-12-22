document.addEventListener('DOMContentLoaded', function() {
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
const themeIcon = themeToggleBtn.querySelector('i');

if (themeToggleBtn && themeIcon) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'bi bi-sun-fill';
        themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
    }
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'bi bi-moon-fill';
            themeToggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode';
            localStorage.setItem('theme', 'light');
            showMessage('Switched to Light Mode', 'success');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'bi bi-sun-fill';
            themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
            localStorage.setItem('theme', 'dark');
            showMessage('Switched to Dark Mode', 'success');
        }   
    });
}   

    const form = document.getElementById('myForm');
    if (!form) {
        console.error('did not find the form');
        return;
    }
    const submitBtn = document.querySelector('.send-btn');
    if (!submitBtn) {
        console.error('did not find the submit button');
        return;
    }
    

    if (!form || !submitBtn) {
        console.error('did not find the form or submit button');
        return;
    }
    
   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
       
        if (!name || !email || !message) {
            showMessage('⚠ Please fill in all required fields', 'error');
            return;
        }
        
       
        if (!isValidEmail(email)) {
            showMessage('⚠ Please enter a valid email address', 'error');
            return;
        }
        
      
        simulateSubmission(name, email);
    });
    
  
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
    
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
      
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
        
        
        input.addEventListener('input', function() {
            clearMessage();
        });
    });
    
  
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
   
    function simulateSubmission(name, email) {
    
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.8';
        
    
        setTimeout(() => {
         
            showMessage(`Thank you ${name}! Your message has been sent successfully.\nWe will respond to ${email} within 24 hours.`, 'success');
            
         
            form.reset();
            
  
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            
        }, 2000); 
    }
    
 
    function showMessage(text, type) {
  
        clearMessage();
        
      
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;
        
       
        submitBtn.parentNode.insertBefore(messageDiv, submitBtn.nextSibling);
        
   
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 5000);
    }
    

    function clearMessage() {
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
});