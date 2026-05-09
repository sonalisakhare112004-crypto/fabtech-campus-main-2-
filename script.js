function toggleChatbot() {
  var chatbot = document.querySelector('.chatbot');
  chatbot.classList.toggle('open');

  var chatIcon = document.querySelector('.chat-icon');
  chatIcon.style.display = chatbot.classList.contains('open') ? 'none' : 'flex';
}
  
  function sendMessage() {
    var input = document.querySelector('.user-input input');
    var message = input.value.trim();
    if (message !== '') {
      var chatbox = document.querySelector('.chatbot-messages');
  
      // Append user message
      var userMessage = createUserMessage(message);
      chatbox.appendChild(userMessage);
  
      // Clear the input field
      input.value = '';
  
      // Scroll to bottom
      chatbox.scrollTop = chatbox.scrollHeight;
  
      // Handle user input and provide bot response
      var botResponse = getBotResponse(message);
  
      // Append bot response
      var botMessage = createBotMessage(botResponse);
      chatbox.appendChild(botMessage);
      
      // Scroll to bottom to show the last recent bot response
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }
  
  function createUserMessage(message) {
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message', 'sent');
  
    var messageContent = document.createElement('div');
    messageContent.classList.add('message-content', 'user');
    messageContent.textContent = message;
  
    messageContainer.appendChild(messageContent);
    return messageContainer;
  }
  
  function createBotMessage(message) {
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message', 'received');
  
    var profileIcon = document.createElement('div');
    profileIcon.classList.add('profile-icon');
    var iconImg = document.createElement('img');
    iconImg.src = 'ai-icon.png';
    iconImg.alt = 'AI Icon';
    profileIcon.appendChild(iconImg);
  
    var messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;
  
    // Set a fixed width for the bot message content container
    messageContent.style.width = 'calc(75% - 50px)'; // Adjust the width as needed
  
    messageContainer.appendChild(profileIcon);
    messageContainer.appendChild(messageContent);
    return messageContainer;
  }
  
  function getBotResponse(message) {
    // Define custom bot responses based on user input
    switch (message.toLowerCase()) {
      case 'Hello':
      case 'hello':
      case 'Hi':
      case 'hi':
      case 'Hey':
      case 'hey':
        return "Hello! How can I assist you today?";
      case 'tell me something about college':
      case 'about':
        return "Our college is committed to providing quality education and fostering a supportive learning environment.";
      case 'what courses offered?':
      case 'programs':
      case 'courses':
        return "We offer a wide range of programs including Computer Science, Engineering, Business, and many more.";
      case 'for admission enquiry':
      case 'admissions':
      case 'admission':
        return "for admission inquiries, please visit our admissions page or contact our admissions office.";
      case 'how i contact to college':
      case 'contact':
        return "You can contact us at contact@fabtech.com or give us a call at +918408888657.";
      case 'what about Fees':
      case 'tuition':
      case 'fees':
        return "Tuition fees vary depending on the program and course load. For detailed information, please visit our website or contact our admissions office.";
      case 'where is the location of College?':
      case 'campus':
      case 'location':
        return "Our campus is located at Gate No. 565/1, Pandharpur Road, Sangola, Dist - Solapur - 413307. We also offer virtual campus tours for prospective students.";
      case 'tell me something about scholarships':
      case 'scholarships':
        return "We offer a range of scholarships for eligible students. To learn more about our scholarship opportunities, please visit our website.";
      case 'student life':
        return "Our college provides a vibrant student life with various clubs, organizations, and events. Students also have access to support services such as counseling and career guidance.";
      case 'tell me something about faculty':
      case 'faculty':
      case 'professors':
        return "Our faculty consists of highly qualified professors who are experts in their fields. They are dedicated to providing students with a rich learning experience.";
      case 'what facilities are provided?':
      case 'facilities':
      case 'resources':
        return "We have state-of-the-art facilities and resources to support student learning and research, including labs, libraries, and study spaces.";
      case 'tell me something about Job and Placements':
      case 'career services':
      case 'job placement':
        return "Our career services department offers support with resume writing, interview preparation, and job placement assistance to help students succeed in their career goals.";
      case 'what about internships?':
      case 'internships':
        return "We provide opportunities for internships with leading companies to help students gain real-world experience and build professional networks.";
      default:
        return "I'm sorry, I don't understand that. How can I assist you?";
    }
}
  
  // Greet the user when the page loads
  window.onload = function() {
    var chatbox = document.querySelector('.chatbot-messages');
    var botGreeting = createBotMessage("Hii there 👋 How can I help you today? 😊");
    chatbox.appendChild(botGreeting);
  };