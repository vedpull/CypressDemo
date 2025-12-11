# 🛒 SauceDemo E2E Test Automation Project

Bu proje, **[SauceDemo](https://www.saucedemo.com/)** e-ticaret sitesinin kritik kullanıcı senaryolarını test etmek amacıyla **Cypress** kullanılarak geliştirilmiştir.

Junior QA Engineer pozisyonu için geliştirdiğim bu projede; **Page Object Model (POM)** yapısına hazırlık, dinamik selector kullanımı ve assertion (doğrulama) teknikleri uygulanmıştır.

## 🛠️ Kullanılan Teknolojiler

* **Dil:** JavaScript (ES6+)
* **Framework:** Cypress 13.x
* **Editör:** VS Code
* **Versiyon Kontrol:** Git & GitHub

## 🧪 Test Senaryoları (Features)

Şu ana kadar aşağıdaki senaryolar otomatize edilmiştir:

1.  **✅ Başarılı Login:** Standart kullanıcı ile sisteme giriş yapılması ve Inventory sayfasına yönlendirme kontrolü.
2.  **❌ Başarısız Login (Negative Test):** Yanlış şifre girildiğinde sistemin doğru hata mesajını ("Epic sadface...") verdiğinin doğrulanması.
3.  **🔒 Güvenlik Kontrolü:** Kilitli kullanıcı (locked_out_user) ile giriş denemesi. (Eklenecek)

## 🚀 Kurulum ve Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için:

1.  Projeyi klonlayın:
    ```bash
    git clone [https://github.com/vedpull/CypressDemo.git](https://github.com/vedpull/CypressDemo.git)
    ```

2.  Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

3.  Cypress arayüzünü açın:
    ```bash
    npx cypress open
    ```

## 👨‍💻 Yazar

Vedat Pulat - *Junior QA Automation Engineer*