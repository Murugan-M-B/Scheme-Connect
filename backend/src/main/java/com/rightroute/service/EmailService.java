package com.rightroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public void sendSubscriptionEmail(String toEmail, String schemeName) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(toEmail);
            message.setSubject("Scheme Connect: Subscription Confirmed ✓");
            message.setText(
                "Dear Citizen,\n\n" +
                "You have successfully subscribed to updates for:\n" +
                "📋 Scheme: " + schemeName + "\n\n" +
                "You will receive:\n" +
                "  • Deadline reminders\n" +
                "  • Scheme eligibility updates\n" +
                "  • Important announcements\n\n" +
                "Thank you for using Scheme Connect.\n\n" +
                "Regards,\n" +
                "Scheme Connect Team\n" +
                "Tamil Nadu Government Schemes Portal"
            );

            mailSender.send(message);
            System.out.println("✓ Email sent successfully to: " + toEmail);

        } catch (Exception e) {
            System.err.println("✗ Email failed: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Email sending failed: " + e.getMessage());
        }
    }
}