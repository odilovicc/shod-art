<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- Логотип -->
            <div class="footer-logo">
                <h1>SHOD-ART</h1>
            </div>

            <!-- Помощь и информация -->
            <div class="footer-links">
                <div class="footer-links-section">
                    <h2>HELP & INFORMATION</h2>
                    <ul>
                        <li><a href="#">35% Off Black Friday VIP - Sign Up</a></li>
                        <li><a href="#">Black Friday FAQs</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Latest Arrivals</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact Customer Support</a></li>
                        <li><a href="#">Taskrabbit Mounting / Assembly Service</a></li>
                        <li><a href="#">How To Hang Your Mirror</a></li>
                        <li><a href="#">Delivery, Returns & Exchanges</a></li>
                        <li><a href="#">International Delivery & Returns</a></li>
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <!-- Покупки с уверенностью -->
                <div class="footer-links-section">
                    <h2>SHOP WITH CONFIDENCE</h2>
                    <ul>
                        <li><a href="#">Can I Hold My Order?</a></li>
                        <li><a href="#">Free UK Delivery + 90 Days Free Returns</a></li>
                        <li><a href="#">10 Year Warranty Guarantee</a></li>
                        <li><a href="#">100% Secure Checkout</a></li>
                        <li><a href="#">Our Plastic Neutral Mission</a></li>
                        <li><a href="#">Trade</a></li>
                    </ul>
                </div>

                <!-- Условия и положения -->
                <div class="footer-links-section">
                    <h2>TERMS & CONDITIONS</h2>
                    <ul>
                        <li><a href="#">T&Cs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <!-- Контактная информация -->
            <div class="footer-contact">
                <p>Head Office: SHOD-ART, 2 Wellington Cl, Parkgate Industrial Estate, Knutsford WA16 8XL</p>
                <p>Company Number: 07205943</p>
                <p>VAT Number: 786452685</p>
            </div>

            <!-- Социальные сети -->
            <div class="footer-social">
                <a href="#">
                    <AppIcon icon="facebook" />
                </a>
                <a href="#">
                    <AppIcon icon="instagram" />
                </a>
                <a href="#">
                    <AppIcon icon="pinterest" />
                </a>
                <a href="#">
                    <AppIcon icon="tiktok" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped lang="stylus">
    .footer {
      background-color: #333;
      color: #fff;
      padding: 40px 0;
  
      .footer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
  
        .footer-logo {
          margin-bottom: 40px;
  
          h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #fff;
          }
        }
  
        .footer-links {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 40px;
          flex-wrap: wrap; /* Для адаптивности */
  
          .footer-links-section {
            width: 30%;
            margin-bottom: 20px;
  
            h2 {
              font-size: 1.2rem;
              font-weight: bold;
              margin-bottom: 15px;
            }
  
            ul {
              list-style: none;
              padding: 0;
  
              li {
                margin: 8px 0;
  
                a {
                  color: #bbb;
                  text-decoration: none;
                  font-size: 1rem;
  
                  &:hover {
                    color: #fff;
                  }
                }
              }
            }
          }
        }
  
        .footer-contact {
          font-size: 0.875rem;
          color: #bbb;
          margin-bottom: 20px;
          text-align: center;
        }
  
        .footer-social {
          display: flex;
          gap: 15px;
          margin-top: 20px;
  
          a {
            display: block;
            width: 24px;
            height: 24px;
  
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  
    /* Адаптивные стили для мобильных устройств */
    @media (max-width: 768px) {
      .footer-container {
        padding: 0 15px;
      }
  
      .footer-logo {
        margin-bottom: 20px;
  
        h1 {
          font-size: 2rem;
        }
      }
  
      .footer-links {
        flex-direction: column; /* Переводим на колонку для мобильных устройств */
        align-items: center;
      }
  
      .footer-links-section {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
  
        h2 {
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
  
        ul {
          li {
            margin: 5px 0;
  
            a {
              font-size: 0.9rem;
            }
          }
        }
      }
  
      .footer-contact {
        font-size: 0.75rem;
      }
  
      .footer-social {
        justify-content: center;
        gap: 10px;
      }
    }
  
    /* Для очень маленьких экранов, таких как мобильные телефоны */
    @media (max-width: 480px) {
      .footer-logo h1 {
        font-size: 1.5rem;
      }
  
      .footer-links-section h2 {
        font-size: 1rem;
      }
  
      .footer-contact {
        font-size: 0.7rem;
      }
  
      .footer-social {
        gap: 8px;
      }
    }
  </style>