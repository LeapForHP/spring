export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Parse request body
    const formData = await request.json();
    const {
      companyName,
      department,
      fullName,
      address,
      telephone,
      email,
      specification,
      preferredDeliveryDate,
      preferredUnitPrice
    } = formData;

    // Validate required fields
    if (!companyName || !department || !fullName || !email || !specification) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // SendGrid API configuration
    const SENDGRID_API_KEY = env.SENDGRID_API_KEY;
    const TO_EMAIL = env.TO_EMAIL || 'info@spring-web.jp';
    const TO_EMAIL_2 = env.TO_EMAIL_2;
    const TO_EMAIL_3 = env.TO_EMAIL_3;

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return new Response(
        JSON.stringify({ error: 'SendGrid API key not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Prepare email recipients
    const recipients = [{ email: TO_EMAIL }];
    if (TO_EMAIL_2) {
      recipients.push({ email: TO_EMAIL_2 });
    }
    if (TO_EMAIL_3) {
      recipients.push({ email: TO_EMAIL_3 });
    }

    // Email content
    const emailContent = {
      personalizations: [
        {
          to: recipients,
          subject: `お問い合わせ: ${companyName} ${fullName}様より`
        }
      ],
      from: {
        email: 'corporate@leap.site',
        name: '小松ばね工業 お問い合わせシステム'
      },
      content: [
        {
          type: 'text/plain',
          value: `
新しいお問い合わせが届きました

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

会社名: ${companyName}
部署: ${department}
お名前: ${fullName}
ご住所: ${address || '未記入'}
お電話番号: ${telephone || '未記入'}
メールアドレス: ${email}
ご希望納期: ${preferredDeliveryDate || '未記入'}
ご希望単価: ${preferredUnitPrice || '未記入'}
仕様:
${specification}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
このメールは小松ばね工業のお問い合わせフォームから自動送信されました
          `
        },
        {
          type: 'text/html',
          value: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
                <tr>
                  <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #ddd;">
                      <tr>
                        <td style="background-color: #5eb5a6; padding: 30px; text-align: center;">
                          <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: normal;">新しいお問い合わせが届きました</h1>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 40px;">
                          <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px; width: 140px;">会社名</td>
                              <td style="color: #333; font-size: 14px;">${companyName}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px;">部署</td>
                              <td style="color: #333; font-size: 14px;">${department}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px;">お名前</td>
                              <td style="color: #333; font-size: 14px;">${fullName}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px;">ご住所</td>
                              <td style="color: #333; font-size: 14px;">${address || '未記入'}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px;">お電話番号</td>
                              <td style="color: #333; font-size: 14px;">${telephone || '未記入'}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px;">メールアドレス</td>
                              <td style="color: #333; font-size: 14px;"><a href="mailto:${email}" style="color: #5eb5a6; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px;">ご希望納期</td>
                              <td style="color: #333; font-size: 14px;">${preferredDeliveryDate || '未記入'}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e0e0e0;">
                              <td style="color: #333; font-size: 14px;">ご希望単価</td>
                              <td style="color: #333; font-size: 14px;">${preferredUnitPrice || '未記入'}</td>
                            </tr>
                            <tr>
                              <td colspan="2" style="padding-top: 20px;">
                                <div style="color: #333; font-size: 14px; margin-bottom: 8px;">仕様</div>
                                <div style="background-color: #f9f9f9; padding: 15px; color: #333; font-size: 14px; white-space: pre-wrap;">${specification}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
                          <p style="margin: 0 0 5px 0; color: #666; font-size: 12px;">送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
                          <p style="margin: 0; color: #999; font-size: 11px;">このメールは小松ばね工業のお問い合わせフォームから自動送信されました</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `
        }
      ]
    };

    // Send email via SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailContent),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    } else {
      const errorText = await response.text();
      console.error('SendGrid error:', errorText);

      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: errorText }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

  } catch (error) {
    console.error('Function error:', error);

    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
