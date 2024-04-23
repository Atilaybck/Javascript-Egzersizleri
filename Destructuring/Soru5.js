// Bir fonksiyon oluşturuyoruz
function getUser() {
    return {
      id: 123,
      username: 'example_user',
      email: 'example@example.com',
      preferences: {
        theme: 'dark',
        language: 'en'
      }
    };
  }
  
  // Fonksiyondan dönen değeri destructuring kullanarak alıyoruz
  const { id, username, email, preferences: { theme, language } } = getUser();
  
  // Alınan değerleri kullanma
  console.log("User ID:", id); // 123
  console.log("Username:", username); // example_user
  console.log("Email:", email); // example@example.com
  console.log("Theme Preference:", theme); // dark
  console.log("Language Preference:", language); // en