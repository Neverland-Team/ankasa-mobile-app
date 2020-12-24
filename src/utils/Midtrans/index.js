export const MidtransPage = (token) => {
    return `
    <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-server-ZvK1XrFozq8bFIUHYH5grfSk"></script>
        </head>
        <body>
         <script>
            snap.pay('${token}', {
              onSuccess: function(result) {
                console.log("SUCCESS", result);
              },
              onPending: function(result) {
                console.log("Payment pending", result);
              },
              onError: function() {
                console.log("Payment error");
              }
            });
         </script>
        </body>
      </html>
    `
    } 