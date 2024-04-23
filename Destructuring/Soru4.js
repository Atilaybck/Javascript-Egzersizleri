// Bir fonksiyon oluşturuyoruz
function getCoordinates() {
    return [40.7128, -74.0060];
  }
  
  // Fonksiyondan dönen değeri destructuring kullanarak alıyoruz
  const [latitude, longitude] = getCoordinates();
  
  // Alınan değerleri kullanma
  console.log("Latitude:", latitude); // 40.7128
  console.log("Longitude:", longitude); // -74.0060