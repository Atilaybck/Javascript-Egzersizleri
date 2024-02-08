// Soru 13 
//İki tarih arasındaki farkı hesaplayan bir fonksiyon yazın.

function tarihFarkHesapla(tarih1, tarih2) {
    let fark = Math.abs(tarih1 - tarih2);
    return fark / (1000 * 60 * 60 * 24); // Sonucu gün cinsinden al
}
