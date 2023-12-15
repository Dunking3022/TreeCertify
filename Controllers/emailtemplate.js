exports.getHTML = (donorname,treecount) => {
    return (`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Tree-Planting Contribution</title>
        <style>
            body {
                font-family: 'Luciole', sans-serif; /* Change font to Roboto */
                margin: 0;
                padding: 0;
                background-color: #eaf7ef; /* Background color */
                background-image: url('https://cdn.shopify.com/s/files/1/0499/2817/5767/products/il_fullxfull.3204359785_n0nk_2000x.jpg?v=1625236208');
                background-size: 50%;
                background-repeat: tile;
            }
    
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: rgba(221, 255, 221, 0.95); /* Glass-themed background color with opacity */
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                color: #4CAF50;
            }
    
            p {
                color: #555555;
                line-height: 1.6;
            }
    
            .button {
                display: inline-block;
                padding: 10px 20px;
                font-size: 16px;
                text-align: center;
                text-decoration: none;
                background-color: #4CAF50;
                color: #ffffff;
                border-radius: 4px;
            }
    
            .certificate {
                margin-top: 20px;
                text-align: center;
            }
        </style>
        <!-- Add the Roboto font -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Luciole:wght@400;700&display=swap">
    </head>
    <body>
    
    <div class="container">
        <h1>Heartfelt Thanks for Your Tree-Planting Contribution 🌳</h1>
        <p>Dear ${donorname},</p>
    
        <p>We hope this email finds you well. We at TreeCertify extend our deepest gratitude for your generous contribution to our tree-planting initiative. Your support is making a significant impact on our mission to create a greener and healthier planet.</p>
    
        <p>To express our appreciation, please find attached a certificate of acknowledgment commemorating your donation of ${treecount} trees. This certificate serves as a token of our gratitude and a testament to your commitment to environmental conservation.</p>
        <p>Your dedication to our cause is truly inspiring, and we believe that together, we can continue to make a positive difference in the world. Every tree planted brings us one step closer to a sustainable future, and your contribution plays a vital role in achieving that goal.</p>
    
        <p>We invite you to share your achievement with friends and family, inspiring others to join us in this noble endeavor. Additionally, consider making an even greater impact by encouraging your network to contribute to our cause. Your influence can help amplify our collective efforts and create a lasting legacy for generations to come.</p>
    
        <p>Once again, thank you for your invaluable support. We look forward to your continued partnership in our mission to create a greener, more sustainable world.</p>
    
        <p>If you have any questions or would like to learn more about our initiatives, please do not hesitate to reach out.</p>
    
        <p>Warm regards,</p>
        <p>Tree Certify Team<br></p>
        <p>treecertify@gmail.com</p>
    
    </div>
    
    </body>
    </html>
    `);
}